"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { caesarRandom } from "@/lib/ciphers/utils"

export default function SeededCaesar() {
    const [seed, setSeed] = useState("SEED")

    return (
        <CipherLayout
            encode={(t) => caesarRandom(t, seed)}
            decode={(t) => caesarRandom(t, seed)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label>Seed / Password</Label>
                <Input value={seed} onChange={(e) => setSeed(e.target.value)} />
                <div className="text-xs text-muted-foreground italic">
                    Deterministic shift based on the seed value.
                </div>
            </div>
        </CipherLayout>
    )
}
