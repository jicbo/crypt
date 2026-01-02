"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { rot47Convert } from "@/lib/ciphers/rot47"

export default function ROT47Cipher() {
    return (
        <CipherLayout
            encode={(t) => rot47Convert(t)}
            decode={(t) => rot47Convert(t)}
        >
            <div className="text-sm text-muted-foreground">
                A variant of ROT13 that shifts all visible ASCII characters by 47.
            </div>
        </CipherLayout>
    )
}
