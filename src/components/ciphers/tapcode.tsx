"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { tapCodeEncode, tapCodeDecode } from "@/lib/ciphers/tapcode"

export default function TapCodeCipher() {
    return (
        <CipherLayout
            encode={(t) => tapCodeEncode(t)}
            decode={(t) => tapCodeDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Represents letters by pairs of taps (rows and columns in a 5x5 grid).
            </div>
        </CipherLayout>
    )
}
