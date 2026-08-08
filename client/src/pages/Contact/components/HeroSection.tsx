import { InlineWidget } from "react-calendly";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Mail,
  MapPinned,
  Zap,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";





const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I build modern websites, dashboards, landing pages and full-stack web applications.",
  },
  {
    question: "What technologies do you use?",
    answer:
    "I work as a Full-Stack JavaScript Developer, building fast, responsive, and scalable web applications with React, TypeScript, Tailwind CSS, Node.js, Express.js, PostgreSQL, REST APIs, and modern development tools."
  },
  {
    question: "How long does a project take?",
    answer:
      "Depending on the project scope, most websites are completed within 1–6 weeks.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work remotely with clients from anywhere in the world.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. I can redesign existing websites with a modern UI, improved UX and better performance.",
  },
  {
    question: "How can we start working together?",
    answer:
      "Simply send me a message through the contact form and I'll get back to you within 24 hours.",
  },
];

function HeroSection() {


    const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");
const location = useLocation();

    const [activeFeature, setActiveFeature] = useState<number | null>(null);
      const [openIndex, setOpenIndex] = useState<number | null>(null);
      const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);


      useEffect(() => {
  const params = new URLSearchParams(location.search);

  if (params.get("book") === "true") {
    const section = document.getElementById("discovery-call");

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      setIsCalendlyOpen(true);
    }, 1500);
  }
}, [location]);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  // Required Fields
  if (!formData.name || !formData.email || !formData.message) {
    setError("Please fill in all required fields.");
    return;
  }

  // Email Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(formData.email)) {
  setError("Please enter a valid email address.");
  return;
}

setLoading(true);

try {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  setSuccess("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
} catch (err) {
  console.error(err);
  setError("Failed to send message. Please try again.");
} finally {
  setLoading(false);
}
};

  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

        
{/* Premium Infinite Contact Banner */}
<div className="mb-12 w-full overflow-hidden rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="flex whitespace-nowrap py-4"
  >
    {[...Array(2)].map((_, index) => (
      <div
        key={index}
        className="flex shrink-0 items-center gap-8 px-8"
      >
        <span className="text-cyan-400 text-lg">✦</span>

        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.28em] text-transparent">
          Contact With Me
        </span>

        <span className="text-cyan-500/60">•</span>

        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200">
          I Will Reply Soon
        </span>

        <span className="text-cyan-500/60">•</span>

        <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-blue-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.28em] text-transparent">
          Let's Build Something Amazing
        </span>

        <span className="text-cyan-500/60">•</span>
      </div>
    ))}
  </motion.div>
</div>




        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 text-xl font-medium text-cyan-300"
        >
          👋 Hello There!
        </motion.p>

        {/* Heading */}
        <div className="space-y-2">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-5xl font-black tracking-tight text-white md:text-7xl"
          >
            Let's Build
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-5xl font-black tracking-tight text-white md:text-7xl"
          >
            Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Incredible
            </span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-5xl font-black tracking-tight text-white md:text-7xl"
          >
            Together.
          </motion.h1>

        </div>

       {/* Feature Highlights */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
  className="mt-14 flex flex-wrap items-center justify-center gap-6"
>


{/* Item 1 */}
<motion.div
  onHoverStart={() => setActiveFeature(1)}
  onHoverEnd={() => setActiveFeature(null)}
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 2.2, repeat: Infinity }}
  className="flex items-center gap-3"
>
  {/* Emoji */}
  <motion.span
    animate={{
      scale: activeFeature === 1 ? 1.15 : 1,
    }}
    transition={{ duration: 0.3 }}
    className="text-3xl"
  >
    💡
  </motion.span>

  {/* Text + Underline */}
  <div className="flex flex-col items-start">
    <span
      className={`text-lg md:text-xl transition-all duration-300 ${
        activeFeature === 1
          ? "text-white"
          : "text-slate-300"
      }`}
    >
      Have an innovative idea?
    </span>

    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: activeFeature === 1 ? 1 : 0,
        opacity: activeFeature === 1 ? 1 : 0,
      }}
      transition={{ duration: 0.35 }}
      className="mt-2 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_15px_rgba(34,211,238,1)]"
    />
  </div>
