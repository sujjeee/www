import { Project } from "@/components/project"
import { SocialLinks } from "@/components/socials"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { projects, socialLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Newsreader } from "next/font/google"

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12">
      {/* Name */}
      <header className="top-0 z-50 w-full animate-slide-from-down-and-fade-1 cursor-context-menu">
        <div className="flex flex-col">
          <h1 className="inline-flex text-[15px] font-medium no-underline">
            Suraj Gupta
          </h1>
          <div className="flex items-center">
            <div className="absolute flex size-4">
              <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative top-[4.5px] size-2 rounded-full bg-green-500"></span>
            </div>
            <span className="prose prose-neutral ml-4 dark:prose-invert text-[14px]">
              available for work
            </span>
          </div>
        </div>
      </header>

      {/* About me */}
      <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
        <p className="leading-relaxed">
          I&#39;m a{" "}
          <span
            className={cn(
              "font-medium font-reader text-[16px] text-foreground",
              newsreader.className
            )}
          >
            Software Developer
          </span>{" "}
          believes in building minimal but significant things for the web.{" "}
          Inspired by{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="italic hover:underline underline-offset-4">
                  Kaizen,{" "}
                </span>
              </TooltipTrigger>
              <TooltipContent>
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

      {/* Projects */}
      <section className="animate-slide-from-down-and-fade-3 space-y-4 text-sm">
        <h3 className="font-medium text-[15px]">Projects</h3>
        <div className="grid grid-cols-1 gap-6 ">
          {projects.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section className="animate-slide-from-down-and-fade-4 space-y-4 text-sm">
        <h3 className="prose prose-zinc dark:prose-invert text-[15px] ">
          If you&#39;re looking to connect with me for a project, feel free to
          reach out to me.
        </h3>
        <section>
          <div className="flex items-center gap-6 ">
            {socialLinks.map((socials, index) => (
              <SocialLinks {...socials} key={index} />
            ))}
          </div>
        </section>
      </section>
    </section>
  )
}
