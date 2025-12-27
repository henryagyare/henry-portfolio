// ————————————————————————
// Site Metadata
// ————————————————————————
export const site = {
  name: "Henry Asante",
  roleLine: "EECS Student | Full‑Stack Development, Hardware Engineering, Embedded Systems",
  tagline: "Building intelligent systems for the real world.",
  location: "United States",
  email: "henryagyare0@gmail.com",
  links: {
    github: "https://github.com/henryagyare",
    linkedin: "https://www.linkedin.com/in/henry-asante",
    resume: "/HenryAgyareAsante_Resume_Gen_28.pdf", // Place PDF in /public
  },
};

// ————————————————————————
// About Section
// ————————————————————————
export const about = {
  heading: "I’m a passionate EECS student focused on building software for real‑world applications.",
  body:
    "I like taking ambiguous problems and turning them into clean, scalable solutions. I’ve built ETL pipelines, deployed dashboards, and shipped full‑stack apps. I care about performance, reliability, and user experience.",
  highlights: [
    "Built ETL pipelines and dashboards from multi‑source datasets",
    "Enjoy building practical tools",
    "Comfortable with cloud deployments and container workflows",
  ],
};

// ————————————————————————
// Skills
// ————————————————————————
export const skills = {
  languages: ["Python", "Java", "C/C++", "TypeScript", "Go", "Kotlin", "Rust", "SQL", "R"],
  frameworks: ["React", "Next.js", "Node.js", "FastAPI", "Spring Boot", "Flask", ".NET", "KMM"],
  tools: [
    "AWS (EC2, S3, Lambda)", "Azure", "Docker", "Kubernetes", "Git", "Linux", "CI/CD",
    "TensorFlow", "PyTorch", "Spark", "Pandas", "NumPy", "Scikit-learn", "GenAI", "LLMs",
    "GNS3", "Wireshark", "FPGA (Vivado)", "SystemVerilog", "Arduino", "PCB Design"
  ],
};

// ————————————————————————
// Projects
// ————————————————————————
export const projects = [
  {
    title: "Spinal Lower Back Pain Classifier",
    blurb: "Full-stack Streamlit app with LLM-powered diagnostic analysis using Groq’s Llama 3.3 API.",
    stack: ["TensorFlow", "PyDICOM", "Groq", "LLM", "Streamlit"],
    href: "https://spine-lbp-ai.streamlit.app/",
    badge: "AI / Full‑Stack",
  },
  {
    title: "BrillaAI – STEM Question Synthesis",
    blurb: "Fine-tuned LLaMA-3 8B with LoRA to generate 15,600+ STEM QA pairs using Unsloth & 4-bit quantization.",
    stack: ["LLaMA", "LoRA", "Unsloth", "SQL", "Python"],
    href: "https://github.com/henryagyare/BrillaAi-Questions-Synthesis",
    badge: "AI / Full‑Stack",
  },
  {
    title: "FPGA-Based High Throughput DES",
    blurb: "16-stage pipelined DES on Nexys A7 with 6.4 Gbps throughput and UART serial communication.",
    stack: ["SystemVerilog", "FPGA", "Vivado", "RTL"],
    href: `${site.links.github}/Pipelined-DES-Algorithm-with-Serial-Communication`,
    badge: "Hardware",
  },
  {
    title: "Orbit-sh: A Modular Unix Shell",
    blurb: "Unix shell in C with pipeline support, background execution, and zombie process prevention.",
    stack: ["C", "Unix", "POSIX", "Linux Systems"],
    href: `${site.links.github}/orbit-sh`,
    badge: "Systems",
  },
  {
    title: "Scalable IPv4/IPv6 Networks",
    blurb: "VLAN-segmented networks with BGP/OSPF using GNS3 and Cisco routers for resilient routing.",
    stack: ["GNS3", "BGP", "OSPF", "Cisco", "Networking"],
    href: "https://github.com/henryagyare/Network-Simulation-in-GNS3.git",
    badge: "Networking / Cloud",
  },
  {
    title: "High-Altitude Sensor Payload (TL James Lab)",
    blurb: "Arduino-based system capturing temp/pressure at >100,000 ft with 95% accuracy and optimized C firmware.",
    stack: ["Arduino", "C", "I²C/SPI", "Embedded C", "Sensors"],
    href: "https://github.com/henryagyare/laaces-space-balloon",
    badge: "Embedded / IoT",
  },
];

// ————————————————————————
// Work Experience
// ————————————————————————
export const experience = [
  {
    company: "Dell Technologies",
    role: "Software Engineering Intern",
    dates: "May 2025 – August 2025",
    location: "Round Rock, Texas",
    bullets: [
      "Boosted hardware defect regression testing speed by 400% through an AI-driven test case recommendation system.",
      "Reduced defect-to-testcase mapping errors by 10% using NLP to analyze 1,200+ Jira tickets and 5,000+ test cases.",
      "Achieved ~96% recommendation accuracy using precision/recall metrics.",
      "Containerized a React + Flask microservice with Docker for seamless CI/CD deployment."
    ]
  },
  {
    company: "TL James Engineering Lab — Grambling State University",
    role: "Research / Lab Assistant",
    dates: "September 2024 – May 2025",
    location: "Grambling, Louisiana",
    bullets: [
      "Built an Arduino-based sensor payload capturing temperatures & pressures at >100,000 ft with 95% accuracy.",
      "Optimized low-level C firmware for I²C/SPI peripherals, reducing sampling latency by 20%.",
      "Resolved 30+ software/hardware issues using Python, logic analyzers, and protocol debuggers.",
      "Collaborated in a 10-member team across schematic design, PCB layout, calibration, and deployment."
    ]
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
      "Provided Tier 1–2 support for Wi-Fi, OS reimaging, and diagnostics."
    ]
  }
];