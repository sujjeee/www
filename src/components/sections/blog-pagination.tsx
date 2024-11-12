import Link from "next/link"
import { type Post } from "content-collections"

interface BlogPagination {
  prevPost: Post["prev"]
  nextPost: Post["next"]
}

export function BlogPagination({ nextPost, prevPost }: BlogPagination) {
  return (
    <div className="flex w-full items-center justify-between text-[14px]">
      {prevPost && (
        <Link
          className="flex w-full flex-col gap-1 text-left"
          href={`/${prevPost._meta.path}`}
        >
          <span className="mb-1 text-muted-foreground">Previous</span>
          <span className="font-medium ">{prevPost.title}</span>
        </Link>
      )}

      {nextPost && (
        <Link
          className="flex w-full flex-col gap-1 text-right"
          href={`/${nextPost._meta.path}`}
        >
          <span className="mb-1 text-muted-foreground">Next</span>
          <span className="font-medium ">{nextPost.title}</span>
        </Link>
      )}
    </div>
  )
}
