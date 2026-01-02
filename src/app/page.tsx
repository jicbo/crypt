"use client"

import React, { useState, useEffect, useMemo } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Combobox } from "@/components/ui/combobox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowDown, RefreshCcw } from "lucide-react"
import { CIPHER_REGISTRY, getSortedCiphers, CipherTool } from "@/config/cipher-registry"
import Link from "next/link"

export default function Home() {
	const [inputText, setInputText] = useState("")
	const [sourceSlug, setSourceSlug] = useState("plaintext")
	const [targetSlug, setTargetSlug] = useState("caesar")

	const [sourceParams, setSourceParams] = useState<Record<string, any>>({})
	const [targetParams, setTargetParams] = useState<Record<string, any>>({})

	const isFirstLoad = React.useRef(true)

	useEffect(() => {
		if (isFirstLoad.current) return
		const state = { inputText, sourceSlug, targetSlug, sourceParams, targetParams }
		localStorage.setItem("DIRECT_CONVERTER_STATE", JSON.stringify(state))
	}, [inputText, sourceSlug, targetSlug, sourceParams, targetParams])

	useEffect(() => {
		const saved = localStorage.getItem("DIRECT_CONVERTER_STATE")
		if (saved) {
			try {
				const parsed = JSON.parse(saved)
				setInputText(parsed.inputText || "")
				setSourceSlug(parsed.sourceSlug || "plaintext")
				setTargetSlug(parsed.targetSlug || "caesar")
				setSourceParams(parsed.sourceParams || {})
				setTargetParams(parsed.targetParams || {})
			} catch (e) {
				console.error("Failed to load saved state", e)
			}
		}
		// We set this to false after state updates have been scheduled
		setTimeout(() => {
			isFirstLoad.current = false
		}, 0)
	}, [])

	const ciphers = useMemo(() => getSortedCiphers('title-asc').map(c => ({ value: c.slug, label: c.title })), [])

	const sourceCipher = sourceSlug ? CIPHER_REGISTRY[sourceSlug] : null
	const targetCipher = targetSlug ? CIPHER_REGISTRY[targetSlug] : null

	const handleSourceChange = (slug: string) => {
		setSourceSlug(slug)
		const cipher = CIPHER_REGISTRY[slug]
		if (cipher?.params) {
			const initial = cipher.params.reduce((acc, p) => ({ ...acc, [p.name]: p.defaultValue }), {})
			setSourceParams(initial)
		} else {
			setSourceParams({})
		}
	}

	const handleTargetChange = (slug: string) => {
		setTargetSlug(slug)
		const cipher = CIPHER_REGISTRY[slug]
		if (cipher?.params) {
			const initial = cipher.params.reduce((acc, p) => ({ ...acc, [p.name]: p.defaultValue }), {})
			setTargetParams(initial)
		} else {
			setTargetParams({})
		}
	}

	const outputText = useMemo(() => {
		if (!inputText) return ""
		if (!sourceCipher || !targetCipher) return inputText

		try {
			const decoded = sourceCipher.logic.decode(inputText, sourceParams)
			return targetCipher.logic.encode(decoded, targetParams)
		} catch (e) {
			return "Error during conversion..."
		}
	}, [inputText, sourceCipher, targetCipher, sourceParams, targetParams])

	const swapAll = () => {
		const currentInput = inputText
		const currentOutput = outputText
		const currentSource = sourceSlug
		const currentTarget = targetSlug
		const currentSourceParams = sourceParams
		const currentTargetParams = targetParams

		setSourceSlug(currentTarget)
		setTargetSlug(currentSource)
		setSourceParams(currentTargetParams)
		setTargetParams(currentSourceParams)

		if (currentOutput && currentOutput !== "Error during conversion...") {
			setInputText(currentOutput)
		}
	}

	const renderParams = (cipher: CipherTool | null, params: Record<string, any>, setParams: React.Dispatch<React.SetStateAction<Record<string, any>>>) => {
		return (
			<div className="grid grid-cols-1 gap-4 mt-0 min-h-[58px]">
				{cipher?.params?.map(p => (
					<div key={p.name} className="flex flex-col space-y-2">
						<Label className="text-xs font-semibold uppercase text-muted-foreground">{p.label}</Label>
						{p.type === 'number' ? (
							<Input
								type="number"
								value={params[p.name] ?? p.defaultValue}
								onChange={e => setParams(prev => ({ ...prev, [p.name]: parseInt(e.target.value) || 0 }))}
								className="h-8"
							/>
						) : (
							<Input
								type="text"
								value={params[p.name] ?? p.defaultValue}
								onChange={e => setParams(prev => ({ ...prev, [p.name]: e.target.value }))}
								className="h-8"
							/>
						)}
					</div>
				))}
			</div>
		)
	}

	return (
		<div className="container mx-auto p-6 max-w-6xl">
			<div className="flex justify-between items-center mb-10">
				<div className="space-y-1">
					<h1 className="text-4xl font-bold tracking-tight">Direct Converter</h1>
					<p className="text-muted-foreground text-lg">Instant translation between any two cipher formats.</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" size="sm" onClick={() => setInputText("")}>
						Clear Text
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-stretch">
				<div className="lg:col-span-3">
					<Card className="h-full">
						<CardHeader className="pb-4">
							<CardTitle className="text-lg">Step 1: Input Source</CardTitle>
							<CardDescription>Select the source format and parameters.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-start gap-4 h-[90px]">
								<div className="flex-1 space-y-2">
									<Label>Source Cipher</Label>
									<Combobox
										placeholder_text="Source Cipher"
										contents={ciphers}
										value={sourceSlug}
										onChange={handleSourceChange}
									/>
								</div>
								<div className="flex-1">
									{renderParams(sourceCipher, sourceParams, setSourceParams)}
								</div>
							</div>

							<div className="space-y-2">
								<Label>Input Text</Label>
								<Textarea
									placeholder="Type or paste text here..."
									className="min-h-[200px] resize-none font-mono h-[calc(100%-130px)]"
									value={inputText}
									onChange={e => setInputText(e.target.value)}
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-4 py-8">
					<div className="hidden lg:block w-px h-20 bg-border"></div>
					<Button
						variant="outline"
						size="icon"
						className="rounded-full h-12 w-12 hover:rotate-180 transition-transform duration-500 bg-primary/10 border-primary/20 shrink-0"
						onClick={swapAll}
					>
						<RefreshCcw className="h-6 w-6 text-primary" />
					</Button>
					<div className="text-center font-bold text-primary uppercase tracking-widest text-[10px]">Swap & Reverse</div>
					<div className="hidden lg:block w-px h-20 bg-border"></div>
				</div>

				<div className="lg:col-span-3">
					<Card className="h-full">
						<CardHeader className="pb-4">
							<CardTitle className="text-lg">Step 2: Target Selection</CardTitle>
							<CardDescription>Select how you want to re-encode the text.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-start gap-4 h-[90px]">
								<div className="flex-1 space-y-2">
									<Label>Target Cipher</Label>
									<Combobox
										placeholder_text="Target Cipher"
										contents={ciphers}
										value={targetSlug}
										onChange={handleTargetChange}
									/>
								</div>
								<div className="flex-1">
									{renderParams(targetCipher, targetParams, setTargetParams)}
								</div>
							</div>

							<div className="space-y-2">
								<Label>Converted Output</Label>
								<Textarea
									readOnly
									placeholder="Target output will appear here..."
									className="min-h-[200px] resize-none font-mono bg-muted h-[calc(100%-130px)]"
									value={outputText}
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
