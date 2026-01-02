"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { keywordEncode, keywordDecode } from "@/lib/ciphers/keyword"

export default function KeywordCipher() {
    const [keyword, setKeyword] = useState("KEYWORD")

    return (
        <CipherLayout
            encode={(t) => keywordEncode(t, keyword)}
            decode={(t) => keywordDecode(t, keyword)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="keyword-key">Keyword</Label>
                <Input
                    id="keyword-key"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Enter keyword..."
                />
            </div>
        </CipherLayout>
    )
}
