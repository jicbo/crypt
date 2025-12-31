"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import CipherLayout from "./CipherLayout"
import { caesarConvert } from "@/lib/ciphers/caesar"

export function CaesarCipher() {
	const [shiftValue, setShiftValue] = useState<number>(3)

	const encodeCaesar = (text: string) => caesarConvert(text, shiftValue);
	const decodeCaesar = (text: string) => caesarConvert(text, -shiftValue);

	return (
		<CipherLayout encode={encodeCaesar} decode={decodeCaesar}>
			<Number
				className="w-20"
				onChange={(newValue) => setShiftValue(newValue !== undefined ? newValue : 0)}
				placeholder="Shift"
				min={0}
				max={200}
				step={1}
				value={shiftValue}
			/>
		</CipherLayout>
	)
}