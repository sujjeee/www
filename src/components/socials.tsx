import Link from "next/link"

export interface SocialLinksProps {
  href: string
  title: string
}

export function SocialLinks({ href, title }: SocialLinksProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
    >
      {title}
      <span className="sr-only">{title}</span>
    </Link>
  )
}
