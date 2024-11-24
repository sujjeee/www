"use client"

import { type Post } from "content-collections"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface BlogPagination {
  posts: Array<Post>
}

export function BlogPagination({ posts }: BlogPagination) {
  const currentSlug = usePathname().split("/").pop()
  const currentIndex = posts.findIndex(
    (post) => post._meta.path === currentSlug
  )
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const previous = currentIndex > 0 ? posts[currentIndex - 1] : null

  return (
    <div className="flex w-full items-center justify-between text-[14px]">
      {previous && (
        <Link
          className="flex w-full flex-col gap-1 text-left"
          href={`/${previous._meta.path}`}
        >
          <span className="mb-1 text-muted-foreground">Previous</span>
          <span className="font-medium ">{previous.title}</span>
        </Link>
      )}

      {next && (
        <Link
          className="flex w-full flex-col gap-1 text-right"
          href={`/${next._meta.path}`}
        >
          <span className="mb-1 text-muted-foreground">Next</span>
          <span className="font-medium ">{next.title}</span>
        </Link>
      )}
    </div>
  )
}
