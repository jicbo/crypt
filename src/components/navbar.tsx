"use client"

import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	const navLinks = [
		{ href: "/", label: "Direct Converter" },
		{ href: "/chain", label: "Chain Converter" },
		{ href: "/gallery", label: "Gallery" },
	]

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/"
		return pathname.startsWith(href)
	}

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-6">
				<div className="flex items-center gap-8">
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-xl font-bold tracking-tight">Crypt</span>
					</Link>
					<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={`transition-colors hover:text-primary ${isActive(link.href) ? "text-foreground" : "text-muted-foreground"
									}`}
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex items-center gap-2">
					<div className="hidden md:block">
						<ModeToggle />
					</div>
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px]">
							<SheetHeader className="text-left">
								<SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
							</SheetHeader>
							<nav className="flex flex-col gap-1 mt-8">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={() => setOpen(false)}
										className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive(link.href)
											? "bg-primary/10 text-primary"
											: "text-muted-foreground hover:bg-muted hover:text-foreground"
											}`}
									>
										{link.label}
									</Link>
								))}
							</nav>
							<div className="absolute bottom-6 left-6 right-6">
								<div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
									<span className="text-sm font-medium text-muted-foreground">Theme</span>
									<ModeToggle />
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
