"use client"
import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight } from "lucide-react"

interface TextSwapProps {
    inputText: string;
    outputText: string;
    setInputText: (value: string) => void;
    setOutputText: (value: string) => void;
}

export default function TextSwap({ inputText, outputText, setInputText, setOutputText }: TextSwapProps) {
    return (
        <div className="flex flex-row space-x-3 items-center">
            <Textarea
                className="resize-none"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
            <Button variant={"ghost"} onClick={() => {
                const x = inputText
                setInputText(outputText)
                setOutputText(x)
            }}>
                <ArrowLeftRight />
            </Button>
            <Textarea
                className="resize-none"
                value={outputText}
                readOnly
            />
        </div>
    );
}