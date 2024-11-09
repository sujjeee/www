import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Newsreader } from "next/font/google"

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"],
})

export function AboutMe() {
  return (
    <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
      <p className="leading-relaxed">
        I&#39;m a{" "}
        <span
          className={cn(
            "font-medium font-reader text-[16px] text-foreground",
            newsreader.className,
          )}
        >
          Full-Stack Engineer
        </span>{" "}
        focused on building modern, secure, and optimized web apps that follow
        industry standards.
      </p>
      <p className="leading-relaxed">
        Inspired by{" "}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="italic hover:underline underline-offset-4">
                Kaizen,{" "}
              </span>
            </TooltipTrigger>
            <TooltipContent align="start">
              <span className="italic prose prose-zinc dark:prose-invert text-sm">
                (n.) philosophy of continuous improvement
              </span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
        strive for continuous learning and improvement, always seeking
        innovative ways to refine my skills and knowledge.
      </p>
    </section>
  )
}
