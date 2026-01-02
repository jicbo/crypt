"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { rot5Convert } from "@/lib/ciphers/rot_variants"

export default function ROT5Cipher() {
    return (
        <CipherLayout
            encode={(t) => rot5Convert(t)}
            decode={(t) => rot5Convert(t)}
        >
            <div className="text-sm text-muted-foreground">
                Shifts numbers (0-9) by 5.
            </div>
        </CipherLayout>
    )
}
