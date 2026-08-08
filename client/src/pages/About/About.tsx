import { portfolio } from "../../data/portfolio";

import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import GlassCard from "../../components/ui/GlassCard";
import GlowBackground from "../../components/ui/GlowBackground";
import SectionDivider from "../../components/ui/SectionDivider";
import FadeIn from "../../components/animations/FadeIn";
import SkillChip from "../../components/ui/SkillChip";
import { VscVscode } from "react-icons/vsc";
import Achievements from "../../components/Achievements";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { Rocket, Landmark, Network } from "lucide-react";import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

import {
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
} from "react-icons/si";


function About() {
  const { profile } = portfolio;
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
         <GlowBackground />
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">

          <Badge>
  👋 About Me
</Badge>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
  <>
 

  <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
    <Typewriter
      words={["Building Intelligent Systems That Solve Real Problems"]}
      loop={0}
      cursor={false}
      typeSpeed={90}
      deleteSpeed={60}
      delaySpeed={4000}
    />
  </span>
</>
</h1>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            {profile.shortBio}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

      <Button
  onClick={() => {
    alert("CV will be available soon.");
  }}
>
  Download CV
</Button>
<Button
  variant="secondary"
  onClick={() => navigate("/projects")}
>
  View Projects
</Button>
          </div>

        </div>

        {/* Right Side */}
<div className="w-full max-w-sm">

  <GlassCard>
<div className="flex justify-center">
  <div className="group relative h-36 w-36">

    {/* Rotating Gradient Ring */}
    <div className="absolute inset-0 animate-[spin_12s_linear_infinite] rounded-full bg-gradient-to-tr from-cyan-400 via-violet-500 to-cyan-400 p-[3px]">

      <div className="h-full w-full rounded-full bg-[#050816]" />

    </div>

    {/* Glow */}
    <div className="absolute inset-2 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/40" />

    {/* Image Container */}
    <div className="absolute inset-[6px] overflow-hidden rounded-full border border-white/10 bg-slate-900 shadow-[0_0_35px_rgba(34,211,238,0.25)] transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]">

      <img
        src="/profile.jpg"
        alt={profile.name}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const fallback =
            e.currentTarget.nextElementSibling as HTMLElement;

          if (fallback) {
            fallback.style.display = "flex";
          }
        }}
      />

      {/* Fallback */}
      <div className="hidden h-full w-full items-center justify-center bg-cyan-500 text-5xl font-bold text-slate-950">
        {profile.name
          .split(" ")
          .map((word) => word[0])
          .join("")}
      </div>

    </div>

  </div>
</div>

<h2 className="mt-8 text-center text-2xl font-bold text-white">
  {profile.name}
</h2>

<p className="mt-2 text-center text-slate-400">
  {profile.role}
</p>

<div className="mt-8 space-y-3 text-sm text-slate-400">
   <p>🟢 {profile.availability}</p>
    <p>✉️ minahilahsan328@gmail.com</p>
  <p>📍 {profile.location}</p>
 
 
</div>
  </GlassCard>


        </div>

      </section>
      <SectionDivider />
<FadeIn>
      <section className="mx-auto max-w-7xl px-6 py-20">

<GlassCard>

  <Badge>
    👋 About Me
  </Badge>

  {/* Heading */}
  <h2 className="mt-8 text-5xl font-extrabold tracking-tight">
    Who I Am
  </h2>

  {/* Animated Divider */}
  <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"></div>

  {/* Subtitle */}
  <p className="mt-6 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-xl font-semibold text-transparent">
    Building intelligent software with creativity & purpose.
  </p>

  {/* Quote */}
  <div className="mt-10 rounded-2xl border-l-4 border-cyan-400 bg-slate-900/40 p-6 italic text-slate-300">
    “I don't just write code. I build digital experiences that solve real-world
    problems.”
  </div>

  {/* Main Bio */}
  <p className="mt-10 max-w-4xl text-lg leading-9 text-slate-300">
    {profile.fullBio}
  </p>

{/* Skills */}
<div className="mt-10 flex flex-wrap gap-4">

  <div className="group flex cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]">
    <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
      🤖
    </span>
    <span className="group-hover:text-cyan-300">
      AI Systems
    </span>
  </div>

  <div className="group flex cursor-pointer items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-violet-400 hover:bg-violet-500/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]">
    <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
      💻
    </span>
    <span className="group-hover:text-violet-300">
      Web Development
    </span>
  </div>

  <div className="group flex cursor-pointer items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-sky-400 hover:bg-sky-500/20 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)]">
    <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
      🚀
    </span>
    <span className="group-hover:text-sky-300">
      Problem Solving
    </span>
  </div>

  <div className="group flex cursor-pointer items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]">
    <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
      📚
    </span>
    <span className="group-hover:text-emerald-300">
      Continuous Learning
    </span>
  </div>

