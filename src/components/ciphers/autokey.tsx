"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { autokeyConvert } from "@/lib/ciphers/autokey"

export default function AutokeyCipher() {
    const [key, setKey] = useState("KEY")

    return (
        <CipherLayout
            encode={(t) => autokeyConvert(t, key, true)}
            decode={(t) => autokeyConvert(t, key, false)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="autokey-key">Initial Key</Label>
                <Input
                    id="autokey-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter keyword..."
                />
            </div>
        </CipherLayout>
    )
}
