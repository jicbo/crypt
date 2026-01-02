"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { gronsfeldConvert } from "@/lib/ciphers/gronsfeld"

export default function GronsfeldCipher() {
    const [key, setKey] = useState("1234")

    return (
        <CipherLayout
            encode={(t) => gronsfeldConvert(t, key, true)}
            decode={(t) => gronsfeldConvert(t, key, false)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="gronsfeld-key">Numeric Key</Label>
                <Input
                    id="gronsfeld-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter digits..."
                />
            </div>
        </CipherLayout>
    )
}
