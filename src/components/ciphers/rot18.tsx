"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { rot18Convert } from "@/lib/ciphers/rot_variants"

export default function ROT18Cipher() {
    return (
        <CipherLayout
            encode={(t) => rot18Convert(t)}
            decode={(t) => rot18Convert(t)}
        >
            <div className="text-sm text-muted-foreground">
                ROT13 for letters and ROT5 for numbers.
            </div>
        </CipherLayout>
    )
}
