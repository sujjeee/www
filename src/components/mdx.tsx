import { cn } from "@/lib/utils"
import { useMDXComponent } from "@content-collections/mdx/react"

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-medium tracking-tighter lg:leading-[1.1]  mb-2 text-[15px]",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-8 scroll-m-20 font-medium font-sans tracking-tighter lg:leading-[1.1] group text-[15px]",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p
      className={cn(
        "prose prose-neutral dark:prose-invert leading-7 [&:not(:first-child)]:mt-6  text-[14px]",
        className,
      )}
      {...props}
    />
  ),
}

export function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <article className="px-7 ">
      <div>
        <Component components={components} />
      </div>
    </article>
  )
}
