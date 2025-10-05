"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CipherLayout from "./CipherLayout"

const chars: Record<string, string> = {
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
    
    const encodeMorse = (s: string) => {
        return s
            .toUpperCase()
            .split("")
            .map(char => chars[char] || "")
            .join(" ")
    }

    const decodeMorse = (s: string) => {
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
    }

    return (
        <CipherLayout encode={encodeMorse} decode={decodeMorse}>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>How to use?</AccordionTrigger>
                    <AccordionContent>
                        Space character to split letters and / to split words
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CipherLayout>
    );
}