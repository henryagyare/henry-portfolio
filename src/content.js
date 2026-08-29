// ————————————————————————
// Site Metadata
// ————————————————————————
export const site = {
  name: "Henry Asante",
  roleLine: "CS Student @ GSU · Software Engineering · AI/ML",
  tagline: "Building intelligent systems for the real world.",
  location: "Grambling, Louisiana",
  email: "coml.asantehenry@gmail.com",
  phone: "214.685.8733",
  links: {
    github: "https://github.com/henryagyare",
    linkedin: "https://www.linkedin.com/in/henry-asante",
    resume: "/resume",           // Internal route
    resumePdf: "/Henry_Asante_Resume.pdf", // Actual PDF in /public
  },
};

// ————————————————————————
// Education
// ————————————————————————
export const education = {
  institution: "Grambling State University (GSU)",
  location: "Grambling, Louisiana",
  degree: "BSc. Computer Science",
  gpa: "4.0 / 4.0",
  graduation: "May 2028",
  coursework: [
    "Deep Learning",
    "Operating Systems",
    "Artificial Intelligence",
    "Data Structures",
    "Object-Oriented Design",
  ],
};

// ————————————————————————
// About Section
// ————————————————————————
export const about = {
  heading: "I'm a CS student at GSU focused on building software that bridges AI, systems, and real-world impact.",
  body:
    "I like taking ambiguous problems and turning them into clean, scalable solutions. I've shipped AI-driven tooling at Dell, built full-stack apps, engineered hardware sensor payloads, and developed automation pipelines. I care deeply about performance, reliability, and user experience.",
  highlights: [
    "4.0 GPA · Computer Science @ Grambling State University",
    "2× SWE Intern (Dell Technologies, Allstate Insurance)",
    "AI/ML research — goal misgeneralization, MRI classifiers",
    "Comfortable with cloud, containers & CI/CD workflows",
    "Full-stack: React, Node, Flask, REST APIs",
    "Systems-level: C, Unix shells, FPGA, embedded firmware",
  ],
};

// ————————————————————————
// Skills
// ————————————————————————
export const skills = {
  // Resume: "Languages"
  languages: [
    "Java", "JavaScript", "Python", "C/C++",
    "React", "Node", "Flask", "HTML", "SQL", "REST APIs",
  ],
  // Resume: "AI & Dev Tools"
  aiTools: [
    "GitHub Copilot", "Cursor", "Claude Code",
    "Prompt Engineering", "LLM Code Review", "Agentic Dev",
  ],
  // Resume: "Infra & Dev Tools" + "AI/ML & Data"
  tools: [
    "MongoDB", "Docker", "Kubernetes", "AWS", "Git", "CI/CD", "Jenkins",
    "GitHub Actions", "Linux", "Spark", "TensorFlow", "PyTorch",
    "Scikit-learn", "RAG", "Pandas",
  ],
};

