import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function Header() {
  return (
    <header className="container max-w-[640px]">
      <div className="flex items-center justify-between py-4">
        <a className="flex items-center space-x-2" href="/">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <span className="text-lg font-bold tracking-wide">
              sujjeee
            </span>
            <span>software developer</span>
          </div>
        </a>
        <div className="flex items-center space-x-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "h-7 w-7",
              })
            )}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "h-7 w-7",
              })
            )}
          >
            <Icons.twitter className="h-4 w-4" />
            <span className="sr-only">Twitter/x</span>
          </Link>
        </div>
      </div>
    </header>
  )
}