</motion.div>

{/* Neon Divider */}
<motion.div
  animate={{
    opacity: [0.3, 1, 0.3],
    scaleY: [1, 1.25, 1],
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="h-8 w-[2px] rounded-full bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
/>








{/* Item 2 */}
<motion.div
  onHoverStart={() => setActiveFeature(2)}
  onHoverEnd={() => setActiveFeature(null)}
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 2.2, delay: 0.25, repeat: Infinity }}
  className="flex items-center gap-3"
>
  {/* Emoji */}
  <motion.span
    animate={{
      scale: activeFeature === 2 ? 1.15 : 1,
    }}
    transition={{ duration: 0.3 }}
    className="text-3xl"
  >
    🚀
  </motion.span>

  {/* Text + Underline */}
  <div className="flex flex-col items-start">
    <span
      className={`text-lg md:text-xl transition-all duration-300 ${
        activeFeature === 2
          ? "text-white"
          : "text-slate-300"
      }`}
    >
      Need a modern website?
    </span>

    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: activeFeature === 2 ? 1 : 0,
        opacity: activeFeature === 2 ? 1 : 0,
      }}
      transition={{ duration: 0.35 }}
      className="mt-2 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_15px_rgba(34,211,238,1)]"
    />
  </div>
</motion.div>

{/* Neon Divider */}
<motion.div
  animate={{
    opacity: [0.3, 1, 0.3],
    scaleY: [1, 1.25, 1],
  }}
  transition={{ duration: 2, delay: 0.25, repeat: Infinity }}
  className="h-8 w-[2px] rounded-full bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400 shadow-[0_0_14px_rgba(168,85,247,0.8)]"
/>



{/* Item 3 */}
<motion.div
  onHoverStart={() => setActiveFeature(3)}
  onHoverEnd={() => setActiveFeature(null)}
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 2.2, delay: 0.5, repeat: Infinity }}
  className="flex items-center gap-3"
>
  {/* Emoji */}
  <motion.span
    animate={{
      scale: activeFeature === 3 ? 1.15 : 1,
    }}
    transition={{ duration: 0.3 }}
    className="text-3xl"
  >
    🤖
  </motion.span>

  {/* Text + Underline */}
  <div className="flex flex-col items-start">
    <span
      className={`text-lg md:text-xl transition-all duration-300 ${
        activeFeature === 3
          ? "text-white"
          : "text-slate-300"
      }`}
    >
      Looking for an AI-powered solution?
    </span>

    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: activeFeature === 3 ? 1 : 0,
        opacity: activeFeature === 3 ? 1 : 0,
      }}
      transition={{ duration: 0.35 }}
      className="mt-2 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_15px_rgba(34,211,238,1)]"
    />
  </div>
</motion.div>








</motion.div>

{/* Bottom Tagline */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.6, duration: 0.8 }}
  className="mt-12 text-center"
>
  <p className="text-2xl font-semibold md:text-3xl">
    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
      ✨ Let's turn your vision into reality.
    </span>
  </p>
</motion.div>

{/* Section Heading */}
<div className="mb-20 text-center">

  {/* Premium Neon Divider */}
  <div className="mt-10 mb-24 flex items-center justify-center">
    <div className="h-px w-28 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

    <div className="mx-5 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.35)]">
      <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]" />
    </div>

    <div className="h-px w-28 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
  </div>

  <h2 className="text-5xl font-bold tracking-[-0.03em] md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradientShift_6s_linear_infinite]">
  Get In Touch
</h2>

  {/* Description */}
  <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
  Let's discuss your next project and bring your ideas to life.
</p>

