import React from "react"
import { MDX } from "@/components/mdx"
import { allPosts } from "content-collections"
import BlogPager from "@/components/blogger"
import { TableOfContents } from "@/components/table-of-content"

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._meta.path === params.slug)

  if (!post) return <div>Post not found</div>

  const prevPost = post.prev
  const nextPost = post.next

  return (
    <div className="px-4 sm:px-7">
      <MDX code={post.mdx} />
      <div className="my-8 h-[0.5px] w-full shrink-0 border border-dashed" />
      <BlogPager prevPost={prevPost} nextPost={nextPost} />
      <TableOfContents />
    </div>
  )
}
