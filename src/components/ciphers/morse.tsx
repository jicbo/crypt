"use client"
import { Button } from "@/components/ui/button"
import TextSwap from "@/components/ui/text-swap"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import * as React from "react"

const chars = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    '"': ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",
    " ": "/"
}

export default function MorseCode() {
    const [inputText, setInputText] = React.useState<string>("")
    const [outputText, setOutputText] = React.useState<string>("")



    function MorseConvert(s: string, totext: boolean = true) {
        if (totext) {
            const x = s.split("/")
            const morseToChar = Object.entries(chars).reduce((acc, [char, morse]) => {
                acc[morse] = char
                return acc
            }, {} as Record<string, string>)

            return x
                .map(word =>
                    word
                        .trim()
                        .split(" ")
                        .map(code => morseToChar[code] || "")
                        .join("")
                )
                .join(" ")
        } else {
            return "Not implemented yet"
        }
    }

    return (
        <div className="flex flex-col space-y-3 items-center">
            <TextSwap
                inputText={inputText}
                outputText={outputText}
                setInputText={setInputText}
                setOutputText={setOutputText}
            />
            <Button onClick={() => setOutputText(MorseConvert(inputText))}>Convert</Button>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>How to use?</AccordionTrigger>
                    <AccordionContent>
                        Space character to split letters and / to split words
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}