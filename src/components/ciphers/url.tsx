"use client"
import React from "react"
import CipherLayout from "./CipherLayout"
import { urlEncode, urlDecode } from "@/lib/ciphers/url"

export default function URLCipher() {
    return (
        <CipherLayout
            encode={(t) => urlEncode(t)}
            decode={(t) => urlDecode(t)}
        >
            <div className="text-sm text-muted-foreground">
                Encodes text for use in URLs.
            </div>
        </CipherLayout>
    )
}
