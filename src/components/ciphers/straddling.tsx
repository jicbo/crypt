"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Number } from "@/components/ui/number"
import CipherLayout from "./CipherLayout"
import { straddlingCheckerboardEncode, straddlingCheckerboardDecode } from "@/lib/ciphers/straddling"

export default function StraddlingCipher() {
    const [keys, setKeys] = useState("ETONIRASBCDFGHKLMPQUVWXYZ./")
    const [row1, setRow1] = useState(2)
    const [row2, setRow2] = useState(6)

    return (
        <CipherLayout
            encode={(t) => straddlingCheckerboardEncode(t, keys, row1, row2)}
            decode={(t) => straddlingCheckerboardDecode(t, keys, row1, row2)}
        >
            <div className="flex flex-col space-y-4 w-full max-w-sm">
                <div className="space-y-1">
                    <Label>Keyboard Layout (28 chars)</Label>
                    <Input value={keys} onChange={(e) => setKeys(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <Label>Row Identifier 1</Label>
                        <Number value={row1} onChange={(v) => setRow1(v ?? 2)} min={0} max={9} />
                    </div>
                    <div className="space-y-1">
                        <Label>Row Identifier 2</Label>
                        <Number value={row2} onChange={(v) => setRow2(v ?? 6)} min={0} max={9} />
                    </div>
                </div>
            </div>
        </CipherLayout>
    )
}
