import type React from "react"
import { Icons } from "./icons"

export interface ProjectProps {
  href: string
  title: string
  description: string
  status: "wip" | "maintained" | "archived"
}

export function Project({ href, title, description, status }: ProjectProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex cursor-pointer flex-row items-center justify-between rounded-md duration-300 hover:before:absolute hover:before:-inset-2.5 hover:before:rounded-md hover:before:bg-accent/20 hover:before:content-['']"
    >
      <div className="flex flex-col space-y-1 z-10">
        <div className="flex items-center space-x-2">
          <span className="text-[15px] font-medium leading-4">{title}</span>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
            {status}
          </div>
        </div>
        <span className="text-[15px] prose prose-zinc dark:prose-invert">
          {description}
        </span>
      </div>
      <div className="transition duration-150 group-hover:rotate-45">
        <Icons.link className="size-3.5 whitespace-nowrap text-muted-foreground" />
      </div>
    </a>
  )
}
