import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { getAllCiphers } from "@/config/cipher-registry"
import Link from "next/link"
import React from "react"

export default function CipherDashboard() {
    const ciphers = getAllCiphers().filter(c => c.slug !== "plaintext")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl p-6">
            {ciphers.map((cipher) => (
                <Link href={`/tool/${cipher.slug}`} key={cipher.slug} className="block h-full">
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                        <CardHeader>
                            <CardTitle className="text-xl">{cipher.title}</CardTitle>
                            <CardDescription>{cipher.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    );
}