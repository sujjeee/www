import Link from "next/link"

export function Contact() {
  return (
    <section className="animate-slide-from-down-and-fade-6 space-y-4  ]">
      <h3 className="font-medium text-sm text-primary ">Connect</h3>
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
            href="https://dub.sh/sujjeee"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
          >
            X
          </Link>{" "}
          and{" "}
          <Link
            href="https://git.new/sujjeee"
            target="_blank"
            rel="noreferrer"
            className="text-[15px] prose prose-zinc dark:prose-invert hover:underline underline-offset-4"
          >
            Github
          </Link>{" "}
          if you find my work interesting.
        </p>
      </div>
    </section>
  )
}
