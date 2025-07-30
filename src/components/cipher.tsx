import { Textarea } from "@/components/ui/textarea"
import { Card } from "./ui/card"
import { Combobox } from "./ui/combobox"
import { Button } from "./ui/button"
import { ArrowLeftRight } from "lucide-react"

const ciphers_list = [
    { value: "ceasar", label: "Ceasar cipher" },
    { value: "morse", label: "Morse code" },
]

export default function CipherSolver() {
    return (
        <Card className="p-8 flex flex-col justify-center items-center">
            <div className="flex flex-row space-x-3 items-center">
                <Textarea className="resize-none"></Textarea>
                <Button variant={"ghost"}>
                    <ArrowLeftRight />
                </Button>
                <Textarea className="resize-none"></Textarea>
            </div>
            <Combobox placeholder_text="Ciphers" contents={ciphers_list}></Combobox>
            <Button>Convert</Button>
        </Card>
    );
}