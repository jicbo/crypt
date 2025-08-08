"use client"
import { Button } from "@/components/ui/button"
import { Number } from "@/components/ui/number"
import TextSwap from "@/components/ui/text-swap"
import * as React from "react"


export function CeasarCipher() {
    const [inputText, setInputText] = React.useState<string>("")
    const [outputText, setOutputText] = React.useState<string>("")
    const [shiftValue, setShiftValue] = React.useState<number>(3)

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    function CeasarConvert(text: string, shift: number) {
        const l: string[] = text.split("")
        for (let i = 0; i < l.length; i++) {
            if (alphabet.indexOf(l[i].toLowerCase()) > -1) {
                const upper = l[i] === l[i].toUpperCase()
                const x = alphabet[Math.abs(alphabet.indexOf(l[i].toLowerCase()) + shift) % alphabet.length]
                l[i] = upper ? x.toUpperCase() : x
            }
        }

        return l.join("")
    }


    return (
        <div className="flex flex-col space-y-3 items-center">
            <TextSwap
                inputText={inputText}
                outputText={outputText}
                setInputText={setInputText}
                setOutputText={setOutputText}
            />
            <Number
                className="w-20"
                onChange={(value) => setShiftValue(parseInt(value.target.value))}
                placeholder="Shift"
                min={-50}
                max={50}
                step={1}
            />
            <Button onClick={() => setOutputText(CeasarConvert(inputText, shiftValue))}>Convert</Button>
        </div>
    )
}