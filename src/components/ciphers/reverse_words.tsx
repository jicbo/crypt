"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { reverseWords } from "@/lib/ciphers/utils"

export default function ReverseWords() {
    return (
        <CipherLayout
            encode={(t) => reverseWords(t)}
            decode={(t) => reverseWords(t)}
        >
            <div className="text-sm text-muted-foreground">
                Reverses the letters within each word.
            </div>
        </CipherLayout>
    )
}
