import { ExternalLink, Code2 } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectCard({
  image,
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        min-h-[480px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_18px_55px_rgba(34,211,238,0.18)]
      "
    >
      {/* Image */}

      <div className="relative h-48 overflow-hidden bg-[#07111f]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/20 to-transparent" />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        {/* Title */}

        <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-3 min-h-[72px] text-[14px] leading-6 text-slate-400 line-clamp-3">
          {description}
        </p>

        {/* Tags */}

        <div className="mt-5 flex min-h-[68px] flex-wrap items-start gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                whitespace-nowrap
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-3
                py-1
                text-xs
                font-medium
                text-cyan-300
                transition-all
                duration-300
                group-hover:border-cyan-400/40
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-auto pt-5">
          <div className="mb-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex flex-wrap items-center gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-cyan-300
                  hover:bg-cyan-500
                  hover:text-white
                "
              >
                <ExternalLink className="shrink-0" size={16} />
                <span>Live Demo</span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <Code2 className="shrink-0" size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;