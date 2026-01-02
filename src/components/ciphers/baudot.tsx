"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { baudotEncode, baudotDecode } from "@/lib/ciphers/baudot"

export default function BaudotCipher() {
    return (
        <CipherLayout
            encode={(t) => baudotEncode(t)}
            decode={(t) => baudotDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                5-bit character code used in early telegraphy.
            </div>
        </CipherLayout>
    )
}
