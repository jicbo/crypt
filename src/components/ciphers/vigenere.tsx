"use client"
import React, { useState } from "react"
import CipherLayout from "./CipherLayout"
import { ALPHABET } from "@/lib/constants"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function VigenereCipher() {
	const [key, setKey] = useState("KEY")

	const vigenere = (text: string, encrypt: boolean) => {
		if (!key) return text
		let result = ""
		let keyIndex = 0
		const cleanKey = key.toLowerCase().split("").filter(char => ALPHABET.includes(char))

		if (cleanKey.length === 0) return text

		for (let i = 0; i < text.length; i++) {
			const char = text[i]
			const charLower = char.toLowerCase()
			const alphaIndex = ALPHABET.indexOf(charLower)

			if (alphaIndex === -1) {
				result += char
				continue
			}

			const keyChar = cleanKey[keyIndex % cleanKey.length]
			const keyShift = ALPHABET.indexOf(keyChar)

			let newIndex
			if (encrypt) {
				newIndex = (alphaIndex + keyShift) % ALPHABET.length
			} else {
				newIndex = (alphaIndex - keyShift + ALPHABET.length) % ALPHABET.length
			}

			const newChar = ALPHABET[newIndex]
			result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar
			keyIndex++
		}
		return result
	}

	return (
		<CipherLayout
			encode={(t) => vigenere(t, true)}
			decode={(t) => vigenere(t, false)}
		>
			<div className="flex flex-col space-y-2 w-full max-w-xs">
				<Label htmlFor="vigenere-key">Secret Key</Label>
				<Input
					id="vigenere-key"
					value={key}
					onChange={(e) => setKey(e.target.value)}
					placeholder="Enter key..."
				/>
			</div>
		</CipherLayout>
	)
}
