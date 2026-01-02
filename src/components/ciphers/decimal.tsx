"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { decimalEncode, decimalDecode } from "@/lib/ciphers/decimal"

export default function DecimalCipher() {
    return (
        <CipherLayout
            encode={(t) => decimalEncode(t)}
            decode={(t) => decimalDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Converts text to its decimal (ASCII) representation.
            </div>
        </CipherLayout>
    )
}
