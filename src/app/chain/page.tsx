"use client"

import React, { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Combobox } from "@/components/ui/combobox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RefreshCcw } from "lucide-react"
import { CIPHER_REGISTRY, getSortedCiphers, CipherTool } from "@/config/cipher-registry"

export default function ChainPage() {
    const [inputText, setInputText] = useState("")
    const [sourceSlug, setSourceSlug] = useState("")
    const [targetSlug, setTargetSlug] = useState("")

    const [sourceParams, setSourceParams] = useState<Record<string, any>>({})
    const [targetParams, setTargetParams] = useState<Record<string, any>>({})

    const isFirstLoad = React.useRef(true)

    useEffect(() => {
        if (isFirstLoad.current) return
        const state = { inputText, sourceSlug, targetSlug, sourceParams, targetParams }
        localStorage.setItem("CHAIN_CONVERTER_STATE", JSON.stringify(state))
    }, [inputText, sourceSlug, targetSlug, sourceParams, targetParams])

    useEffect(() => {
        const saved = localStorage.getItem("CHAIN_CONVERTER_STATE")
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                setInputText(parsed.inputText || "")
                setSourceSlug(parsed.sourceSlug || "")
                setTargetSlug(parsed.targetSlug || "")
                setSourceParams(parsed.sourceParams || {})
                setTargetParams(parsed.targetParams || {})
            } catch (e) {
                console.error("Failed to load saved state", e)
            }
        }
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

    const intermediateText = useMemo(() => {
        if (!sourceCipher || !inputText) return inputText
        try {
            return sourceCipher.logic.decode(inputText, sourceParams)
        } catch (e) {
            return "Error decoding..."
        }
    }, [inputText, sourceCipher, sourceParams])

    const outputText = useMemo(() => {
        if (!targetCipher || !intermediateText) return intermediateText
        if (intermediateText === "Error decoding...") return ""
        try {
            return targetCipher.logic.encode(intermediateText, targetParams)
        } catch (e) {
            return "Error encoding..."
        }
    }, [intermediateText, targetCipher, targetParams])

    const swapAll = () => {
        const currentSource = sourceSlug
        const currentTarget = targetSlug
        const currentSourceParams = sourceParams
        const currentTargetParams = targetParams

        setSourceSlug(currentTarget)
        setTargetSlug(currentSource)
        setSourceParams(currentTargetParams)
        setTargetParams(currentSourceParams)

        if (outputText && outputText !== "Error encoding...") {
            setInputText(outputText)
        }
    }

    const renderParams = (cipher: CipherTool | null, params: Record<string, any>, setParams: React.Dispatch<React.SetStateAction<Record<string, any>>>) => {
        const numParams = cipher?.params?.length || 0
        const useTwoCols = numParams >= 3

        return (
            <div className={`grid gap-x-3 gap-y-2 ${useTwoCols ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {cipher?.params?.map((p, index) => {
                    const isFirstOfThree = numParams === 3 && index === 0
                    return (
                        <div key={p.name} className={`flex flex-col space-y-1.5 ${isFirstOfThree ? 'col-span-2' : ''}`}>
                            <Label className="text-[10px] font-bold uppercase text-muted-foreground leading-none">{p.label}</Label>
                            {p.type === 'number' ? (
                                <Input
                                    type="number"
                                    value={params[p.name] ?? p.defaultValue}
                                    onChange={e => setParams(prev => ({ ...prev, [p.name]: parseInt(e.target.value) || 0 }))}
                                    className="h-8 px-2 py-1"
                                />
                            ) : (
                                <Input
                                    type="text"
                                    value={params[p.name] ?? p.defaultValue}
                                    onChange={e => setParams(prev => ({ ...prev, [p.name]: e.target.value }))}
                                    className="h-8 px-2 py-1"
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="container mx-auto p-6 max-w-6xl">
            <div className="flex justify-between items-center mb-10">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold tracking-tight">Chain Converter</h1>
                    <p className="text-muted-foreground text-lg">Decode from one algorithm and encode into another instantly.</p>
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
                        <CardContent className="space-y-4">
                            <div className="flex flex-col space-y-4 min-h-[90px]">
                                <div className="flex flex-col space-y-1.5 w-full">
                                    <Label className="text-[10px] font-bold uppercase text-muted-foreground leading-none">Algorithm</Label>
                                    <Combobox
                                        placeholder_text="Source Cipher"
                                        contents={ciphers}
                                        value={sourceSlug}
                                        onChange={handleSourceChange}
                                    />
                                </div>
                                <div>
                                    {renderParams(sourceCipher, sourceParams, setSourceParams)}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Encrypted Input</Label>
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
                    <div className="text-center font-bold text-primary uppercase tracking-widest text-[10px]">Swap & Chain</div>
                    <div className="hidden lg:block w-px h-20 bg-border"></div>
                </div>

                <div className="lg:col-span-3">
                    <Card className="h-full">
                        <CardContent className="space-y-4">
                            <div className="flex flex-col space-y-4 min-h-[90px]">
                                <div className="flex flex-col space-y-1.5 w-full">
                                    <Label className="text-[10px] font-bold uppercase text-muted-foreground leading-none">Algorithm</Label>
                                    <Combobox
                                        placeholder_text="Target Cipher"
                                        contents={ciphers}
                                        value={targetSlug}
                                        onChange={handleTargetChange}
                                    />
                                </div>
                                <div>
                                    {renderParams(targetCipher, targetParams, setTargetParams)}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Newly Encrypted Output</Label>
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

            {intermediateText && intermediateText !== inputText && (
                <div className="mt-8 p-4 bg-muted rounded-lg border border-dashed flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
                    <div className="text-sm">
                        <span className="font-semibold text-muted-foreground mr-2">Decoded Intermediate:</span>
                        <code className="bg-background px-2 py-1 rounded">{intermediateText}</code>
                    </div>
                </div>
            )}
        </div>
    )
}
