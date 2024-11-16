import Link from "next/link"
import { ShellSection } from "@/components/ui/shell"

export function ContactMe() {
  return (
    <ShellSection index={5} title="Connect">
      <div className="prose prose-zinc dark:prose-invert text-[15px]">
        <p>
          If you're looking to connect for a project, feel free to reach out via{" "}
          <CustomLink href="mailto:contact@sujjeee.com?subject=Hi%2C%20Suraj!">
            Email
          </CustomLink>
          . Or just ping me on{" "}
          <CustomLink href="https://discordapp.com/users/1056124751527030794">
            Discord
          </CustomLink>
          . You can also follow me on{" "}
          <CustomLink href="https://git.new/sujjeee">Github</CustomLink> and{" "}
          <CustomLink href="https://dub.sh/sujjeee">X</CustomLink> if you find
          my work interesting.
        </p>
      </div>
    </ShellSection>
  )
}

interface CustomLinkProps {
  href: string
  children: React.ReactNode
}

export function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="prose prose-zinc dark:prose-invert underline-offset-4 text-[15px]  border-b border-dashed border-neutral-700 no-underline pb-[1.4px] hover:border-solid "
    >
      {children}
    </Link>
  )
}
