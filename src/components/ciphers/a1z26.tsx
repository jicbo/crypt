"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { ALPHABET } from "@/lib/constants"

export default function A1Z26Cipher() {
	const encode = (text: string) => {
		return text.split("").map(char => {
			const index = ALPHABET.indexOf(char.toLowerCase())
			if (index === -1) return char
			return index + 1
		}).join("-")
	}

	const decode = (text: string) => {
		return text.split("-").map(part => {
			const num = parseInt(part)
			if (!isNaN(num) && num >= 1 && num <= 26) {
				return ALPHABET[num - 1]
			}
			return part
		}).join("")
	}

	return (
		<CipherLayout encode={encode} decode={decode}>
			<p className="text-sm text-muted-foreground text-center">
				A1Z26 converts letters to their numerical position in the alphabet (A=1, B=2, etc).
			</p>
		</CipherLayout>
	)
}
