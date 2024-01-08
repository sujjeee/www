import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Links() {
  return (
    <div className="flex items-center space-x-2">
      <Link
        href={siteConfig.links.email}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7"
          })
        )}
      >
        <Icons.mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Link>
      <Link
        href={siteConfig.links.discord}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7"
          })
        )}
      >
        <Icons.discord className="h-5 w-5" />
        <span className="sr-only">Discord</span>
      </Link>
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7"
          })
        )}
      >
        <Icons.twitter className="h-4 w-4" />
        <span className="sr-only">Twitter/x</span>
      </Link>
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "h-7 w-7"
          })
        )}
      >
        <Icons.gitHub className="h-[18.5px] w-[18.5px]" />
        <span className="sr-only">GitHub</span>
      </Link>
    </div>
  );
}
