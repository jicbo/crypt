"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { columnarEncode, columnarDecode } from "@/lib/ciphers/columnar"

export default function ColumnarCipher() {
    const [key, setKey] = useState("KEY")

    return (
        <CipherLayout
            encode={(t) => columnarEncode(t, key)}
            decode={(t) => columnarDecode(t, key)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="columnar-key">Keyword</Label>
                <Input
                    id="columnar-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter keyword..."
                />
            </div>
        </CipherLayout>
    )
}
