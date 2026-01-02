"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import CipherLayout from "./CipherLayout"
import { railFenceEncode, railFenceDecode } from "@/lib/ciphers/railfence"
import { Label } from "@/components/ui/label"

export default function RailFenceCipher() {
    const [rails, setRails] = useState<number>(3)

    return (
        <CipherLayout
            encode={(text) => railFenceEncode(text, rails)}
            decode={(text) => railFenceDecode(text, rails)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="railfence-rails">Number of Rails</Label>
                <Number
                    id="railfence-rails"
                    className="w-20"
                    onChange={(newValue) => setRails(newValue !== undefined ? newValue : 2)}
                    placeholder="Rails"
                    min={2}
                    max={10}
                    step={1}
                    value={rails}
                />
            </div>
        </CipherLayout>
    )
}
