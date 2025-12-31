"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { ALPHABET } from "@/lib/constants"

export default function AtbashCipher() {
	const atbashConvert = (text: string) => {
		return text.split("").map(char => {
			const index = ALPHABET.indexOf(char.toLowerCase())
			if (index === -1) return char

			const reversedChar = ALPHABET[ALPHABET.length - 1 - index]
			return char === char.toUpperCase() ? reversedChar.toUpperCase() : reversedChar
		}).join("")
	}

	return (
		<CipherLayout encode={atbashConvert} decode={atbashConvert}>
			<p className="text-sm text-muted-foreground text-center">
				Atbash is a substitution cipher where the alphabet is reversed (A=Z, B=Y, etc).
			</p>
		</CipherLayout>
	)
}
