"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { base32Encode, base32Decode } from "@/lib/ciphers/base32"

export default function Base32Cipher() {
    return (
        <CipherLayout
            encode={(t) => base32Encode(t)}
            decode={(t) => base32Decode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Converts text to its Base32 representation.
            </div>
        </CipherLayout>
    )
}
