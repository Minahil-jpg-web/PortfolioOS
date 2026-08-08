import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCss3Alt } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

import {
  
  Target,
  Database,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import {
  FaTrophy,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa6";


import {
  SiPython,
  SiFlask,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  
} from "react-icons/si";




const screenshots = [
  {
    title: "Login Screen",
    description: "Secure authentication interface for doctors and administrators.",
    image: "/assets/projects/kidney-disease/gallery/login-screen.jpg",
  },
  {
    title: "Dashboard Overview",
    description: "Real-time analytics, patient statistics and system overview.",
    image: "/assets/projects/kidney-disease/gallery/dashboard-overview.jpg",
  },
  {
    title: "Patient Analysis",
    description: "Analyze patient medical records and generate disease predictions.",
    image: "/assets/projects/kidney-disease/gallery/patient-analysis.jpg",
  },
  {
    title: "Prediction Result",
    description: "Machine learning prediction results with confidence insights.",
    image: "/assets/projects/kidney-disease/gallery/prediction-result.jpg",
  },
];

const descriptions = [
  "AI-powered clinical decision support platform designed to assist healthcare professionals in identifying chronic kidney disease at an early stage through intelligent data analysis.",

  "The system processes patient medical records, applies machine learning algorithms, and generates accurate risk predictions with a clear and user-friendly interface for faster clinical decisions.",

  "Built with Python, Flask, Scikit-learn, Pandas, and NumPy, the platform focuses on data preprocessing, model training, prediction accuracy, and healthcare visualization to improve decision-making.",
];





const technologies = [
  {
    name: "Python",
    icon: SiPython,
    color: "text-yellow-400",
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "text-white",
  },
  {
    name: "Scikit-Learn",
    icon: SiScikitlearn,
    color: "text-orange-400",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "text-cyan-400",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "text-blue-400",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-violet-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-300",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "text-orange-500",
  },
 {
  name: "CSS3",
  icon: FaCss3Alt,
  color: "text-sky-400",
},

];

const highlights = [
  {
    icon: FaTrophy,
    title: "Outcome",
    description:
      "Achieved 92% accuracy in validation tests using an optimized Random Forest model.",
  },
  {
    icon: FaCode,
    title: "Tech Stack",
    description:
      "Python, Scikit-learn, Pandas, Matplotlib and Data Normalization techniques.",
  },
  {
    icon: FaLaptopCode,
    title: "My Role",
    description:
      "Managed data preprocessing, Random Forest selection, feature engineering and performance tuning.",
  },
];



const projectStats = [
  {
    value: "92%",
    label: "Accuracy",
  },
  {
    value: "12K+",
    label: "Dataset",
  },
  {
    value: "Random Forest",
    label: "ML Model",
  },
  {
    value: "3 Months",
    label: "Duration",
  },
];


const keyFeatures = [
  "Patient Analysis",
  "Disease Prediction",
  "Interactive Dashboard",
  "Accuracy Report",
  "Data Cleaning",
  "Data Visualization",
];

const workflowSteps = [
  {
    step: "01",
    title: "Upload Patient Data",
    description: "Patient clinical data is uploaded securely into the system.",
  },
  {
    step: "02",
    title: "ML Processing",
    description: "The trained machine learning model analyses the patient data.",
  },
  {
    step: "03",
    title: "Disease Prediction",
    description: "The model predicts the likelihood of kidney disease.",
  },
  {
    step: "04",
    title: "Report Generation",
    description: "A detailed prediction report is generated for clinicians.",
  },
];

const results = [
  {
    value: "92%",
    label: "Prediction Accuracy",
  },
  {
    value: "< 30 Sec",
    label: "Response Time",
  },
  {
    value: "Random Forest",
    label: "Best ML Model",
  },
  {
    value: "Production Ready",
    label: "Project Status",
  },
];


const challenges = [
  {
    title: "Data Preprocessing",
    description:
      "Handled missing values, removed duplicates, and normalized patient data before model training.",
  },
  {
    title: "Model Selection",
    description:
      "Compared multiple machine learning algorithms and selected Random Forest for its high accuracy.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimized prediction speed and reduced response time for a smoother user experience.",
  },
];


const exploreItems = [
  {
    title: "Timeline",
    content:
      "The project was completed over three months, including data collection, preprocessing, model training, testing, and deployment.",
  },
  {
    title: "Architecture",
    content:
      "Built using Flask backend, Machine Learning model, Bootstrap frontend, and Pandas/NumPy for data processing.",
  },
  {
    title: "Future Improvements",
    content:
      "Future versions will include real-time patient monitoring, cloud deployment, authentication, and deep learning integration.",
  },
];

const studentProject = {
  badge: "🗄️ Database Project",

  title: "MySQL Student Management System",

  subtitle:
    "Streamlining academic administrative workflows.",

  description: [
    "A high-performance database application designed to manage complex historical student records, course enrollments, and grading paradigms for a university department.",

    "Designed using relational database principles, the system ensures secure data management, efficient SQL operations, and scalable academic administration."
  ],

  outcome:
    "Successfully deployed as a prototypical student management engine.",

  techStack: [
    "MySQL",
    "SQL",
    "C++",
    "Relational Database Design"
  ],

  features: [
    "Secure multi-role access",
    "Automated transcript generation",
    "Robust integrity constraints"
  ]
};
const studentScreenshots = [
  {
    image: "/assets/projects/student-management/student-1.jfif",
    title: "Admin Dashboard",
    description:
      "Overview of students, departments, courses, and system statistics.",
  },
  {
    image: "/assets/projects/student-management/student-2.jfif",
    title: "Student Records",
    description:
      "Manage student information, enrollment, and academic records.",
  },
  {
    image: "/assets/projects/student-management/student-3.jfif",
    title: "Student Profile",
    description:
      "View detailed student profile, attendance, and academic performance.",
  },
  {
    image: "/assets/projects/student-management/student-4.jfif",
    title: "Transcript Report",
    description:
      "Generate complete academic transcripts and printable reports.",
  },
];




const dashboardProject = {
  badge: "🎨 Personal Productivity Project",

  title: "Personal Growth & Analytics Dashboard",

  subtitle:
    "A bespoke tool for productivity and progress monitoring.",

  description: [
    "An interactive web-based dashboard designed to transform study habits, coding progress, and productivity metrics into meaningful visual insights.",

    "The platform enables users to monitor goals, manage daily tasks, analyse performance trends, and stay motivated through modern data visualization."
  ],
outcome:
  "Actively used for personal task management, study planning, and productivity tracking. The dashboard streamlines daily workflows with interactive analytics, progress monitoring, and goal tracking, enabling better time management and continuous personal growth.",
    

  techStack: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Chart.js",
    "Flexbox",
    "CSS Grid"
  ],

  features: [
    "Interactive Charts",
    "Task Scheduling",
    "Goal Tracking",
    "Dark Mode",
    "Responsive Dashboard",
    "Performance Analytics"
  ]
};

const dashboardScreenshots = [
  {
    image: "/assets/projects/personal-growth-dashboard/dashboard-home.webp.png",
    title: "Dashboard Overview",
    description:
      "Overview of productivity metrics, study hours, goals and daily performance.",
  },
  {
    image: "/assets/projects/personal-growth-dashboard/2_analytics.png",
    title: "Analytics",
    description:
      "Interactive charts showing productivity trends and study statistics.",
  },
  {
    image: "/assets/projects/personal-growth-dashboard/3_tasks.png",
    title: "Task Manager",
    description:
      "Organize tasks, priorities and daily schedules with a clean interface.",
  },
  {
    image: "/assets/projects/personal-growth-dashboard/4_goals.png",
    title: "Goals",
    description:
      "Track long-term goals, milestones and personal achievements.",
  },
];

const neuralProject = {
  badge: "🧠 Artificial Intelligence Project",

  title: "Neural Path Visualizer",

  subtitle:
    "Demystifying Artificial Intelligence through Interactive Visualization.",

  description: [
    "A creative prototype that visually demonstrates the internal mechanics of a neural network by animating neuron connections, weight adjustments, and backpropagation in real time.",

    "Designed as an educational visualization tool, the project transforms complex machine learning concepts into interactive animations, making neural network learning more intuitive and engaging."
  ],

  outcome:
    "Successfully developed a functional prototype used for educational purposes in peer-learning sessions. The project simplifies neural network concepts through interactive visualizations, helping learners better understand model training and decision-making processes.",

  techStack: [
    "Python",
    "NumPy",
    "Manim (Math Animation Engine)"
  ],

  features: [
    "Neural Network Visualization",
    "Forward Propagation",
    "Backpropagation Animation",
    "Weight Updates",
    "Activation Functions",
    "Educational Interface"
  ],

  insights:
    "Deepened my conceptual understanding of propagation layers, activation functions, gradient flow, and neural network training while gaining practical experience in AI visualization."
};
const neuralScreenshots = [
  {
    image: "/assets/projects/neural-path-visualizer/neural-1.png",
    title: "Neural Network Overview",
    description:
      "Interactive visualization of a multi-layer neural network showing connections between input, hidden, and output layers.",
  },
  {
    image: "/assets/projects/neural-path-visualizer/neural-2.jpg",
    title: "Forward Propagation",
    description:
      "Visual demonstration of how input data travels through the network and produces predictions.",
  },
  {
    image: "/assets/projects/neural-path-visualizer/neural-3.png",
    title: "Backpropagation",
    description:
      "Animated representation of error propagation and weight updates during model training.",
  },
  {
    image: "/assets/projects/neural-path-visualizer/weights-visualization.webp",
    title: "Weight Visualization",
    description:
      "Heatmap-based visualization showing how neural network weights evolve throughout the learning process.",
  },
];
const neuralStats = [
  {
    value: "3+",
    label: "Core Concepts",
  },
  {
    value: "Real-Time",
    label: "Visualization",
  },
  {
    value: "100%",
    label: "Educational",
  },
  {
    value: "AI",
    label: "Learning Project",
  },
];

const neuralConcepts = [
  {
    title: "Forward Propagation",
    description:
      "Visualizes how input data flows through each neural network layer to generate predictions.",
  },
  {
    title: "Backpropagation",
    description:
      "Demonstrates how prediction errors are propagated backward to improve model performance.",
  },
  {
    title: "Weight Updates",
    description:
      "Shows how connection weights are adjusted during training to minimize prediction errors.",
  },
  {
    title: "Activation Functions",
    description:
      "Illustrates the role of activation functions in introducing non-linearity into the network.",
  },
  {
    title: "Neural Connections",
    description:
      "Displays how neurons interact across input, hidden, and output layers during learning.",
  },
  {
    title: "Learning Process",
    description:
      "Provides a complete visualization of the neural network training cycle from input to prediction.",
  },
];

const neuralWorkflow = [
  {
    step: "01",
    title: "Input Layer",
    description:
      "The visualization begins by receiving input data and passing it to the first layer of the neural network.",
  },
  {
    step: "02",
    title: "Forward Propagation",
    description:
      "Data flows through hidden layers where weighted calculations and activation functions generate predictions.",
  },
  {
    step: "03",
    title: "Backpropagation",
    description:
      "Prediction errors are propagated backwards to calculate gradients and optimize the model.",
  },
  {
    step: "04",
    title: "Weight Update",
    description:
      "Connection weights are updated iteratively until the model achieves improved prediction accuracy.",
  },
];



const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Minahil-jpg-web",
    color: "text-white",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minahil-ahsan-a044a7371/.",
    color: "text-sky-400",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: "mailto:minahilahsan328@gmail.com",
    color: "text-pink-400",
  },
];

