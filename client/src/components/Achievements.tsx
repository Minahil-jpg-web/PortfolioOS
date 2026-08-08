import Badge from "./ui/Badge";
import {
  FolderKanban,
  Star,
  Code2,
  Rocket,
} from "lucide-react";
import { projects } from "../data/projects";

const achievements = [
  {
    value: `${String(projects.length).padStart(2, "0")}+`,
    title: "Projects",
    description: "Real-world software projects successfully completed.",
    icon: FolderKanban,
  },
  {
    value: `${projects.filter((project) => project.featured).length}`,
    title: "Featured",
    description: "Projects highlighted in my portfolio.",
    icon: Star,
  },
  {
    value: "10+",
    title: "Technologies",
    description: "Modern tools and frameworks explored.",
    icon: Code2,
  },
  {
    value: "2024",
    title: "Journey Started",
    description: "Continuously learning and building software.",
    icon: Rocket,
  },
];

function Achievements() {
  return (
    <section className="py-24">
<div
  className="
    group
    relative
    mx-auto
    w-[96%]
    overflow-hidden
    rounded-[32px]
    border
    border-white/10
    bg-white/5
    p-10
    backdrop-blur-xl
    shadow-2xl
    transition-all
    duration-500
    hover:-translate-y-2
    hover:scale-[1.01]
    hover:border-cyan-400/50
    hover:shadow-cyan-500/20
    hover:shadow-2xl
  "
>

        <Badge>Achievements</Badge>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Achievements & Highlights
        </h2>

        <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"></div>

        <p className="mt-6 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-xl font-semibold text-transparent">
          Milestones that represent my technical growth, practical experience,
          and passion for building impactful software.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.20)]"
              >
                <div className="mb-6 inline-flex rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
                  <Icon size={28} />
                </div>

                <h3 className="text-5xl font-bold text-cyan-400">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;