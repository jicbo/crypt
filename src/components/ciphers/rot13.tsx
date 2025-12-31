"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { ALPHABET } from "@/lib/constants"

export default function Rot13Cipher() {
	const rot13Convert = (text: string) => {
		return text.split("").map(char => {
			const index = ALPHABET.indexOf(char.toLowerCase())
			if (index === -1) return char

			const shiftedIndex = (index + 13) % 26
			const newChar = ALPHABET[shiftedIndex]
			return char === char.toUpperCase() ? newChar.toUpperCase() : newChar
		}).join("")
	}

	return (
		<CipherLayout encode={rot13Convert} decode={rot13Convert}>
			<p className="text-sm text-muted-foreground text-center">
				ROT13 ("rotate by 13 places") is a simple substitution cipher that replaces a letter with the 13th letter after it in the alphabet.
			</p>
		</CipherLayout>
	)
}