</div>

</GlassCard>

</section>
</FadeIn>

{/* 👇 YAHAN PASTE KARNA HAI */}
<SectionDivider />
<FadeIn>
<section className="mx-auto max-w-7xl px-6 py-20">

  <GlassCard>

    <Badge>
      🎓 Academic Journey
    </Badge>

    <h2 className="mt-8 text-5xl font-extrabold tracking-tight">
      {profile.academicJourneyTitle}
    </h2>

    <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"></div>

    <p className="mt-6 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-xl font-semibold text-transparent">
      {profile.academicJourneySubtitle}
    </p>

    <div className="mt-10 rounded-2xl border-l-4 border-cyan-400 bg-slate-900/40 p-6 italic text-slate-300">
      "{profile.academicJourneyQuote}"
    </div>

    <div className="mt-10 space-y-8 text-lg leading-9 text-slate-300">
      {profile.academicJourney
        .split("\n\n")
        .map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
      ))}
    </div>
    {/* Academic Highlights */}
<div className="mt-12 grid gap-6 md:grid-cols-2">

  <GlassCard>
    <div className="text-4xl">🎓</div>

    <h3 className="mt-4 text-xl font-bold text-white">
      Degree
    </h3>

    <p className="mt-2 text-slate-400">
      {profile.degree}
    </p>
  </GlassCard>

  <GlassCard>
    <div className="text-4xl">👨‍🏫</div>

    <h3 className="mt-4 text-xl font-bold text-white">
      Mentor
    </h3>

    <p className="mt-2 text-slate-400">
      {profile.mentor}
    </p>
  </GlassCard>

  <GlassCard>
    <div className="text-4xl">🧠</div>

    <h3 className="mt-4 text-xl font-bold text-white">
      Research
    </h3>

    <p className="mt-2 text-slate-400">
      {profile.research}
    </p>
  </GlassCard>
  

  <GlassCard>
    <div className="text-4xl">🚀</div>

    <h3 className="mt-4 text-xl font-bold text-white">
      Focus
    </h3>

    <p className="mt-2 text-slate-400">
      {profile.focus}
    </p>
  </GlassCard>

</div>

  </GlassCard>

</section>

</FadeIn>

<SectionDivider />


<section className="mx-auto max-w-7xl px-6 py-20">

  <GlassCard>

    <Badge>
      {profile.missionTitle}
    </Badge>
    <h2 className="mt-8 text-5xl font-extrabold tracking-tight">
  My Mission & Goals
</h2>
<div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"></div>
<p className="mt-6 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-xl font-semibold text-transparent">
  {profile.missionSubtitle}
</p>
<div className="mt-10 grid gap-6 md:grid-cols-3">


<GlassCard>
<h3 className="flex items-center gap-3 text-xl font-bold text-cyan-300">
  <Rocket size={26} />
  <span>Become an ML Authority</span>
</h3>

  <p className="mt-3 leading-8 text-slate-300">
    {profile.mission1}
  </p>
</GlassCard>



<GlassCard>
 <h3 className="flex items-center gap-3 text-xl font-bold text-violet-300">
  <Landmark size={26} />
  <span>Serve My Nation</span>
</h3>

  <p className="mt-3 leading-8 text-slate-300">
    {profile.mission2}
  </p>
</GlassCard>


<GlassCard>
 <h3 className="flex items-center gap-3 text-xl font-bold text-emerald-300">
  <Network size={26} className="text-emerald-300" />
  <span>Bridge the Gap</span>
</h3>
  <p className="mt-3 leading-8 text-slate-300">
    {profile.mission3}
  </p>
</GlassCard>

</div>
  </GlassCard>

</section>

<SectionDivider />