const ProjectDetailsSection = () => {
  const navigate = useNavigate();
  const [currentDescription, setCurrentDescription] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(null);
const [studentCurrentImage, setStudentCurrentImage] = useState(0);
const [dashboardCurrentImage, setDashboardCurrentImage] = useState(0);
const [neuralCurrentImage, setNeuralCurrentImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription((prev) => (prev + 1) % descriptions.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  const interval = setInterval(() => {
    setNeuralCurrentImage((prev) =>
      prev === neuralScreenshots.length - 1 ? 0 : prev + 1
    );
  }, 4500);

  return () => clearInterval(interval);
}, []);


useEffect(() => {
  const interval = setInterval(() => {
    setDashboardCurrentImage((prev) =>
      prev === dashboardScreenshots.length - 1 ? 0 : prev + 1
    );
  }, 4500);

  return () => clearInterval(interval);
}, []);




  useEffect(() => {
  const interval = setInterval(() => {
    setStudentCurrentImage((prev) =>
      prev === studentScreenshots.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (

    
    <section className="relative bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Featured Project
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 max-w-5xl text-5xl font-bold leading-tight text-white md:text-6xl"
        >
          Kidney Disease Prediction System
        </motion.h2>

        {/* Animated Description */}
        <div className="mt-8 max-w-3xl min-h-[110px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-lg leading-8 text-slate-400"
            >
              {descriptions[currentDescription]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 flex flex-wrap gap-4"

        >
          <button className="flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105">
            <ExternalLink size={18} />
            Live Demo
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400">
            <ArrowRight size={18} />
            View Case Study
          </button>
        </motion.div>
{/* Project Screenshot Slider */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-12"
>
  <motion.div
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    transition={{ duration: 0.4 }}
    className="group relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-slate-900/90 to-[#050816] p-6 shadow-[0_25px_80px_rgba(8,145,178,0.18)]"
  >


  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)] opacity-60 blur-3xl transition-all duration-700 group-hover:opacity-100" />


    <AnimatePresence mode="wait">
      <motion.img
        key={currentImage}
        src={screenshots[currentImage].image}
        alt={screenshots[currentImage].title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-full rounded-2xl object-contain transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </AnimatePresence>
  </motion.div>

  {/* Dots */}
  <div className="mt-6 flex justify-center gap-3">
    {screenshots.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`h-2.5 rounded-full transition-all duration-500 ${
          currentImage === index
            ? "w-10 bg-cyan-400"
            : "w-2.5 bg-white/30 hover:bg-white/60"
        }`}
      />
    ))}
  </div>

  {/* Screenshot Info */}
  <AnimatePresence mode="wait">
    <motion.div
      key={currentImage}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="mt-8 text-center"
    >
      <h3 className="text-3xl font-bold text-white">
        {screenshots[currentImage].title}
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-400">
        {screenshots[currentImage].description}
      </p>
    </motion.div>
  </AnimatePresence>
</motion.div>


<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>


{/* Technologies */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-28"
>
  <h2 className="text-4xl font-bold text-white">
  Technology & Development
</h2>
<div className="relative mt-5 h-1 w-44 overflow-hidden rounded-full bg-white/10">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500" />
</div>
 <div className="mt-5 max-w-3xl">
  <p className="text-lg leading-8 text-slate-400">
    This project combines machine learning, data preprocessing and healthcare
    analytics to provide accurate kidney disease prediction while maintaining a
    simple and intuitive user experience.
  </p>
</div>

<div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {highlights.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
  <item.icon className="text-3xl text-cyan-400" />
</div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {item.title}
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>


<div className="relative mt-12 overflow-hidden py-6">
 <motion.div
  animate={{
  x: isPaused ? undefined : ["0%", "-50%"],
}}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: "linear",
  }}
  onHoverStart={() => setIsPaused(true)}
  onHoverEnd={() => setIsPaused(false)}
  className="flex gap-6 w-max"
>
    {[...technologies, ...technologies].map((tech, index) => (
      <motion.div
        key={`${tech.name}-${index}`}
        whileHover={{
          y: -6,
          scale: 1.05,
        }}
        className="flex min-w-[140px] flex-col items-center rounded-2xl border border-cyan-400/20 bg-white/5 px-6 py-4 text-white backdrop-blur-xl hover:border-cyan-400/50 hover:bg-cyan-400/10"
      >
        <motion.div
          whileHover={{
            rotate: 360,
            scale: 1.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          <tech.icon className={`text-3xl ${tech.color}`} />
        </motion.div>

        <span className="mt-3">{tech.name}</span>
      </motion.div>
    ))}
  </motion.div>
</div>
</motion.section>



<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>



{/* ================= Project Statistics ================= */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    Project Statistics
  </h2>

  <div className="mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
>
  {projectStats.map((stat, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
          {stat.value}
        </h3>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
          {stat.label}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>

{/* ================= Key Features ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    Key Features
  </h2>

  <div className="mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {keyFeatures.map((feature, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-2xl">
          ✅
        </div>

        <h3 className="text-lg font-medium text-white transition-colors group-hover:text-cyan-300">
          {feature}
        </h3>
      </motion.div>
    ))}
  </div>
</motion.section>







<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>



{/* ================= How it Works ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  {/* Heading */}
  <h2 className="text-4xl font-bold text-white">
    How it Works
  </h2>

  <div className="mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

  <div className="mt-12 flex flex-col gap-8">
    {workflowSteps.map((item, index) => (
      <div key={index}>
        <motion.div
          whileHover={{ y: -5 }}
          className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
        >
          <div className="flex items-start gap-6">
            {/* Step Number */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-xl font-bold text-white">
              {item.step}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        {index !== workflowSteps.length - 1 && (
          <div className="flex justify-center py-5">
            <div className="text-4xl text-cyan-400">↓</div>
          </div>
        )}
      </div>
    ))}
  </div>
</motion.section>





<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>






{/* ================= Challenges ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    Challenges
  </h2>

  <div className="mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

  <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
    {challenges.map((challenge, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 text-2xl">
          ⚠️
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
          {challenge.title}
        </h3>

        <p className="mt-3 leading-relaxed text-gray-400">
          {challenge.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>




<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>




{/* ================= Results ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    Results
  </h2>

  <div className="mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {results.map((result, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
      >
        <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {result.value}
        </h3>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
          {result.label}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>





<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>



{/* ================= Explore More ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    Explore More
  </h2>

  <div className="mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

  <div className="mt-10 space-y-5">
    {exploreItems.map((item, index) => (
      <motion.div
        key={index}
        layout
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <button
          onClick={() =>
            setOpenItem(openItem === index ? null : index)
          }
          className="flex w-full items-center justify-between px-6 py-5 text-left"
        >
          <h3 className="text-xl font-semibold text-white">
            {item.title}
          </h3>

          <span className="text-2xl text-cyan-400">
            {openItem === index ? "−" : "+"}
          </span>
        </button>

        {openItem === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 px-6 py-5 text-gray-400 leading-relaxed"
          >
            {item.content}
          </motion.div>
        )}
      </motion.div>
    ))}
  </div>
</motion.section>






<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>








{/* ================= Student Management Hero ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-32"
>
  {/* Badge */}
  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">
    <span className="h-2 w-2 rounded-full bg-cyan-400" />
    <span className="text-sm font-medium text-cyan-300">
      {studentProject.badge}
    </span>
  </div>

  {/* Title */}
  <h2 className="mt-6 text-5xl font-bold text-white">
    {studentProject.title}
  </h2>

<div className="mt-5 h-[3px] w-72 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
  {/* Subtitle */}
  <p className="mt-4 text-xl text-cyan-300">
    {studentProject.subtitle}
  </p>

  {/* Description */}
  <div className="mt-8 max-w-4xl space-y-6">
    {studentProject.description.map((text, index) => (
      <p
        key={index}
        className="text-lg leading-8 text-gray-400"
      >
        {text}
      </p>
    ))}
  </div>
</motion.section>


{/* ================= Student Project Highlights ================= */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {/* ================= Outcome ================= */}
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl p-[1px] transition-all duration-500 hover:-translate-y-2"
  >

    {/* Animated Gradient Border */}
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    {/* Neon Glow */}
    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
    </div>

    <div className="relative z-10 h-full rounded-[15px] bg-[#0b1220]/95 p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
  <Target className="h-7 w-7 text-cyan-300" />
</div>

      <h3 className="mt-5 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
        Outcome
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {studentProject.outcome}
      </p>
    </div>
  </motion.div>

  {/* ================= Tech Stack ================= */}
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
  >
    {/* Neon Glow */}
    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
    </div>

    <div className="relative z-10">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
  <Database className="h-7 w-7 text-cyan-300" />
</div>

      <h3 className="mt-5 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
        Tech Stack
      </h3>

      <ul className="mt-4 space-y-2">
        {studentProject.techStack.map((tech, index) => (
          <li
            key={index}
            className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200"
          >
            • {tech}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>

  {/* ================= Key Features ================= */}
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
  >
    {/* Neon Glow */}
    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
    </div>

    <div className="relative z-10">
     <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
  <ShieldCheck className="h-7 w-7 text-cyan-300" />
</div>
      <h3 className="mt-5 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
        Key Features
      </h3>

      <ul className="mt-4 space-y-2">
        {studentProject.features.map((feature, index) => (
          <li
            key={index}
            className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200"
          >
            • {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
</motion.div>
{/* ================= Student Screenshot ================= */}

{/* ================= Student Screenshot ================= */}

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    group
    mt-16
    overflow-hidden
    rounded-3xl
    border
    border-cyan-400/20
    bg-white/5
    p-4
    backdrop-blur-xl
    shadow-[0_20px_70px_rgba(34,211,238,0.12)]
  "
>
  {/* Screenshot */}
  <div className="relative overflow-hidden rounded-2xl bg-[#050816]">
    <img
      src={studentScreenshots[studentCurrentImage].image}
      alt={studentScreenshots[studentCurrentImage].title}
      className="
        h-[600px]
        w-full
        object-contain
        transition-transform
        duration-700
        group-hover:scale-[1.02]
      "
    />

    {/* Neon Overlay */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/40 via-transparent to-cyan-400/5" />
  </div>

  {/* Screenshot Information */}
  <div className="mt-6 text-center">
    <h3 className="text-2xl font-bold text-white">
      {studentScreenshots[studentCurrentImage].title}
    </h3>

    <p className="mx-auto mt-3 max-w-2xl text-slate-400">
      {studentScreenshots[studentCurrentImage].description}
    </p>
  </div>

  {/* Slider Dots */}
  <div className="mt-6 flex justify-center gap-3">
    {studentScreenshots.map((_, index) => (
      <button
        key={index}
        onClick={() => setStudentCurrentImage(index)}
        aria-label={`Show screenshot ${index + 1}`}
        className={`h-2.5 rounded-full transition-all duration-500 ${
          studentCurrentImage === index
            ? "w-10 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            : "w-2.5 bg-white/30 hover:bg-white/60"
        }`}
      />
    ))}
  </div>
</motion.div>







<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>



{/* ================= Personal Growth Dashboard Hero ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-32"
>
  {/* Badge */}
  <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
    <span className="h-2 w-2 rounded-full bg-violet-400" />
    <span className="text-sm font-medium text-violet-300">
      {dashboardProject.badge}
    </span>
  </div>

  {/* Title */}
  <h2 className="mt-6 text-5xl font-bold text-white">
    {dashboardProject.title}
  </h2>

  {/* Neon Line */}
  <div className="mt-5 h-[3px] w-80 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

  {/* Subtitle */}
  <p className="mt-5 text-xl text-violet-300">
    {dashboardProject.subtitle}
  </p>

  {/* Description */}
  <div className="mt-8 max-w-4xl space-y-6">
    {dashboardProject.description.map((text, index) => (
      <p
        key={index}
        className="text-lg leading-8 text-slate-400"
      >
        {text}
      </p>
    ))}
  </div>
</motion.section>




{/* ================= Dashboard Highlights ================= */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {/* Outcome */}
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="group rounded-2xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10">
      <Target className="h-7 w-7 text-violet-300" />
    </div>

    <h3 className="mt-5 text-2xl font-semibold text-white">
      Outcome
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      {dashboardProject.outcome}
    </p>
  </motion.div>

  {/* Tech Stack */}
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="group rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
      <Database className="h-7 w-7 text-cyan-300" />
    </div>

    <h3 className="mt-5 text-2xl font-semibold text-white">
      Tech Stack
    </h3>

    <ul className="mt-4 space-y-2">
      {dashboardProject.techStack.map((tech, index) => (
        <li key={index} className="text-gray-400">
          • {tech}
        </li>
      ))}
    </ul>
  </motion.div>

  {/* Features */}
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="group rounded-2xl border border-emerald-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
  >
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
      <ShieldCheck className="h-7 w-7 text-emerald-300" />
    </div>

    <h3 className="mt-5 text-2xl font-semibold text-white">
      Key Features
    </h3>

    <ul className="mt-4 space-y-2">
      {dashboardProject.features.map((feature, index) => (
        <li key={index} className="text-gray-400">
          • {feature}
        </li>
      ))}
    </ul>
  </motion.div>
</motion.div>



<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-16"
>
  <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-white/5 p-6 backdrop-blur-xl">

    <img
      src={dashboardScreenshots[dashboardCurrentImage].image}
      alt={dashboardScreenshots[dashboardCurrentImage].title}
      className="h-[600px] w-full rounded-2xl object-contain transition-all duration-700"
    />

    <div className="mt-8 text-center">
      <h3 className="text-3xl font-bold text-white">
        {dashboardScreenshots[dashboardCurrentImage].title}
      </h3>

      <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-slate-400">
        {dashboardScreenshots[dashboardCurrentImage].description}
      </p>
    </div>

    <div className="mt-8 flex justify-center gap-3">
      {dashboardScreenshots.map((_, index) => (
        <button
          key={index}
          onClick={() => setDashboardCurrentImage(index)}
          className={`h-3 rounded-full transition-all ${
            dashboardCurrentImage === index
              ? "w-10 bg-violet-400"
              : "w-3 bg-white/30"
          }`}
        />
      ))}
    </div>

  </div>
</motion.div>





<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>



{/* ================= Neural Path Visualizer Hero ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-32"
>
  {/* Badge */}
  <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2">
    <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
    <span className="text-sm font-medium text-fuchsia-300">
      {neuralProject.badge}
    </span>
  </div>

  {/* Title */}
  <h2 className="mt-6 text-5xl font-bold text-white">
    {neuralProject.title}
  </h2>

  {/* Neon Underline */}
  <div className="mt-5 h-[3px] w-72 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_20px_rgba(217,70,239,0.8)]" />

  {/* Subtitle */}
  <p className="mt-5 text-xl text-fuchsia-300">
    {neuralProject.subtitle}
  </p>

  {/* Description */}
  <div className="mt-8 max-w-4xl space-y-6">
    {neuralProject.description.map((text, index) => (
      <p
        key={index}
        className="text-lg leading-8 text-slate-400"
      >
        {text}
      </p>
    ))}
  </div>
</motion.section>






{/* ================= Neural Info Cards ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-20"
>
  <div className="grid gap-8 lg:grid-cols-3">

    {/* Outcome Card */}
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-fuchsia-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-fuchsia-400/50 hover:shadow-[0_20px_60px_rgba(217,70,239,0.18)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-3xl">
        🎯
      </div>

      <h3 className="mt-6 text-3xl font-bold text-white">
        Outcome
      </h3>

      <p className="mt-5 text-slate-400 leading-8">
        {neuralProject.outcome}
      </p>
    </motion.div>

    {/* Tech Stack Card */}
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl">
        💻
      </div>

      <h3 className="mt-6 text-3xl font-bold text-white">
        Tech Stack
      </h3>

      <ul className="mt-5 space-y-3 text-slate-400">
        {neuralProject.techStack.map((tech, index) => (
          <li key={index}>• {tech}</li>
        ))}
      </ul>
    </motion.div>

    {/* Key Insights Card */}
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-emerald-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-emerald-400/50 hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl">
        🧠
      </div>

      <h3 className="mt-6 text-3xl font-bold text-white">
        Key Insights
      </h3>

      <p className="mt-5 text-slate-400 leading-8">
        {neuralProject.insights}
      </p>
    </motion.div>

  </div>
</motion.section>



{/* ================= Neural Screenshot Slider ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-24"
>
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-4xl font-bold text-white">
        Project Gallery
      </h2>

      <div className="mt-4 h-1 w-56 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />
    </div>

    <span className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 text-sm text-fuchsia-300">
      {neuralCurrentImage + 1} / {neuralScreenshots.length}
    </span>
  </div>

  <motion.div
    key={neuralCurrentImage}
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
  >
    <img
      src={neuralScreenshots[neuralCurrentImage].image}
      alt={neuralScreenshots[neuralCurrentImage].title}
      className="h-[650px] w-full object-cover"
    />

    <div className="border-t border-white/10 p-8 text-center">
  <h3 className="text-3xl font-bold text-white">
    {neuralScreenshots[neuralCurrentImage].title}
  </h3>

  <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-400">
    {neuralScreenshots[neuralCurrentImage].description}
  </p>
</div>
  </motion.div>

  {/* Navigation Dots */}
  <div className="mt-8 flex justify-center gap-3">
    {neuralScreenshots.map((_, index) => (
      <button
        key={index}
        onClick={() => setNeuralCurrentImage(index)}
        className={`h-3 rounded-full transition-all duration-300 ${
          neuralCurrentImage === index
            ? "w-10 bg-fuchsia-400"
            : "w-3 bg-white/30 hover:bg-white/60"
        }`}
      />
    ))}
  </div>
</motion.section>


{/* ================= Neural Project Statistics ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    Project Statistics
  </h2>

  <div className="mt-4 h-1 w-48 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {neuralStats.map((stat, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-fuchsia-400/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]"
      >
        <h3 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {stat.value}
        </h3>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
          {stat.label}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>




{/* ================= Core AI Concepts ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    Core AI Concepts
  </h2>

  <div className="mt-4 h-1 w-48 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />

  <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
    This prototype transforms complex artificial intelligence concepts into
    interactive visual experiences, making neural network learning easier to
    understand for students and developers.
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {neuralConcepts.map((concept, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="group rounded-3xl border border-fuchsia-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-fuchsia-400/60 hover:shadow-[0_20px_60px_rgba(217,70,239,0.18)]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-2xl">
          🧠
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          {concept.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {concept.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>


{/* ================= How It Works ================= */}

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-24"
>
  <h2 className="text-4xl font-bold text-white">
    How It Works
  </h2>

  <div className="mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />

  <div className="mt-12 flex flex-col gap-8">
    {neuralWorkflow.map((item, index) => (
      <div key={index}>
        <motion.div
          whileHover={{ y: -5 }}
          className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
        >
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-xl font-bold text-white">
              {item.step}
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white group-hover:text-fuchsia-300 transition-colors">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>

        {index !== neuralWorkflow.length - 1 && (
          <div className="flex justify-center py-5">
            <div className="text-4xl text-fuchsia-400">↓</div>
          </div>
        )}
      </div>
    ))}
  </div>
</motion.section>






<div className="my-24 flex items-center">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

  <div className="mx-6 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
</div>


<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative mt-36 overflow-hidden"
>
  {/* Floating Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
  </div>

  <div className="relative z-10 flex flex-col items-center text-center">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl text-5xl font-bold text-white md:text-6xl"
    >
      Let's Build Something Amazing
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mt-8 max-w-3xl text-xl leading-9 text-slate-400"
    >
      Whether you're looking to collaborate on Artificial Intelligence,
      Full Stack Development, or innovative software solutions,
      I'd love to discuss your next project.
    </motion.p>

    {/* Neon Beam */}
    <div className="relative mt-14 w-full max-w-3xl">
      <div className="h-[2px] rounded-full bg-white/10 overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "250%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </div>

      {/* Icons */}
      <div className="absolute left-0 right-0 -top-6 flex items-center justify-center gap-20">

        <motion.a
          href="https://github.com/Minahil-jpg-web"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.25,
            rotate: -10,
            y: -8,
          }}
          className="rounded-full bg-[#0b1220] p-4 text-white shadow-lg transition"
        >
          <FaGithub className="text-3xl hover:text-cyan-400" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/minahil-ahsan-a044a7371/."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.25,
            rotate: 10,
            y: -8,
          }}
          className="rounded-full bg-[#0b1220] p-4 text-white shadow-lg transition"
        >
          <FaLinkedin className="text-3xl hover:text-sky-400" />
        </motion.a>

        <motion.a
          href="mailto:minahilahsan328@gmail.com"
          whileHover={{
            scale: 1.25,
            y: -8,
          }}
          className="rounded-full bg-[#0b1220] p-4 text-white shadow-lg transition"
        >
          <MdEmail className="text-3xl hover:text-pink-400" />
        </motion.a>

      </div>
    </div>

    {/* Contact Button */}
  <motion.button
  onClick={() => navigate("/contact")}
  whileHover={{
    scale: 1.05,
    y: -4,
  }}
  whileTap={{
    scale: 0.95,
  }}
  className="mt-20 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-10 py-4 text-lg font-semibold text-white shadow-[0_20px_40px_rgba(34,211,238,0.35)]"
>
  Contact Me →
</motion.button>

  </div>
</motion.section>



      </div>
    </section>
  );
};

export default ProjectDetailsSection;