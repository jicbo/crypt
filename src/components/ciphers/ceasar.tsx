"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import CipherLayout from "./CipherLayout"
import { ALPHABET } from "@/lib/constants"


export function CeasarCipher() {

    const [shiftValue, setShiftValue] = useState<number>(3)

    const ceasarConvert = (text: string, shift: number) => {
        const l: string[] = text.split("")
        for (let i = 0; i < l.length; i++) {
            if (ALPHABET.indexOf(l[i].toLowerCase()) > -1) {
                const upper = l[i] === l[i].toUpperCase()
                const x = ALPHABET[Math.abs(ALPHABET.indexOf(l[i].toLowerCase()) + shift) % ALPHABET.length]
                l[i] = upper ? x.toUpperCase() : x
            }
        }
        return l.join("")
    }

    const encodeCeasar = (text: string) => ceasarConvert(text, shiftValue);
    const decodeCeasar = (text: string) => ceasarConvert(text, -shiftValue);

    return (
        <CipherLayout encode={encodeCeasar} decode={decodeCeasar}>
            <Number
                className="w-20"
                onChange={(value) => setShiftValue(parseInt(value.target.value))}
                placeholder="Shift"
                min={-50}
                max={50}
                step={1}
                value={shiftValue}
            />
        </CipherLayout>
    )
}