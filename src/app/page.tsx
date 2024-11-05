import { Icons } from "@/components/icons"
import { Project } from "@/components/project"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Work } from "@/components/work"
import { projects, socialLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Newsreader } from "next/font/google"
import Link from "next/link"

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12">
      {/* Name/Username */}
      <header className="top-0 z-50 w-full animate-slide-from-down-and-fade-1 cursor-context-menu">
        <div className="flex flex-col">
          <div className="cursor-pointer">
            <h1 className="font-medium text-[15px] transition-element">
              <span className="sr-only">Suraj Gupta</span>
              <span
                aria-hidden="true"
                className="group relative block overflow-hidden"
              >
                <span className="group-hover:-translate-y-full inline-block transition-all duration-300 ease-in-out">
                  <span
                    className="inline-block"
                    style={{ transitionDelay: "275ms" }}
                  >
                    Suraj Gupta
                  </span>
                </span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                  <span
                    className="inline-block"
                    style={{ transitionDelay: "175ms" }}
                  >
                    sujjeee
                  </span>
                </span>
              </span>
            </h1>
          </div>

          {/* Status */}
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

      {/* Work Experience */}
      <section className="animate-slide-from-down-and-fade-3 space-y-4 text-sm">
        <h3 className="font-medium text-[15px]">Work Experience</h3>

        <div className="rounded-md border border-b w-full border-input ">
          <div className="p-4 w-full justify-between items-center flex border-b border-input">
            <span className="text-sm  leading-4">Tapify</span>
            <Button
              className=" text-xs text-muted-foreground"
              variant={"outline"}
              size={"xs"}
            >
              View Details
            </Button>
          </div>
          <div className="p-4 w-full justify-between items-center flex border-b border-input">
            <div className="flex items-center space-x-2">
              <span className="text-sm leading-4">PDFScribe</span>

              <div className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
                Contract Work
              </div>
            </div>
            <Button
              className=" text-xs text-muted-foreground"
              variant={"outline"}
              size={"xs"}
            >
              View Details
            </Button>
          </div>

          <div className="p-4 w-full justify-between items-center flex">
            <div className="flex items-center space-x-2">
              <span className="text-sm  leading-4">OnShow</span>

              <div className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs font-normal text-muted-foreground">
                Freelancing
              </div>
            </div>

            <Button
              className=" text-xs text-muted-foreground"
              variant={"outline"}
              size={"xs"}
            >
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* Writtings */}
      <section className="animate-slide-from-down-and-fade-3 space-y-4 text-sm">
        <h3 className="font-medium text-[15px]">Writing</h3>

        <div className="grid grid-cols-1 gap-6 ">
          <a
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex cursor-pointer flex-row items-center justify-between rounded-md duration-300 hover:before:absolute hover:before:-inset-2.5 hover:before:rounded-md hover:before:bg-accent/20 hover:before:content-['']"
          >
            <div className="flex flex-col space-y-1 z-10">
              <span className="text-sm prose prose-zinc dark:prose-invert">
                How to connect AWS S3 to a Next.js app?
              </span>
            </div>
            <div className="transition duration-150 group-hover:rotate-45">
              <Icons.link className="size-3.5 whitespace-nowrap text-muted-foreground" />
            </div>
          </a>
          <a
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex cursor-pointer flex-row items-center justify-between rounded-md duration-300 hover:before:absolute hover:before:-inset-2.5 hover:before:rounded-md hover:before:bg-accent/20 hover:before:content-['']"
          >
            <div className="flex flex-col space-y-1 z-10">
              <span className="text-sm prose prose-zinc dark:prose-invert">
                RAG isnt hard anymore!
              </span>
            </div>
            <div className="transition duration-150 group-hover:rotate-45">
              <Icons.link className="size-3.5 whitespace-nowrap text-muted-foreground" />
            </div>
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="animate-slide-from-down-and-fade-4 space-y-4 text-sm ">
        <h3 className="font-medium text-[15px] prose prose-zinc dark:prose-invert">
          Projects
        </h3>

        <div className="grid grid-cols-1 gap-6 ">
          {projects.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section className="animate-slide-from-down-and-fade-5 space-y-4">
        <div className="prose prose-zinc dark:prose-invert space-y-4 text-[15px]">
          <h3 className="font-medium text-[15px]">Connect</h3>
          <p>
            If you're looking to connect for a project, feel free to reach out
            via{" "}
            <Link
              href="mailto:contact@sujjeee.com?subject=Hi%2C%20Suraj!"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
            >
              Email
            </Link>
            . Or just ping me on{" "}
            <Link
              href="https://discordapp.com/users/1056124751527030794"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
            >
              Discord
            </Link>
            . You can also follow me on{" "}
            <Link
              href="https://dub.sh/sujjeee"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
            >
              X
            </Link>{" "}
            and{" "}
            <Link
              href="https://git.new/sujjeee"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
            >
              Github
            </Link>{" "}
            if you find my work interesting.
          </p>
        </div>
      </section>
    </section>
  )
}
