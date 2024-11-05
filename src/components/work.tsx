import type React from "react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

export interface WorkProps {
  href: string
  title: string
  status?: "freelancing" | "contract work"
}

export function Work({ href, title, status }: WorkProps) {
  return (
    <div className="p-4 w-full justify-between items-center flex border-b border-input">
      <div className="flex items-center space-x-2">
        <span className="text-sm leading-4">{title}</span>

        <div className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
          {status}
        </div>
      </div>
      <Link
        href={href}
        className={buttonVariants({
          variant: "outline",
          size: "xs",
          className: " text-xs text-muted-foreground",
        })}
      >
        View Details
      </Link>
    </div>
  )
}
