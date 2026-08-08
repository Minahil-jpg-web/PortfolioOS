import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CodeLine {
  indent: number;
  text: string;
  color: string;
}

interface FileTab {
  id: string;
  label: string;
  lines: CodeLine[];
}

const PY = "#67e8f9";
const KW = "#c084fc";
const STR = "#a3e635";
const FN = "#93c5fd";
const CMT = "#64748b";

const FILES: FileTab[] = [
  {
    id: "python",
    label: "data_analysis.py",
    lines: [
      { indent: 0, text: "import pandas as pd", color: KW },
      { indent: 0, text: "", color: PY },
      { indent: 0, text: "# Load dataset", color: CMT },
      { indent: 0, text: "df = pd.read_csv('kidney_disease_data.csv')", color: PY },
      { indent: 0, text: "", color: PY },
      { indent: 0, text: "# Handling missing values", color: CMT },
      { indent: 0, text: "df.fillna(df.mean(), inplace=True)", color: PY },
      { indent: 0, text: "", color: PY },
      { indent: 0, text: "# Normalizing data", color: CMT },
      { indent: 0, text: "from sklearn.preprocessing import StandardScaler", color: KW },
      { indent: 0, text: "scaler = StandardScaler()", color: PY },
      { indent: 0, text: "df_scaled = scaler.fit_transform(df)", color: PY },
    ],
  },
  {
    id: "cpp",
    label: "db_connect.cpp",
    lines: [
      { indent: 0, text: "#include <mysql_driver.h>", color: CMT },
      { indent: 0, text: "#include <mysql_connection.h>", color: CMT },
      { indent: 0, text: "", color: PY },
      { indent: 0, text: "void connectDB() {", color: FN },
      { indent: 1, text: "sql::mysql::MySQL_Driver *driver;", color: PY },
      { indent: 1, text: "sql::Connection *con;", color: PY },
      { indent: 1, text: "", color: PY },
      { indent: 1, text: "driver = sql::mysql::get_mysql_driver_instance();", color: PY },
      { indent: 1, text: 'con = driver->connect("tcp://127.0.0.1:3306",', color: PY },
      { indent: 2, text: '"minahil", "secure_pass");', color: STR },
      { indent: 0, text: "}", color: FN },
    ],
  },
];

const STATUS_LINES = [
  { label: "frontend", value: "ready" },
  { label: "backend", value: "ready" },
  { label: "ai_ml", value: "learning" },
  { label: "internship", value: "open" },
];

function TypedCode({ file, onDone }: { file: FileTab; onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setVisibleLines(0);
    setCharCount(0);
  }, [file]);

  useEffect(() => {
    if (visibleLines >= file.lines.length) {
      const t = setTimeout(onDone, 2200);
      return () => clearTimeout(t);
    }
    const currentLine = file.lines[visibleLines].text;

    if (charCount < currentLine.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 16);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((l) => l + 1);
        setCharCount(0);
      }, 70);
      return () => clearTimeout(t);
    }
  }, [charCount, visibleLines, file, onDone]);

  return (
    <div className="font-mono text-[12.5px] leading-[1.85] min-h-[220px]">
      {file.lines.map((line, i) => {
        const isCurrent = i === visibleLines;
        const isDone = i < visibleLines;
        if (!isDone && !isCurrent) return null;
        const shown = isDone ? line.text : line.text.slice(0, charCount);

        return (
          <div key={i} className="flex">
            <span className="w-7 select-none text-white/20 text-right pr-3">{i + 1}</span>
            <span style={{ paddingLeft: line.indent * 16 }}>
              <span style={{ color: line.color }}>{shown}</span>
              {isCurrent && (
                <motion.span
                  className="inline-block w-[7px] h-[14px] ml-[1px] align-middle"
                  style={{ backgroundColor: "#67e8f9" }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function StatusPanel() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= STATUS_LINES.length) return;
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 900 + visibleCount * 500);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div className="font-mono text-[12px] leading-[2.1]">
      <div className="text-white/40 mb-1.5">
        <span className="text-emerald-400">$</span> status --check
      </div>
      {STATUS_LINES.slice(0, visibleCount).map((s) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              backgroundColor: s.value === "learning" ? "#facc15" : "#34d399",
              boxShadow: `0 0 6px ${s.value === "learning" ? "#facc15" : "#34d399"}`,
            }}
          />
          <span className="text-white/50">{s.label}</span>
          <span className="text-white/20">·</span>
          <span style={{ color: s.value === "learning" ? "#facc15" : "#34d399" }}>{s.value}</span>
        </motion.div>
      ))}
    </div>
  );
}

function WindowChrome({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 border-b border-white/[0.06]">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex gap-4 text-[12px] font-mono">
        {FILES.map((f, i) => (
          <span
            key={f.id}
            className={`pb-[10px] -mb-[13px] transition-colors duration-300 ${
              i === activeIndex
                ? "text-white/85 border-b-2 border-cyan-400"
                : "text-white/25"
            }`}
          >
            {f.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.15]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(103,232,249,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.4) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 75%)",
      }}
    />
  );
}

function AmbientGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      <div
        className="absolute -top-10 -left-10 w-64 h-64 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 70%)", filter: "blur(30px)" }}
      />
      <div
        className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)", filter: "blur(30px)" }}
      />
    </div>
  );
}

const REFERENCE_WIDTH = 520;

export default function HeroStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [fileIndex, setFileIndex] = useState(0);

  const tiltY = useTransform(mouseX, [-1, 1], [-5, 5]);
  const tiltX = useTransform(mouseY, [-1, 1], [4, -4]);
  const springTiltX = useSpring(tiltX, { stiffness: 50, damping: 18, mass: 0.7 });
  const springTiltY = useSpring(tiltY, { stiffness: 50, damping: 18, mass: 0.7 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleFileDone = () => {
    setFileIndex((i) => (i + 1) % FILES.length);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: 1400 }}
    >
      <AmbientGlow />

      <motion.div
        style={{
          width: REFERENCE_WIDTH,
          maxWidth: "92%",
          rotateX: springTiltX,
          rotateY: springTiltY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-xl overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(20,24,38,0.92) 0%, rgba(12,15,26,0.96) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 30px 70px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <GridBackground />
          <div className="relative">
            <WindowChrome activeIndex={fileIndex} />
            <div className="px-5 py-5">
              <TypedCode file={FILES[fileIndex]} onDone={handleFileDone} />
            </div>
            <div className="border-t border-white/[0.06] px-5 py-4" style={{ background: "rgba(0,0,0,0.2)" }}>
              <StatusPanel />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}