</div>










<div className="mt-20 grid gap-16 lg:grid-cols-2 items-stretch">

  {/* ================= Left Side - Contact Form ================= */}
  <div>

<div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.15)]">

{/* Top Icon */}
<div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-2xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:shadow-[0_0_16px_rgba(34,211,238,0.25)]">
  💬
</div>
      <h3 className="text-3xl font-bold text-white">
        Ask Me Anything
      </h3>

      <p className="mt-3 mb-8 text-slate-400 leading-7">
        Have a question, project idea, or collaboration in mind?
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name + Email */}
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Full Name <span className="text-cyan-400">*</span>
            </label>

            <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="John Doe"
  className="h-14 w-full rounded-2xl border border-slate-700 bg-white/5 px-5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:shadow-[0_0_14px_rgba(34,211,238,0.12)] focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_18px_rgba(34,211,238,0.2)]"
/>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Email Address <span className="text-cyan-400">*</span>
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              name="email"
value={formData.email}
onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-slate-700 bg-white/5 px-5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:shadow-[0_0_14px_rgba(34,211,238,0.12)] focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_18px_rgba(34,211,238,0.2)]"
            />
          </div>

        </div>

        {/* Subject */}
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-300">
            Subject
          </label>
<input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Project Discussion"
  className="h-14 w-full rounded-2xl border border-slate-700 bg-white/5 px-5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:shadow-[0_0_14px_rgba(34,211,238,0.12)] focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_18px_rgba(34,211,238,0.2)]"
/>
        </div>

        {/* Message */}
        <div>
          <label className="mb-3 block text-sm font-medium text-slate-300">
            Message <span className="text-cyan-400">*</span>
          </label>

        <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={7}
  placeholder="Tell me about your project..."
  className="w-full resize-none rounded-2xl border border-slate-700 bg-white/5 p-5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.07] hover:shadow-[0_0_14px_rgba(34,211,238,0.12)] focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_18px_rgba(34,211,238,0.2)]"
/>
        </div>



{/* Error Message */}
{error && (
  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400">
    {error}
  </div>
)}

{/* Success Message */}
{success && (
  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-400">
    {success}
  </div>
)}




        {/* Button */}
        <button
  type="submit"
  disabled={loading}
  className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 font-semibold text-white transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0_22px_rgba(59,130,246,0.35)] active:scale-100 disabled:cursor-not-allowed disabled:opacity-60"
>
          {loading ? "Sending..." : "Send Message"}

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

      </form>

    </div>

  </div>
  {/* ================= Right Side ================= */}
  





{/* ================= Intro ================= */}
{/* ================= Intro ================= */}

    <div className="flex flex-col gap-6">
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mb-10"
>

  {/* Badge */}
  <div className="mb-6">
    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/5 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,.12)]">
      ✨ Let's Connect
    </span>
  </div>

  {/* Heading */}
  <h2 className="text-5xl font-black leading-[1.08] tracking-tight text-white">
    Have a Project
    <br />

    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
      Let's Build It Together.
    </span>
  </h2>

  {/* Description */}
  <p className="mt-6 max-w-lg text-[17px] leading-8 text-slate-400">
    Tell me about your project and I'll get back to you within{" "}
    <span className="font-semibold text-cyan-300">
      24 hours.
    </span>
  </p>

</motion.div>
{/* ================= Contact Cards ================= */}
{/* ================= Contact Cards ================= */}
<div className="mt-2 flex flex-col gap-4">

  {/* Email */}
  
  {/* Email */}

