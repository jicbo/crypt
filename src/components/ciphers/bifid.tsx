"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { bifidEncode, bifidDecode } from "@/lib/ciphers/bifid"

export default function BifidCipher() {
    const [period, setPeriod] = useState<number>(5)

    return (
        <CipherLayout
            encode={(t) => bifidEncode(t, period)}
            decode={(t) => bifidDecode(t, period)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="bifid-period">Period</Label>
                <Number
                    id="bifid-period"
                    className="w-20"
                    onChange={(val) => setPeriod(val ?? 5)}
                    min={1}
                    max={20}
                    value={period}
                />
            </div>
        </CipherLayout>
    )
}
