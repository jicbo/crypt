"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import { Combobox } from "@/components/ui/combobox"
import CipherLayout from "./CipherLayout"
import { affineConvert } from "@/lib/ciphers/affine"
import { Label } from "@/components/ui/label"

const A_VALUES = [
    { value: "1", label: "1" },
    { value: "3", label: "3" },
    { value: "5", label: "5" },
    { value: "7", label: "7" },
    { value: "9", label: "9" },
    { value: "11", label: "11" },
    { value: "15", label: "15" },
    { value: "17", label: "17" },
    { value: "19", label: "19" },
    { value: "21", label: "21" },
    { value: "23", label: "23" },
    { value: "25", label: "25" },
];

export default function AffineCipher() {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(8)

    return (
        <CipherLayout
            encode={(text) => affineConvert(text, a, b, true)}
            decode={(text) => affineConvert(text, a, b, false)}
        >
            <div className="flex space-x-4 w-full max-w-md">
                <div className="flex flex-col space-y-2">
                    <Label>A (Multiplier)</Label>
                    <Combobox
                        contents={A_VALUES}
                        placeholder_text="A"
                        value={a.toString()}
                        onChange={(val) => setA(parseInt(val))}
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label>B (Shift)</Label>
                    <Number
                        className="w-24"
                        onChange={(newValue) => setB(newValue !== undefined ? newValue : 0)}
                        placeholder="B"
                        min={0}
                        max={25}
                        step={1}
                        value={b}
                    />
                </div>
            </div>
        </CipherLayout>
    )
}
