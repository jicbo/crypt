"use client"

import CipherDashboard from "@/components/main"
import React from "react"

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-6 py-12 space-y-12">
            <div className="space-y-4 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">
                    Cipher Gallery
                </h1>
                <p className="text-lg text-muted-foreground">
                    Standalone tools for every supported algorithm. Pick any tool to start encoding or decoding.
                </p>
            </div>

            <div className="flex justify-center">
                <CipherDashboard />
            </div>
        </div>
    );
}
