import Project from "@/components/project";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";

const jetBrains_Mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container max-w-[640px] flex flex-col space-y-2">
      <article className="pt-6">
        <div className="space-y-1">
          <h2
            className={cn(
              "font-mono text-lg tracking-tighter",
              jetBrains_Mono.className
            )}
          >
            about me
          </h2>
        </div>
        <p className="text-muted-foreground space-y-4 py-4 text-[14.4px]">
          hey, i'm <span className="text-foreground font-mono">suraj</span> aka{" "}
          <span className="text-foreground font-mono">sujjeee</span>. i'm a self
          taught{" "}
          <span className="text-foreground font-mono">
            full-stack developer
          </span>{" "}
          and i love building cool, crazy and awesome{" "}
          <span className="text-foreground font-mono">open source</span>{" "}
          projects.
        </p>
      </article>
      <article className="pt-6">
        <div className="space-y-1">
          <h2
            className={cn(
              "font-mono text-lg tracking-tighter",
              jetBrains_Mono.className
            )}
          >
            projects
          </h2>
        </div>
        <ul className="space-y-4 py-4 text-[14.4px]">
          {projects.map((project) => (
            <Project {...project} key={project.title} />
          ))}
        </ul>
      </article>
    </div>
  );
}