<a
  href="mailto:YOUR_EMAIL@gmail.com?subject=Portfolio Inquiry"
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-white/[0.06] hover:shadow-[0_0_60px_rgba(34,211,238,.18)]"
>
    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/5 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/15" />

    <div className="relative flex items-center gap-4">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-500/5 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">

        <Mail className="h-5 w-5 text-cyan-400" />

      </div>

      <div className="flex flex-1 flex-col justify-center text-left">

        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
          EMAIL
        </p>

        <h4 className="mt-1 text-lg font-bold text-white">
          minahilahsan328@gmail.com
        </h4>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Click to send me an email.
        </p>

      </div>

      <motion.div
        whileHover={{ x: 6 }}
        className="shrink-0 text-lg text-cyan-400 transition-opacity duration-500 opacity-60 group-hover:opacity-100"
      >
        →
      </motion.div>

    </div>
  </a>

{/* ================= Location Card ================= */}


<a
 href="https://maps.google.com/?q=Punjab,Pakistan"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/60 hover:bg-white/[0.06] hover:shadow-[0_0_60px_rgba(34,211,238,.18)]"
>
<div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/5 blur-2xl transition-all duration-500 group-hover:bg-violet-500/20" />
    <div className="relative flex items-center gap-5">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white-400/10 bg-cyan-500/5 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">


      <MapPinned className="h-5 w-5 text-violet-400" />
      </div>

      <div className="flex flex-1 flex-col justify-center text-left">

        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
          Location
        </p>

        <h4 className="mt-1 text-lg font-bold text-white">
          Punjab, Pakistan
        </h4>

        <p className="mt-2 text-sm leading-6 text-slate-400">
        Available Worldwide • Remote Friendly
        </p>

      </div>

      <motion.div
        whileHover={{ x: 6 }}
        className="shrink-0 text-lg text-cyan-400 transition-opacity duration-500 opacity-60 group-hover:opacity-100"
      >
        →
      </motion.div>

    </div>
  </a>


{/* ================= Availability ================= */}
<div
className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-6 transition-all duration-700 hover:-translate-y-2 hover:border-violet-400/60 hover:bg-violet-500/[0.04] hover:shadow-[0_0_60px_rgba(139,92,246,.22)]"
>

  <div  className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5"/>

  <div className="relative flex items-center gap-4">

    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]">

      <Zap className="h-5 w-5 text-emerald-400" />

    </div>

    <div className="flex flex-1 flex-col justify-center text-left">

  <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
    AVAILABILITY
  </p>

  <div className="mt-2 flex items-center gap-3">

    <span className="relative flex h-3 w-3 shrink-0">

      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,.8)]"></span>

    </span>

    <h4 className="text-lg font-bold text-white">
      Open for Freelance Work
    </h4>

  </div>

  <p className="mt-2 text-sm leading-6 text-slate-400">
    Usually responds within 24 hours.
  </p>

</div>
 <motion.div
        whileHover={{ x: 6 }}
        className="shrink-0 text-lg text-cyan-400 transition-opacity duration-500 opacity-60 group-hover:opacity-100"
      >
        →
      </motion.div>

  </div>

</div>


