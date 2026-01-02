"use client"
import React, { useState } from "react"
import CipherLayout from "./CipherLayout"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { beaufortConvert } from "@/lib/ciphers/beaufort"

export default function BeaufortCipher() {
    const [key, setKey] = useState("KEY")

    return (
        <CipherLayout
            encode={(t) => beaufortConvert(t, key)}
            decode={(t) => beaufortConvert(t, key)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="beaufort-key">Secret Key</Label>
                <Input
                    id="beaufort-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter key..."
                />
            </div>
        </CipherLayout>
    )
}
