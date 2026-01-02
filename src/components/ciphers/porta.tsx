"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { portaConvert } from "@/lib/ciphers/porta"

export default function PortaCipher() {
    const [key, setKey] = useState("KEY")

    return (
        <CipherLayout
            encode={(t) => portaConvert(t, key)}
            decode={(t) => portaConvert(t, key)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="porta-key">Secret Key</Label>
                <Input
                    id="porta-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter keyword..."
                />
            </div>
        </CipherLayout>
    )
}
