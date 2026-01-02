"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { baconianEncode, baconianDecode } from "@/lib/ciphers/baconian"

export default function BaconianCipher() {
    return (
        <CipherLayout
            encode={(t) => baconianEncode(t)}
            decode={(t) => baconianDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Encodes each letter into a 5-character sequence of 'a's and 'b's.
            </div>
        </CipherLayout>
    )
}
