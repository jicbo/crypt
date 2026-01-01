import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight">Crypt</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-primary text-muted-foreground">Direct Converter</Link>
                        <Link href="/chain" className="transition-colors hover:text-primary text-muted-foreground">Chain Converter</Link>
                        <Link href="/gallery" className="transition-colors hover:text-primary text-muted-foreground">Gallery</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
