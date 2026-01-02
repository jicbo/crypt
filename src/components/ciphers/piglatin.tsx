"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { pigLatinEncode, pigLatinDecode } from "@/lib/ciphers/phonetic"

export default function PigLatinCipher() {
    return (
        <CipherLayout
            encode={(t) => pigLatinEncode(t)}
            decode={(t) => pigLatinDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Simple word game encoding.
            </div>
        </CipherLayout>
    )
}
