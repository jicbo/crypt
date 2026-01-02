"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { otpConvert } from "@/lib/ciphers/otp"

export default function OTPCipher() {
    const [key, setKey] = useState("LONGKEYFOROTP")

    return (
        <CipherLayout
            encode={(t) => otpConvert(t, key, true)}
            decode={(t) => otpConvert(t, key, false)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="otp-key">One-Time Pad Key</Label>
                <Input
                    id="otp-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter key (long)..."
                />
                <div className="text-xs text-muted-foreground italic">
                    Key must be at least as long as the message.
                </div>
            </div>
        </CipherLayout>
    )
}
