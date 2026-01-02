"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { natoEncode, natoDecode } from "@/lib/ciphers/phonetic"

export default function NATOCipher() {
    return (
        <CipherLayout
            encode={(t) => natoEncode(t)}
            decode={(t) => natoDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Standard communication phonetic alphabet.
            </div>
        </CipherLayout>
    )
}
