"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { playfairEncode, playfairDecode } from "@/lib/ciphers/playfair"

export default function PlayfairCipher() {
    const [key, setKey] = useState("KEYWORD")

    return (
        <CipherLayout
            encode={(t) => playfairEncode(t, key)}
            decode={(t) => playfairDecode(t, key)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="playfair-key">Secret Key</Label>
                <Input
                    id="playfair-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter keyword..."
                />
            </div>
        </CipherLayout>
    )
}
