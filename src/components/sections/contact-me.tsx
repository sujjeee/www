import Link from "next/link"
import { ShellSection } from "@/components/ui/shell"

export function ContactMe() {
  return (
    <ShellSection index={5} title="Connect">
      <div className="prose prose-zinc dark:prose-invert text-[15px]">
        <p>
          If you're looking to connect for a project, feel free to reach out via{" "}
          <Link
            href="mailto:contact@sujjeee.com?subject=Hi%2C%20Suraj!"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
          >
            Email
          </Link>
          . Or just ping me on{" "}
          <Link
            href="https://discordapp.com/users/1056124751527030794"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
          >
            Discord
          </Link>
          . You can also follow me on{" "}
          <Link
            href="https://git.new/sujjeee"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
          >
            Github
          </Link>{" "}
          and{" "}
          <Link
            href="https://dub.sh/sujjeee"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
          >
            X
          </Link>{" "}
          if you find my work interesting.
        </p>
      </div>
    </ShellSection>
  )
}
