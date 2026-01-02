"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { substitutionConvert, generateKeyedAlphabet } from "@/lib/ciphers/substitution"

export default function SubstitutionCipher() {
    const [key, setKey] = useState("KEYWORD")
    const keyedAlphabet = generateKeyedAlphabet(key)

    return (
        <CipherLayout
            encode={(t) => substitutionConvert(t, keyedAlphabet, true)}
            decode={(t) => substitutionConvert(t, keyedAlphabet, false)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="sub-key">Keyword for Alphabet</Label>
                <Input
                    id="sub-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter keyword..."
                />
                <div className="text-xs font-mono bg-muted p-2 rounded break-all">
                    Alphabet: {keyedAlphabet.toUpperCase()}
                </div>
            </div>
        </CipherLayout>
    )
}