{/* ================= Social Links ================= */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="pt-6"
>

  {/* Divider */}
  <div className="mb-6 flex items-center gap-4">

    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

    <span className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
      Follow Me
    </span>

    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

  </div>

  {/* Icons */}
  <div className="flex items-center justify-center gap-5">

    {/* GitHub */}
    <motion.a
      whileHover={{ y: -6, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      href="https://github.com/Minahil-jpg-web"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl text-slate-300 transition-all duration-500 hover:border-cyan-400/60 hover:bg-cyan-500/[0.06] hover:text-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.3)]"
    >
      <FaGithub className="text-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
    </motion.a>

    {/* LinkedIn */}
    <motion.a
      whileHover={{ y: -6, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      href="https://www.linkedin.com/in/minahil-ahsan-a044a7371/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl text-slate-300 transition-all duration-500 hover:border-blue-400/60 hover:bg-blue-500/[0.06] hover:text-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,.3)]"
    >
      <FaLinkedin className="text-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
    </motion.a>

    {/* Discord */}
    <motion.a
      whileHover={{ y: -6, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      href="https://discord.gg/YOUR_INVITE"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl text-slate-300 transition-all duration-500 hover:border-violet-400/60 hover:bg-violet-500/[0.06] hover:text-violet-400 hover:shadow-[0_0_35px_rgba(168,85,247,.3)]"
    >
      <FaDiscord className="text-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
    </motion.a>

    {/* X */}
    <motion.a
      whileHover={{ y: -6, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      href="https://x.com/YOUR_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl text-slate-300 transition-all duration-500 hover:border-white/60 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_35px_rgba(255,255,255,.22)]"
    >
      <FaXTwitter className="text-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
    </motion.a>

  </div>

  <p className="mt-6 text-center text-sm text-slate-500">
    Let's connect and create something amazing together.
  </p>

</motion.div>

</div>





</div>





</div>

























      </div>



{/* ================= Book a Discovery Call ================= */}

<section
  id="discovery-call"
  className="relative overflow-hidden py-32"
>

  {/* Background Glow */}
  <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
  <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl"
    >

      {/* Inner Glow */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Grid Layout */}
      <div className="relative z-10 grid gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-16">

        {/* LEFT SIDE */}

<div className="flex h-full flex-col justify-center">

  {/* Badge */}
  <div className="mb-6 inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">
    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
      📅 Discovery Call
    </span>
  </div>

  {/* Heading */}
  <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
    Let's Discuss
    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
      Your Next Project
    </span>
  </h2>

  {/* Description */}
  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
    Schedule a free 30-minute discovery call to discuss your project,
    timeline, goals, and technical requirements. We'll meet on Google
    Meet and explore the best solution together.
  </p>

  {/* Features */}
  <div className="mt-10 space-y-4">

    {[
      "Free 30-Minute Consultation",
      "Google Meet Video Call",
      "Project Planning & Cost Estimate",
      "Worldwide Remote Collaboration",
    ].map((item) => (
      <div key={item} className="flex items-center gap-4">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
          <span className="text-emerald-400">✓</span>
        </div>

        <span className="text-slate-300">{item}</span>

      </div>
    ))}

  </div>

</div>


        

        {/* RIGHT SIDE */}





<div className="relative">

  <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl">

    {/* Header */}
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-400">Next Available</p>
        <h3 className="mt-2 text-2xl font-bold text-white">
          Free Discovery Call
        </h3>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
        <span className="text-2xl">📅</span>
      </div>
    </div>

    {/* Meeting Info */}
    <div className="space-y-4">

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <span className="text-slate-400">Duration</span>
        <span className="font-medium text-white">30 Minutes</span>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <span className="text-slate-400">Platform</span>
        <span className="font-medium text-white">Google Meet</span>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <span className="text-slate-400">Timezone</span>
        <span className="font-medium text-white">
          Auto Detect
        </span>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <span className="text-slate-400">Availability</span>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>

          <span className="font-medium text-emerald-400">
            Available
          </span>


          
        </div>
      </div>

    </div>

{/* Meeting Includes */}
<div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

  <h4 className="mb-4 text-lg font-semibold text-white">
    What's Included
  </h4>

  <div className="space-y-3">

    {[
      "Project Requirements Discussion",
      "Technical Architecture Guidance",
      "Timeline & Budget Estimate",
      "Q&A Session",
    ].map((item) => (
      <div key={item} className="flex items-center gap-3">

        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-sm text-emerald-400">
          ✓
        </span>

        <span className="text-slate-300">
          {item}
        </span>

      </div>
    ))}

  </div>

</div>


    {/* Book Button */}
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => setIsCalendlyOpen(true)}
  className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.45)]"
>
  <span>📅</span>

  <span>Book a Discovery Call</span>

  <svg
    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-6-6 6 6-6 6"
    />
  </svg>
</motion.button>

{/* Footer Text */}
<div className="mt-6 space-y-2 text-center">

  <p className="text-sm text-slate-400">
    No spam. No commitment.
  </p>

  <p className="text-xs text-slate-500">
    Google Meet link & confirmation email will be sent instantly after booking.
  </p>

</div>
  </div>

</div>






      </div>

    </motion.div>

  </div>

</section>
















      

{/* ================= FAQ Section ================= */}

<section className="relative py-32">

<div className="mx-auto w-full max-w-[1700px] px-8">
    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto mb-8 max-w-3xl text-center"
    >

      <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
        FAQ
      </h2>

      <p className="mt-5 mx-auto max-w-3xl text-base leading-7 text-slate-400">
        Find answers to the most common questions about my services,
        development process, and how we can work together.
      </p>

    </motion.div>

    {/* FAQ Cards */}

    <div className="mx-auto mt-4 w-full max-w-[1600px] space-y-5 px-4 lg:px-8">

      {faqs.map((faq, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,.12)]"
        >

          {/* Glow */}
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

       <button
  onClick={() =>
    setOpenIndex(openIndex === index ? null : index)
  }
  className="relative flex w-full min-h-[80px] items-center justify-between px-10 text-left"
>
  <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300">
    {faq.question}
  </h3>

  <div className="flex items-center justify-center text-4xl font-light text-cyan-400 transition-all duration-500">
    {openIndex === index ? "−" : "+"}
  </div>
</button>




          <AnimatePresence>
  {openIndex === index && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden"
    >
      <div className="px-8 pb-8 lg:px-10">
  <div className="flex items-start gap-3">

    {/* Green Dot */}
    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

    {/* Answer */}
    <p className="leading-7 text-slate-400">
      {faq.answer}
    </p>

  </div>
</div>
    </motion.div>
  )}
</AnimatePresence>

        </motion.div>

      ))}

    </div>

  </div>

</section>





<AnimatePresence>
  {isCalendlyOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={() => setIsCalendlyOpen(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6"
    >
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#070B14] shadow-[0_0_25px_rgba(34,211,238,0.25),0_0_80px_rgba(34,211,238,0.15),0_0_140px_rgba(139,92,246,0.12)]"
        style={{ maxHeight: "90vh" }}
      >
        {/* Animated neon border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-violet-500/10 to-cyan-400/20 opacity-40 blur-md" />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-violet-500/20 blur-[130px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

        {/* Header */}
        <div className="relative flex shrink-0 items-start justify-between gap-4 border-b border-cyan-400/10 bg-white/[0.02] px-5 py-4 backdrop-blur-sm sm:px-7 sm:py-5">
          <div>
            <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              Free Consultation
            </span>
            <h2 className="text-xl font-semibold tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.25)] sm:text-2xl">
              Book a Discovery Call
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Pick a time that works best for you — no commitment required.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsCalendlyOpen(false)}
            aria-label="Close booking dialog"
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-200 hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-400 hover:rotate-90 hover:shadow-[0_0_15px_rgba(248,113,113,0.35)]"
          >
            <X size={18} strokeWidth={2.25} />
          </button>
        </div>

        {/* Calendly */}
        <div className="relative flex-1 overflow-y-auto px-3 py-3 sm:px-5 sm:py-4">
          <div className="overflow-hidden rounded-2xl border border-cyan-400/10 bg-white/[0.03] shadow-[inset_0_0_40px_rgba(34,211,238,0.05)]">
            <InlineWidget
              url="https://calendly.com/minahilahsan328/30min"
              styles={{
                height: "65vh",
                minHeight: "480px",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="relative shrink-0 border-t border-cyan-400/10 bg-white/[0.02] px-5 py-3 text-center backdrop-blur-sm sm:px-7">
          <button
            onClick={() => setIsCalendlyOpen(false)}
            className="text-xs font-medium text-slate-500 underline-offset-4 transition hover:text-cyan-300 hover:underline"
          >
            Not right now, maybe later
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



    </section>





  );
}

export default HeroSection;