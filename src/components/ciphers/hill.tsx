"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { hill2x2Encode, hill2x2Decode } from "@/lib/ciphers/hill"

export default function HillCipher() {
    const [a, setA] = useState(3)
    const [b, setB] = useState(3)
    const [c, setC] = useState(2)
    const [d, setD] = useState(5)

    return (
        <CipherLayout
            encode={(t) => hill2x2Encode(t, a, b, c, d)}
            decode={(t) => hill2x2Decode(t, a, b, c, d)}
        >
            <div className="flex flex-col space-y-4 w-full max-w-sm">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <Label>A</Label>
                        <Number value={a} onChange={(v) => setA(v ?? 0)} />
                    </div>
                    <div className="space-y-1">
                        <Label>B</Label>
                        <Number value={b} onChange={(v) => setB(v ?? 0)} />
                    </div>
                    <div className="space-y-1">
                        <Label>C</Label>
                        <Number value={c} onChange={(v) => setC(v ?? 0)} />
                    </div>
                    <div className="space-y-1">
                        <Label>D</Label>
                        <Number value={d} onChange={(v) => setD(v ?? 0)} />
                    </div>
                </div>
                <div className="text-xs text-muted-foreground italic">
                    Note: The determinant (ad - bc) must be coprime to 26 for decoding.
                </div>
            </div>
        </CipherLayout>
    )
}
