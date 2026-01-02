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
	placeholder_text?: string;
	contents?: ComboboxContent[];
	value?: string;
	onChange?: (value: string) => void;
}

export function Combobox({ placeholder_text = "items", contents = [], value: externalValue, onChange }: ComboboxProps) {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState(externalValue || "")

	React.useEffect(() => {
		if (externalValue !== undefined) {
			setValue(externalValue)
		}
	}, [externalValue])

	const handleSelect = (currentValue: string) => {
		const newValue = currentValue
		setValue(newValue)
		setOpen(false)
		if (onChange) onChange(newValue)
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between h-9 px-3"
				>
					<span className="truncate mr-2">
						{value
							? contents.find((content) => content.value === value)?.label
							: `Select ${placeholder_text}`}
					</span>
					<ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[var(--radix-popover-trigger-width)] min-w-[240px] p-0" align="start">
				<Command>
					<CommandInput placeholder={`Search ${placeholder_text}`} className="h-9" />
					<CommandList>
						<CommandEmpty>No {placeholder_text} found.</CommandEmpty>
						<CommandGroup>
							{contents.map((content) => (
								<CommandItem
									key={content.value}
									value={content.value}
									onSelect={handleSelect}
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
