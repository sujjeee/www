import React from "react";

interface ProjectProps {
  href: string;
  title: string;
  description: string;
  archived?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  href,
  title,
  description,
  archived
}) => {
  return (
    <li>
      <a
        target="_blank"
        className="flex flex-col space-y-1.5 !no-underline"
        href={href}
        rel="noreferrer"
      >
        <div>
          <span className="font-medium underline underline-offset-4 ">
            {title}
          </span>
          {archived && (
            <span className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-muted text-muted-background">
              Archived
            </span>
          )}
        </div>
        <span className="text-muted-foreground">{description}</span>
      </a>
    </li>
  );
};

export default Project;
