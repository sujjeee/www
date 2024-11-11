import { cn } from "@/lib/utils"
import { useMDXComponent } from "@content-collections/mdx/react"

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      data-highlight="false"
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "font-medium  lg:leading-[1.1]  mb-2 text-[15px]",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      data-highlight="false"
      id={props.children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={cn(
        "mt-9 scroll-m-20 font-medium font-sans lg:leading-[1.1] group text-[15.5px]",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p
      className={cn(
        "prose prose-neutral dark:prose-invert text-[15px] leading-7 [&:not(:first-child)]:mt-6  ",
        className,
      )}
      {...props}
    />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-gray-4 border-l-2 pl-6 text-muted italic",
        className,
      )}
      {...props}
    />
  ),
}

export function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <article>
      <Component components={components} />
    </article>
  )
}
