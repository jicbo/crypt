"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CipherLayout from "./CipherLayout"
import { runningKeyConvert } from "@/lib/ciphers/runningkey"

export default function RunningKeyCipher() {
    const [key, setKey] = useState("THEQUICKBROWNFOXJUMPSOVER")

    return (
        <CipherLayout
            encode={(t) => runningKeyConvert(t, key, true)}
            decode={(t) => runningKeyConvert(t, key, false)}
        >
            <div className="flex flex-col space-y-2 w-full max-w-xs">
                <Label htmlFor="rk-key">Running Key (Text)</Label>
                <Input
                    id="rk-key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="Enter long text..."
                />
            </div>
        </CipherLayout>
    )
}
