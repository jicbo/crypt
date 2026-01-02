import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { getSortedCiphers } from "@/config/cipher-registry"
import Link from "next/link"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, ArrowUpDown } from "lucide-react"
import { Combobox } from "@/components/ui/combobox"

export default function CipherDashboard() {
	const [search, setSearch] = useState("")
	const [sortBy, setSortBy] = useState<'title-asc' | 'title-desc' | 'added-oldest' | 'added-newest'>('title-asc')

	const isFirstLoad = React.useRef(true)

	React.useEffect(() => {
		if (isFirstLoad.current) return
		localStorage.setItem("GALLERY_SORT_PREFERENCE", sortBy)
	}, [sortBy])

	React.useEffect(() => {
		const saved = localStorage.getItem("GALLERY_SORT_PREFERENCE")
		if (saved) setSortBy(saved as any)
		setTimeout(() => {
			isFirstLoad.current = false
		}, 0)
	}, [])

	const sortOptions = [
		{ value: 'title-asc', label: 'Title (A-Z)' },
		{ value: 'title-desc', label: 'Title (Z-A)' },
		{ value: 'added-oldest', label: 'Oldest Added' },
		{ value: 'added-newest', label: 'Newest Added' },
	]

	const allCiphers = getSortedCiphers(sortBy).filter(c => c.slug !== "plaintext")

	const filteredCiphers = allCiphers.filter(c =>
		c.title.toLowerCase().includes(search.toLowerCase()) ||
		c.description.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className="w-full max-w-5xl space-y-8">
			<div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-2xl mx-auto px-6 md:px-0">
				<div className="relative flex-1 w-full">
					<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search algorithms..."
						className="pl-10 h-10 bg-muted/50"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className="w-full max-w-[200px] md:w-[200px] flex items-center gap-2">
					<ArrowUpDown className="h-4 w-4 text-muted-foreground shrink-0" />
					<Combobox
						placeholder_text="Sort by"
						contents={sortOptions}
						value={sortBy}
						onChange={(val) => setSortBy(val as any)}
					/>
				</div>
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