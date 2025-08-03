"use client"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "./ui/card"
import { Combobox } from "./ui/combobox"
import { Button } from "./ui/button"
import { ArrowLeftRight } from "lucide-react"
import * as React from "react"

const ciphers_list = [
    { value: "ceasar", label: "Ceasar cipher" },
    { value: "morse", label: "Morse code" },
]

export default function CipherSolver() {
    const [selectedCipher, setSelectedCipher] = React.useState<string>("")

    return (
        <Card className="p-8 flex flex-col justify-center items-center">
            <div className="flex flex-row space-x-3 items-center">
                <Textarea className="resize-none"></Textarea>
                <Button variant={"ghost"}>
                    <ArrowLeftRight />
                </Button>
                <Textarea className="resize-none"></Textarea>
            </div>
            <Combobox
                placeholder_text="ciphers"
                contents={ciphers_list}
                onChange={setSelectedCipher} // Pass the handler
            />
            <Button>Convert</Button>
            {selectedCipher == "morse" ? <p>hello</p> : ""}
        </Card>
    );
}