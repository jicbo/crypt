"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { nihilistEncode, nihilistDecode } from "@/lib/ciphers/nihilist"

export default function NihilistCipher() {
    const [keyword, setKeyword] = useState("KEYWORD")
    const [key, setKey] = useState("NUMBER")

    return (
        <CipherLayout
            encode={(t) => nihilistEncode(t, keyword, key)}
            decode={(t) => nihilistDecode(t, keyword, key)}
        >
            <div className="flex space-x-4 w-full max-w-md">
                <div className="flex flex-col space-y-2 flex-1">
                    <Label htmlFor="nihilist-kw">Matrix Keyword</Label>
                    <Input id="nihilist-kw" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-2 flex-1">
                    <Label htmlFor="nihilist-key">Keyphrase</Label>
                    <Input id="nihilist-key" value={key} onChange={(e) => setKey(e.target.value)} />
                </div>
            </div>
        </CipherLayout>
    )
}
