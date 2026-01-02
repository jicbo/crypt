"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { polybiusEncode, polybiusDecode } from "@/lib/ciphers/polybius"

export default function PolybiusCipher() {
    return (
        <CipherLayout
            encode={(t) => polybiusEncode(t)}
            decode={(t) => polybiusDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Uses a 5x5 grid (A-Z, omitting J) to represent letters as coordinates.
            </div>
        </CipherLayout>
    )
}