<section className="mx-auto max-w-7xl px-6 py-20">
  <GlassCard>
    <Badge>{profile.technicalTitle}</Badge>

    <h2 className="mt-8 text-5xl font-extrabold tracking-tight">
      Technical Prowess
    </h2>

    <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"></div>

    <p className="mt-6 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-xl font-semibold text-transparent">
      {profile.technicalSubtitle}
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-2">

      {/* Programming & Frameworks */}
      <GlassCard>
        <h3 className="text-2xl font-bold text-cyan-300">
          💻 Programming & Frameworks
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">
          <SkillChip icon={<SiJavascript size={18} className="text-yellow-400" />}>
            JavaScript (ES6+)
          </SkillChip>

          <SkillChip icon={<SiTypescript size={18} className="text-blue-500" />}>
            TypeScript
          </SkillChip>

          <SkillChip icon={<SiReact size={18} className="text-cyan-400" />}>
            React.js
          </SkillChip>

          <SkillChip icon={<SiVite size={18} className="text-violet-400" />}>
            Vite
          </SkillChip>

          <SkillChip icon={<SiTailwindcss size={18} className="text-sky-400" />}>
            Tailwind CSS
          </SkillChip>

          <SkillChip icon={<SiReact size={18} className="text-pink-400" />}>
            Framer Motion
          </SkillChip>

          <SkillChip icon={<SiNodedotjs size={18} className="text-green-500" />}>
            Node.js
          </SkillChip>

          <SkillChip icon={<SiExpress size={18} className="text-gray-300" />}>
            Express.js
          </SkillChip>

          <SkillChip icon={<SiPostgresql size={18} className="text-blue-500" />}>
            PostgreSQL
          </SkillChip>
        </div>
      </GlassCard>

      {/* Development Tools */}
      <GlassCard>
        <h3 className="text-2xl font-bold text-cyan-300">
          🌐 Development Tools
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">
          <SkillChip icon={<SiGit size={18} className="text-orange-500" />}>
            Git
          </SkillChip>

          <SkillChip icon={<SiGithub size={18} className="text-white" />}>
            GitHub
          </SkillChip>

          <SkillChip icon={<VscVscode size={18} className="text-blue-500" />}>
            VS Code
          </SkillChip>

          <SkillChip icon={<SiPostman size={18} className="text-orange-400" />}>
            Postman
          </SkillChip>

          <SkillChip icon={<SiNpm size={18} className="text-red-500" />}>
            npm
          </SkillChip>

          <SkillChip>REST API</SkillChip>
          <SkillChip>JWT Authentication</SkillChip>
          <SkillChip>MVC Architecture</SkillChip>
        </div>
      </GlassCard>

    </div>
  </GlassCard>
</section>
<SectionDivider />
 

<section className="py-24">
  <GlassCard>
  <div className="max-w-7xl mx-auto px-6">

   <Badge>Projects</Badge>

<h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
  Featured Projects
</h2>

<div className="mt-3 flex">
  <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"></div>
</div>

<p className="mt-6 bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-xl font-semibold text-transparent">
  A selection of projects that showcase my expertise in Full Stack
  Development, Machine Learning, and modern software engineering.
</p>

    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* ================= SmartPOS ================= */}

<div className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]">

        <Badge>Featured Project</Badge>

       <h3 className="mt-6 text-3xl font-bold">
  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    <Typewriter
      words={["SmartPOS – Desktop Billing & Inventory System"]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={2500}
    />
  </span>
</h3>

        <p className="mt-5 leading-8 text-slate-400">
          A complete desktop billing and inventory management system for
          pharmacies and retail stores featuring secure authentication,
          inventory management, customer handling, supplier records,
          billing, sales tracking and profit analysis.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 transition hover:-translate-y-1 hover:scale-110">React</span>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-300 transition hover:-translate-y-1 hover:scale-110">Node.js</span>

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-orange-300 transition hover:-translate-y-1 hover:scale-110">Express.js</span>

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-violet-300 transition hover:-translate-y-1 hover:scale-110">PostgreSQL</span>

          <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-pink-300 transition hover:-translate-y-1 hover:scale-110">JWT</span>

          <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sky-300 transition hover:-translate-y-1 hover:scale-110">Tailwind CSS</span>
        </div>

        <button className="mt-10 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-7 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
          View Project →
        </button>

      </div>

      {/* ================= Kidney Project ================= */}

      <div className="group rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]">

        <Badge>Major Project</Badge>

        <h3 className="mt-6 text-3xl font-bold">
  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
    <Typewriter
      words={["Kidney Disease Prediction System"]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={2500}
    />
  </span>
</h3>

        <p className="mt-5 leading-8 text-slate-400">
          One of my most significant projects to date is a Healthcare-focused Predictive Model. We developed an advanced system that utilizes patient data to predict the early onset of kidney disease with high precision.
        </p>

        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
          <h4 className="font-semibold text-cyan-300">
            Key Achievement
          </h4>

          <p className="mt-2 text-slate-400">
            Achieved over <span className="font-bold text-cyan-300">90% Accuracy</span>
            {" "}through feature engineering and model optimization.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 transition hover:-translate-y-1 hover:scale-110">Python</span>

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-yellow-300 transition hover:-translate-y-1 hover:scale-110">Machine Learning</span>

          <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-pink-300 transition hover:-translate-y-1 hover:scale-110">Scikit-Learn</span>

          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-300 transition hover:-translate-y-1 hover:scale-110">Pandas</span>

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-violet-300 transition hover:-translate-y-1 hover:scale-110">NumPy</span>

        </div>

        <button className="mt-10 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-7 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
          View Project →
        </button>

      </div>

    </div>

  </div>
  </GlassCard>
</section> 

<SectionDivider />


  <Achievements />






    </main>
  );
}

export default About;