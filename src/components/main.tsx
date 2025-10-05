"use client"
import { Card } from "@/components/ui/card"
import { Combobox } from "@/components/ui/combobox"
import React, {useState} from "react"

import { CeasarCipher } from "@/components/ciphers/ceasar"
import MorseCode from "@/components/ciphers/morse"

const ciphers_list = [
    { value: "ceasar", label: "Ceasar cipher" },
    { value: "morse", label: "Morse code" },
]

export default function CipherSolver() {
    const [selectedCipher, setSelectedCipher] = useState<string>("")

    return (
        <Card className="p-8 flex flex-col justify-center items-center">
            <Combobox
                placeholder_text="ciphers"
                contents={ciphers_list}
                onChange={setSelectedCipher}
            />
            {(() => {
                switch (selectedCipher) {
                    case "ceasar":
                        return <CeasarCipher></CeasarCipher>;
                    case "morse":
                        return <MorseCode></MorseCode>;
                    default:
                        return null;
                }
            })()}
        </Card>
    );
}