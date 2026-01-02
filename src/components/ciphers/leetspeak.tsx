"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { leetEncode, leetDecode } from "@/lib/ciphers/leetspeak"

export default function LeetCipher() {
    return (
        <CipherLayout
            encode={(t) => leetEncode(t)}
            decode={(t) => leetDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Replaces letters with similar-looking numbers (e.g., A=4, E=3).
            </div>
        </CipherLayout>
    )
}
