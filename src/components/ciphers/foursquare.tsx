"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { fourSquareEncode, fourSquareDecode } from "@/lib/ciphers/foursquare"

export default function FourSquareCipher() {
    const [key1, setKey1] = useState("FIRST")
    const [key2, setKey2] = useState("SECOND")

    return (
        <CipherLayout
            encode={(t) => fourSquareEncode(t, key1, key2)}
            decode={(t) => fourSquareDecode(t, key1, key2)}
        >
            <div className="flex space-x-4 w-full max-w-md">
                <div className="flex flex-col space-y-2 flex-1">
                    <Label htmlFor="fs-key1">Key 1</Label>
                    <Input id="fs-key1" value={key1} onChange={(e) => setKey1(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-2 flex-1">
                    <Label htmlFor="fs-key2">Key 2</Label>
                    <Input id="fs-key2" value={key2} onChange={(e) => setKey2(e.target.value)} />
                </div>
            </div>
        </CipherLayout>
    )
}
