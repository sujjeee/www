import { allPosts } from "content-collections"
import { Icons } from "./icons"

export function Writings() {
  return (
    <div className="grid grid-cols-1 gap-6 ">
      {allPosts.map((post) => (
        <a
          href={`/posts/${post._meta.path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex cursor-pointer flex-row items-center justify-between rounded-md duration-300 hover:before:absolute hover:before:-inset-2.5 hover:before:rounded-md hover:before:bg-accent/20 hover:before:content-['']"
        >
          <div className="flex flex-col space-y-1 z-10">
            <span className="text-sm prose prose-zinc dark:prose-invert">
              {post.title}
            </span>
          </div>
          <div className="transition duration-150 group-hover:rotate-45">
            <Icons.link className="size-3.5 whitespace-nowrap text-muted-foreground" />
          </div>
        </a>
      ))}
    </div>
  )
}
