"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { adfgvxEncode, adfgvxDecode } from "@/lib/ciphers/adfgvx"

export default function ADFGVXCipher() {
    const [matrixKey, setMatrixKey] = useState("PHRASE")
    const [transKey, setTransKey] = useState("KEY")

    return (
        <CipherLayout
            encode={(t) => adfgvxEncode(t, matrixKey, transKey)}
            decode={(t) => adfgvxDecode(t, matrixKey, transKey)}
        >
            <div className="flex space-x-4 w-full max-w-md">
                <div className="flex flex-col space-y-2 flex-1">
                    <Label htmlFor="adfgvx-mk">Matrix Key</Label>
                    <Input id="adfgvx-mk" value={matrixKey} onChange={(e) => setMatrixKey(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-2 flex-1">
                    <Label htmlFor="adfgvx-tk">Transposition Key</Label>
                    <Input id="adfgvx-tk" value={transKey} onChange={(e) => setTransKey(e.target.value)} />
                </div>
            </div>
        </CipherLayout>
    )
}
