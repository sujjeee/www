import React from "react"
import { MDX } from "@/components/mdx"
import { allPosts } from "content-collections"

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._meta.path === params.slug)

  if (!post) return <div>Post not found</div>

  return <MDX code={post.mdx} />
}
