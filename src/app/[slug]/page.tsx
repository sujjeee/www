import React from "react"
import { MDX } from "@/components/mdx"
import { allPosts } from "content-collections"
import { BlogPagination } from "@/components/sections/blog-pagination"
import { TableOfContents } from "@/components/sections/table-of-content"
import { notFound } from "next/navigation"

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._meta.path === params.slug)

  if (!post) return notFound()

  return (
    <div className="px-4 sm:px-7">
      <MDX code={post.mdx} />
      <div className="my-8 h-[0.5px] w-full shrink-0 border border-dashed" />
      <BlogPagination prevPost={post.prev} nextPost={post.next} />
      <TableOfContents />
    </div>
  )
}
