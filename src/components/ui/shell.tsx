import { cn } from "@/lib/utils"

export function ShellSection({
  className,
  children,
  index,
  title,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { index: number }) {
  return (
    <section
      className={cn(
        `animate-slide-from-down-and-fade-${index} space-y-4 text-sm`,
        className
      )}
      {...props}
    >
      <h3 className="font-medium text-[15px]">{title}</h3>
      {children}
    </section>
  )
}
