import type React from "react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { workExperience } from "@/lib/constants"

export interface WorkProps {
  href: string
  title: string
  status?: "freelancing" | "contract work"
}

export function Work() {
  return (
    <section className="animate-slide-from-down-and-fade-3 space-y-4 text-sm">
      <h3 className="font-medium text-sm text-primary">Work Experience</h3>

      <div className="rounded-md border border-b w-full border-input ">
        {workExperience.map((work) => (
          <div className="p-4 w-full justify-between items-center flex border-b border-input">
            <div className="flex items-center space-x-2">
              <span className="text-sm leading-4">{work.title}</span>
              {work.status && (
                <div className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
                  {work.status}
                </div>
              )}
            </div>
            <Link
              href={work.href}
              className={buttonVariants({
                variant: "outline",
                size: "xs",
                className: " text-xs text-muted-foreground",
              })}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
