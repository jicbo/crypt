"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { xorConvert } from "@/lib/ciphers/xor"

export default function XORCipher() {
    const [key, setKey] = useState("KEY")

    return (
        <CipherLayout
            encode={(t) => xorConvert(t, key)}
            decode={(t) => xorConvert(t, key)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="xor-key">Secret Key</Label>
                <Input
                    id="xor-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter key..."
                />
            </div>
        </CipherLayout>
    )
}
