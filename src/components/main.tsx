import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { getAllCiphers } from "@/config/cipher-registry"
import Link from "next/link"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function CipherDashboard() {
    const [search, setSearch] = useState("")
    const allCiphers = getAllCiphers().filter(c => c.slug !== "plaintext")

    const filteredCiphers = allCiphers.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="w-full max-w-5xl space-y-8">
            <div className="relative max-w-md mx-auto px-6 md:px-0">
                <Search className="absolute left-9 md:left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search ciphers..."
                    className="pl-10 h-10 bg-muted/50"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredCiphers.map((cipher) => (
                    <Link href={`/tool/${cipher.slug}`} key={cipher.slug} className="block h-full">
                        <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-muted/60 hover:border-primary/50 group">
                            <CardHeader>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{cipher.title}</CardTitle>
                                <CardDescription>{cipher.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}

                {filteredCiphers.length === 0 && (
                    <div className="col-span-full py-12 text-center text-muted-foreground italic">
                        No ciphers found matching &quot;{search}&quot;
                    </div>
                )}
            </div>
        </div>
    );
}