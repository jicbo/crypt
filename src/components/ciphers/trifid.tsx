"use client"
import React, { useState } from "react"
import { Number } from "@/components/ui/number"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { trifidEncode, trifidDecode } from "@/lib/ciphers/trifid"

export default function TrifidCipher() {
    const [period, setPeriod] = useState<number>(5)

    return (
        <CipherLayout
            encode={(t) => trifidEncode(t, period)}
            decode={(t) => trifidDecode(t, period)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="trifid-period">Period</Label>
                <Number
                    id="trifid-period"
                    className="w-20"
                    onChange={(val) => setPeriod(val ?? 5)}
                    min={1}
                    max={20}
                    value={period}
                />
                <div className="text-xs text-muted-foreground">Supported chars: A-Z and #</div>
            </div>
        </CipherLayout>
    )
}
