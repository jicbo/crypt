"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CipherLayout from "./CipherLayout"
import { encodeMorse, decodeMorse } from "@/lib/ciphers/morse"

export default function MorseCode() {

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