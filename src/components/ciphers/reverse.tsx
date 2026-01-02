"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { reverseText } from "@/lib/ciphers/reverse"

export default function ReverseCipher() {
    return (
        <CipherLayout
            encode={(t) => reverseText(t)}
            decode={(t) => reverseText(t)}
        >
            <div className="text-sm text-muted-foreground">
                Simply reverses the input text.
            </div>
        </CipherLayout>
    )
}
