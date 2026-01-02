"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { rot1Convert } from "@/lib/ciphers/utils"

export default function ROT1Cipher() {
    return (
        <CipherLayout
            encode={(t) => rot1Convert(t)}
            decode={(t) => rot1Convert(t)}
        >
            <div className="text-sm text-muted-foreground">
                Shifts letters by 1 (A becomes B).
            </div>
        </CipherLayout>
    )
}