// ————————————————————————
// Work Experience  (newest first)
// ————————————————————————
export const experience = [
  {
    company: "Allstate Insurance Company",
    role: "Software Engineer Intern",
    dates: "May 2026 – August 2026",
    location: "Northbrook, Illinois",
    bullets: [
      "Automated regression testing for auto insurance user onboarding workflows using Playwright & JavaScript.",
      "Improved automation reliability by writing reusable end-to-end tests & resolving flaky pipeline failures.",
      "Accelerated continuous testing by integrating GitHub Actions & Jenkins into CI/CD workflows.",
    ],
  },
  {
    company: "Dell Technologies",
    role: "Software Engineer Intern",
    dates: "May 2025 – August 2025",
    location: "Round Rock, Texas",
    bullets: [
      "Built an AI testcase recommendation platform with LLMs, embeddings, & semantic similarity for regression analysis.",
      "Reduced testcase selection time significantly by mapping 5,000+ test cases in qTest to 1,200+ Jira defects.",
      "Delivered an interactive engineering dashboard using React & Flask to visualize AI-powered regression recommendations.",
      "Improved recommendation quality by 10% via embedding optimization, reaching 96% accuracy.",
    ],
  },
  {
    company: "AmaliTech NSP Training",
    role: "Software Developer Trainee",
    dates: "May 2024 – August 2024",
    location: "Remote",
    bullets: [
      "Delivered a scalable learning platform using Spring Boot REST APIs serving 15,000+ educational Q&A pairs.",
      "Reduced backend latency by ~40% through SQL optimization, Redis caching, & multithreading.",
      "Improved software reliability by implementing JUnit & Mockito tests with 95%+ code coverage.",
    ],
  },
  {
    company: "KNUST Engineering Lab",
    role: "Full Stack Engineering Intern",
    dates: "August 2023 – November 2023",
    location: "Kumasi, Ghana",
    bullets: [
      "Developed a cross-platform engineering simulation platform using Vue.js, Python, TypeScript, & Electron.",
      "Enabled engineering simulations via RESTful backend services connecting user interfaces with computation pipelines.",
      "Enhanced engineering support by integrating a RAG-powered assistant for circuit troubleshooting & design guidance.",
    ],
  },
  // Kept from original portfolio (not on 1-page resume but relevant)
  {
    company: "TL James Engineering Lab — Grambling State University",
    role: "Research / Lab Assistant",
    dates: "September 2024 – May 2025",
    location: "Grambling, Louisiana",
    bullets: [
      "Built an Arduino-based sensor payload capturing temperatures & pressures at >100,000 ft with 95% accuracy.",
      "Optimized low-level C firmware for I²C/SPI peripherals, reducing sampling latency by 20%.",
      "Resolved 30+ software/hardware issues using Python, logic analyzers, and protocol debuggers.",
      "Collaborated in a 10-member team across schematic design, PCB layout, calibration, and deployment.",
    ],
  },
  {
    company: "Agisam Academy",
    role: "Junior IT Specialist",
    dates: "January 2023 – July 2024",
    location: "Remote",
    bullets: [
      "Built automation suites using pandas, openpyxl, and SQL to streamline student records and analytics.",
      "Reduced data processing time by ~120% and deployed 5 tools still in daily use.",
      "Improved org infrastructure uptime by 60% via router/switch configuration and workstation maintenance.",
      "Provided Tier 1–2 support for Wi-Fi, OS reimaging, and diagnostics.",
    ],
  },
];

