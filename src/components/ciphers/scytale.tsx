"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { scytaleConvert } from "@/lib/ciphers/scytale"

export default function ScytaleCipher() {
    const [diameter, setDiameter] = useState<number>(4)

    return (
        <CipherLayout
            encode={(t) => scytaleConvert(t, diameter, true)}
            decode={(t) => scytaleConvert(t, diameter, false)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="scytale-diameter">Rod Diameter</Label>
                <Number
                    id="scytale-diameter"
                    className="w-20"
                    onChange={(val) => setDiameter(val ?? 2)}
                    min={2}
                    max={20}
                    value={diameter}
                />
            </div>
        </CipherLayout>
    )
}
