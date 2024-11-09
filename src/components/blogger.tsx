import Link from "next/link"

const BlogPager = ({
  prevPost,
  nextPost,
}: {
  prevPost: any
  nextPost: any
}) => {
  return (
    <div className="flex justify-between mt-8 py-3 md:py-4">
      <div className="flex items-center justify-between text-[15px]">
        {prevPost && (
          <Link
            className="flex flex-col items-start"
            href={`/blog/${prevPost._meta.path}`}
          >
            <span className="mb-1 text-muted-foreground">Previous</span>
            <span className="font-medium ">{prevPost.title}</span>
          </Link>
        )}

        {nextPost && (
          <Link
            className="flex flex-col items-start"
            href={`/blog/${nextPost._meta.path}`}
          >
            <span className="mb-1 text-muted-foreground">Next</span>
            <span className="font-medium ">{nextPost.title}</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default BlogPager