// ————————————————————————
// Projects  (resume projects first, then additional portfolio items)
// ————————————————————————
export const projects = [
  // ── Resume projects ───────────────────────────────────────────────────────
  {
    title: "IntelliJobs",
    blurb:
      "Full-stack web & mobile jobs platform with a multi-source discovery pipeline aggregating listings from 4 ATS platforms with resume-aware, personalized ranking.",
    stack: ["React", "Flutter", "FastAPI", "PostgreSQL", "JWT"],
    badge: "Full-Stack",
    bullets: [
      "Built a full-stack web & mobile jobs platform using React, Flutter, and containerized FastAPI services with PostgreSQL.",
      "Designed core backend workflows for resume ingestion, personalized recommendations, & apps tracking with JWT auth.",
      "Implemented a multi-source discovery pipeline aggregating listings from 4 ATS platforms with resume-aware ranking.",
      "Engineered a multi-service architecture using API-first practices, schema migrations, and 1,500+ automated tests.",
    ],
  },
  {
    title: "Orbit-sh: A Modular Unix Shell with Systems Integration",
    blurb:
      "Unix shell in C supporting command parsing, foreground/background execution, and built-in commands. Implements pipeline support using pipe() and dup2() for inter-process communication.",
    stack: ["C", "Unix", "Linux Systems Programming"],
    href: "https://github.com/henryagyare/orbit-sh",
    badge: "Systems",
    bullets: [
      "Built a Unix shell in C supporting command parsing, foreground/background execution, & built-in commands.",
      "Implemented pipeline support (|) using pipe() and dup2() for inter-process communication between child processes.",
      "Prevented zombie processes using sigaction (SIGCHLD) w/non-blocking waitpid(), ensuring child process reaping.",
    ],
  },
  {
    title: "Goal Misgeneralization in a Model-Based Agent",
    blurb:
      "Engineered a physics-based simulation pipeline in a 4D continuous state space to evaluate autonomous agent robustness. Integrated a neural dynamics model with a CEM planner for 200-step trajectory rollout and receding-horizon MPC.",
    stack: ["PyTorch", "Python", "Simulation", "MPC", "CEM Planning"],
    href: "https://github.com/henryagyare/goal-misgeneralization-toy-agent",
    badge: "AI / Research",
    bullets: [
      "Engineered a physics-based simulation pipeline in a 4D continuous state space to evaluate autonomous agent robustness.",
      "Integrated a neural dynamics model with a CEM planner for 200-step trajectory rollout and receding-horizon MPC.",
      "Built a reproducible evaluation framework across 4 environment shifts with up to 2× changes in mass and friction.",
      "Analyzed simulation telemetry, showing low next-state MSE (~10⁻³) despite failure from proxy reward misalignment.",
    ],
  },
  // ── Additional portfolio items ─────────────────────────────────────────────
  {
    title: "Spinal Lower Back Pain Classifier",
    blurb:
      "Full-stack Streamlit app with LLM-powered diagnostic analysis using Groq's Llama 3.3 API. Built and iteratively improved a CNN-based MRI classifier using MobileNet-V2, achieving ~72% training accuracy.",
    stack: ["TensorFlow/Keras", "MobileNet-V2", "PyDICOM", "Groq Llama 3.3", "Python"],
    href: "https://spine-lbp-ai.streamlit.app/",
    badge: "AI / Full-Stack",
    bullets: [
      "Deployed a full-stack Streamlit app with LLM-powered diagnostic analysis using Groq's Llama 3.3 API.",
      "Built and iteratively improved a CNN-based MRI classifier using MobileNet-V2, achieving ~72% training accuracy.",
      "Visualized accuracy & loss curves to diagnose overfitting & guide future model enhancements via fine-tuning.",
    ],
  },
  {
    title: "BrillaAI – STEM Question Synthesis",
    blurb:
      "Fine-tuned LLaMA-3 8B with LoRA to generate 15,600+ STEM QA pairs using Unsloth & 4-bit quantization.",
    stack: ["LLaMA", "LoRA", "Unsloth", "SQL", "Python"],
    href: "https://github.com/henryagyare/BrillaAi-Questions-Synthesis",
    badge: "AI / Full-Stack",
    bullets: [
      "Fine-tuned LLaMA-3 8B with LoRA adapters to generate diverse STEM Q&A pairs using 4-bit quantization.",
      "Curated and cleaned a dataset of 15,600+ question-answer pairs via automated SQL pipelines.",
      "Leveraged Unsloth for efficient fine-tuning, reducing VRAM usage and training time significantly.",
    ],
  },
  {
    title: "FPGA-Based High Throughput DES",
    blurb:
      "16-stage pipelined DES on Nexys A7 with 6.4 Gbps throughput and UART serial communication.",
    stack: ["SystemVerilog", "FPGA", "Vivado", "RTL"],
    href: "https://github.com/henryagyare/Pipelined-DES-Algorithm-with-Serial-Communication",
    badge: "Hardware",
    bullets: [
      "Designed a 16-stage fully pipelined DES encryption engine in SystemVerilog targeting Nexys A7 FPGA.",
      "Achieved 6.4 Gbps throughput through deep pipelining and resource-optimized RTL synthesis.",
      "Implemented UART serial communication for host-to-FPGA data transfer and encrypted output streaming.",
    ],
  },
  {
    title: "Scalable IPv4/IPv6 Networks",
    blurb:
      "VLAN-segmented networks with BGP/OSPF using GNS3 and Cisco routers for resilient routing.",
    stack: ["GNS3", "BGP", "OSPF", "Cisco", "Networking"],
    href: "https://github.com/henryagyare/Network-Simulation-in-GNS3.git",
    badge: "Networking / Cloud",
    bullets: [
      "Designed and simulated a multi-site enterprise network topology with VLAN segmentation in GNS3.",
      "Configured BGP and OSPF routing protocols across Cisco routers for dynamic, resilient routing.",
      "Implemented IPv4/IPv6 dual-stack addressing and inter-VLAN routing for scalable network design.",
    ],
  },
  {
    title: "High-Altitude Sensor Payload (TL James Lab)",
    blurb:
      "Arduino-based system capturing temp/pressure at >100,000 ft with 95% accuracy and optimized C firmware.",
    stack: ["Arduino", "C", "I²C/SPI", "Embedded C", "Sensors"],
    href: "https://github.com/henryagyare/laaces-space-balloon",
    badge: "Embedded / IoT",
    bullets: [
      "Designed and built an Arduino-based sensor payload for high-altitude balloon launch capturing telemetry data.",
      "Optimized I²C/SPI firmware in C for real-time temp/pressure sampling at altitudes exceeding 100,000 ft.",
      "Achieved 95% sensor accuracy through calibration routines and redundant sampling strategies.",
    ],
  },
];