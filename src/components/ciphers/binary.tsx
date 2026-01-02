"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { binaryEncode, binaryDecode } from "@/lib/ciphers/binary"

export default function BinaryCipher() {
    return (
        <CipherLayout
            encode={(t) => binaryEncode(t)}
            decode={(t) => binaryDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Converts text to its 8-bit binary representation.
            </div>
        </CipherLayout>
    )
}
