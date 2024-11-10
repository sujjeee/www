import { ProjectProps } from "@/components/sections/projects"
import { WorkProps } from "@/components/sections/work-experience"

export const projects = [
  {
    title: "threads-clone",
    description: "threads clone with t3 stack.",
    href: "https://threadss-clone.vercel.app",
    status: "maintained",
  },
  {
    title: "linknode",
    description: "minimalistic link in bio.",
    href: "https://linknode.vercel.app",
    status: "maintained",
  },
  {
    title: "artoons",
    description: "cartoon-style ai illustrations.",
    href: "https://artoons.vercel.app",
    status: "maintained",
  },
  {
    title: "mindmap",
    description: "map your thoughts.",
    href: "https://map-your-thoughts.vercel.app/",
    status: "maintained",
  },
  {
    title: "svgls",
    description: "a cli for adding svg icons.",
    href: "https://github.com/sujjeee/svgls",
    status: "archived",
  },
  {
    title: "gemai",
    description: "a cli rag chatbot with gemini.",
    href: "https://github.com/sujjeee/gemai",
    status: "archived",
  },
  {
    title: "dubco",
    description: "a cli for shortening urls.",
    href: "https://github.com/sujjeee/dubco",
    status: "archived",
  },
  {
    title: "peepstudio",
    description: "random avatar generator.",
    href: "https://peepstudio.vercel.app",
    status: "archived",
  },
  {
    title: "playboard",
    description: "collaborative drawing app.",
    href: "https://playboard.vercel.app",
    status: "archived",
  },
  {
    title: "securelink",
    description: "secure link shortener.",
    href: "https://securelink.vercel.app",
    status: "archived",
  },
] as ProjectProps[]

export const workExperience = [
  {
    title: "Tapify",
    href: "building-saas-from-scratch",
    buttonText: "Building SaaS from Scratch",
  },
  {
    title: "PDFScribe",
    href: "solving-sellers-problem",
    status: "contract work",
    buttonText: "Solving Sellers Problem",
  },
  {
    title: "OnShow",
    href: "learn-new-things-by-doing",
    status: "freelancing",
    buttonText: "Learn New Things by Doing",
  },
] as WorkProps[]
