"use client"
import React, { useState, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import TextSwap from "@/components/ui/text-swap"

interface CipherLayoutProps {
    encode: (text: string) => string;
    decode: (text: string) => string;
    children?: ReactNode;
}

export default function CipherLayout({ encode, decode, children }: CipherLayoutProps) {
    const [inputText, setInputText] = useState("")
    const [outputText, setOutputText] = useState("")

    return (
        <div className="flex flex-col space-y-3 items-center">
            <TextSwap
                inputText={inputText}
                outputText={outputText}
                setInputText={setInputText}
                setOutputText={setOutputText}
            />
            <div className="flex space-x-2">
                <Button onClick={() => setOutputText(encode(inputText))}>Encode</Button>
                <Button onClick={() => setOutputText(decode(inputText))}>Decode</Button>
            </div>
            {children}
        </div>
    )
}