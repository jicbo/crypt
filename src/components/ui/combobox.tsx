"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"


export interface ComboboxContent {
	value: string;
	label: string;
}


interface ComboboxProps {
	placeholder_text: string;
	contents: ComboboxContent[];
}

export function Combobox({ placeholder_text,contents }: ComboboxProps) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("")

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? contents.find((content) => content.value === value)?.label
						: `Select ${placeholder_text}`}
					<ChevronsUpDown className="opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={`Search ${placeholder_text}`} className="h-9" />
					<CommandList>
						<CommandEmpty>No {placeholder_text} found.</CommandEmpty>
						<CommandGroup>
							{contents.map((content) => (
								<CommandItem
									key={content.value}
									value={content.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue)
										setOpen(false)
									}}
								>
									{content.label}
									<Check
										className={cn(
											"ml-auto",
											value === content.value ? "opacity-100" : "opacity-0"
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
