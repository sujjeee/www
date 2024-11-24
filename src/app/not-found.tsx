import type { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
  title: "Page not found"
}

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed left-1/2 top-1/2 flex w-full max-w-[432px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <div className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
          Feeling lost? Just go back to <Link href="/">home</Link>.
        </div>
      </div>
    </div>
  )
}
