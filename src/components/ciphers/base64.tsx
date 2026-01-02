"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { base64Encode, base64Decode } from "@/lib/ciphers/base64"

export default function Base64Cipher() {
    return (
        <CipherLayout
            encode={(t) => base64Encode(t)}
            decode={(t) => base64Decode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Standard Base64 encoding/decoding.
            </div>
        </CipherLayout>
    )
}
