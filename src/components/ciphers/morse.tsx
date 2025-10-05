"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CipherLayout from "./CipherLayout"
import { MORSE_CODE_CHARS } from "@/lib/constants"

export default function MorseCode() {
    
    const encodeMorse = (s: string) => {
        return s
            .toUpperCase()
            .split("")
            .map(char => MORSE_CODE_CHARS[char] || "")
            .join(" ")
    }

    const decodeMorse = (s: string) => {
        const x = s.split("/")
        const morseToChar = Object.entries(MORSE_CODE_CHARS).reduce((acc, [char, morse]) => {
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