"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { hexEncode, hexDecode } from "@/lib/ciphers/hex"

export default function HexCipher() {
    return (
        <CipherLayout
            encode={(t) => hexEncode(t)}
            decode={(t) => hexDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Converts text to its hexadecimal representation.
            </div>
        </CipherLayout>
    )
}
