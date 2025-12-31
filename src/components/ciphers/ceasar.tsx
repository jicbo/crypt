"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import CipherLayout from "./CipherLayout"
import { caesarConvert } from "@/lib/ciphers/caesar"

export function CeasarCipher() {
	const [shiftValue, setShiftValue] = useState<number>(3)

	const encodeCeasar = (text: string) => caesarConvert(text, shiftValue);
	const decodeCeasar = (text: string) => caesarConvert(text, -shiftValue);

	return (
		<CipherLayout encode={encodeCeasar} decode={decodeCeasar}>
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