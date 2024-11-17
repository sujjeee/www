import React from "react"
import Link from "next/link"
import { MDX } from "@/components/mdx"
import { allPosts } from "content-collections"
import { BlogPagination } from "@/components/sections/blog-pagination"
import { TableOfContents } from "@/components/sections/table-of-content"
import { notFound } from "next/navigation"
import { readingTime } from "reading-time-estimator"
import { ChevronLeft } from "lucide-react"
import { Metadata } from "next"

interface BlogPage {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPage): Metadata {
  const post = allPosts.find((post) => post._meta.path === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: {
      absolute: post.title,
    },
    description: post.description,
  }
}

export default function BlogPage({ params }: BlogPage) {
  const post = allPosts.find((post) => post._meta.path === params.slug)
  if (!post) return notFound()

  return (
    <div className="px-4 sm:px-7 py-4 animation-delay-300 w-full ">
      <div className="w-fit top-[10rem] right-auto left-[2rem] hidden xl:top-[3rem] xl:left-[12rem] xl:right-auto xl:block fixed mt-0 h-full  justify-start space-y-4 transition text-[14px] ">
        <Link
          href={"/"}
          className="text-muted-foreground hover:text-primary items-center flex gap-2 cursor-pointer text-bold group"
        >
          <ChevronLeft className="size-4 ml-1 transition group-hover:-translate-x-1" />{" "}
          <span className="">Back Home</span>
        </Link>
      </div>
      <div>
        <h1 className="font-medium  lg:leading-[1.1] text-lg mb-2">
          {post.title}
        </h1>
        <div className="mb-8 flex flex-wrap items-center space-x-1.5 text-muted-foreground text-sm">
          <time dateTime="2024-10-06T00:00:00.000Z" className="block">
            Updated {""} {post.time}
          </time>
          <div className="text-[0.6rem]">•</div>
          <div>{readingTime(post.content).minutes} minutes read</div>
        </div>
      </div>
      <MDX code={post.mdx} />
      <div className="my-10 h-[0.5px] w-full shrink-0 border border-dashed" />
      <BlogPagination prevPost={post.prev} nextPost={post.next} />
      <TableOfContents />
    </div>
  )
}
