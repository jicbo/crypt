import { getCipherBySlug, getAllCiphers } from "@/config/cipher-registry"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
    const ciphers = getAllCiphers()
    return ciphers.map((cipher) => ({
        slug: cipher.slug,
    }))
}

export default async function ToolPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const cipher = getCipherBySlug(slug)

    if (!cipher) {
        notFound()
    }

    const Component = cipher.component

    return (
        <div className="container mx-auto p-6 max-w-6xl">
            <div className="flex justify-between items-center mb-10">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold tracking-tight">{cipher.title}</h1>
                    <p className="text-muted-foreground text-lg">{cipher.description}</p>
                </div>
                <Link href="/gallery">
                    <Button variant="outline">Back to Gallery</Button>
                </Link>
            </div>

            <div className="space-y-6">
                <div className="border rounded-xl p-6 bg-card">
                    <Component />
                </div>
            </div>
        </div>
    )
}
