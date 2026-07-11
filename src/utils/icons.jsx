import React from "react";
import {
  SiPython, SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiFlask, SiSpring,
  SiTensorflow, SiPytorch, SiDocker, SiKubernetes,
  SiLinux, SiGit, SiArduino, SiRust, SiGoogle, SiPostgresql, SiRedis,
  SiTailwindcss, SiVercel,
  SiNodedotjs, SiDotnet,
} from "react-icons/si";

import {
  FiGithub, FiLinkedin, FiMail, FiCpu, FiZap, FiGlobe, FiDatabase,
  FiHexagon, FiExternalLink,
  FiBarChart2, FiLayers, FiRepeat, FiMonitor,
} from "react-icons/fi";

import { FaBots, FaAws, FaMicrochip, FaNetworkWired, FaJava, FaCloud } from "react-icons/fa6";
import { GiMicrochip } from "react-icons/gi";

export {
  SiPython, SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiFlask, SiSpring,
  SiTensorflow, SiPytorch, SiDocker, SiKubernetes,
  SiLinux, SiGit, SiArduino, SiRust, SiGoogle, SiPostgresql, SiRedis,
  SiTailwindcss, SiVercel, SiNodedotjs, SiDotnet,
  FiGithub, FiLinkedin, FiMail, FiCpu, FiZap, FiGlobe, FiDatabase,
  FiHexagon, FiExternalLink, FiBarChart2, FiLayers, FiRepeat, FiMonitor,
  FaBots, FaAws, FaMicrochip, FaNetworkWired, FaJava, FaCloud,
  GiMicrochip,
};

const iconMap = {
  // Languages
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Java: FaJava,
  C: FiCpu,
  "C++": FiCpu,
  "C/C++": FiCpu,
  Rust: SiRust,
  Go: SiGoogle,
  Kotlin: FiCpu,
  SQL: FiDatabase,
  R: FiBarChart2,
  HTML: FiGlobe,
  "REST APIs": FiGlobe,
  Node: SiNodedotjs,

  // Frameworks & Libs
  React: SiReact,
  "Next.js": SiNextdotjs,
  Next: SiNextdotjs,
  "Node.js": SiNodedotjs,
  FastAPI: FiZap,
  Flask: SiFlask,
  Spring: SiSpring,
  SpringBoot: SiSpring,
  "Spring Boot": SiSpring,
  ".NET": SiDotnet,
  KMM: FiLayers,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  Tailwind: SiTailwindcss,

  // AI/ML
  TensorFlow: SiTensorflow,
  "TensorFlow/Keras": SiTensorflow,
  PyTorch: SiPytorch,
  LLM: FaBots,
  "LLMs": FaBots,
  Groq: FiGlobe,
  "Groq Llama 3.3": FiGlobe,
  GenAI: FaBots,
  Unsloth: FiZap,
  LoRA: FaBots,
  LLaMA: FaBots,
  MobileNet: SiTensorflow,
  "MobileNet-V2": SiTensorflow,
  PyDICOM: SiPython,
  Pandas: SiPython,
  Spark: FiZap,
  MPC: FiCpu,
  "CEM Planning": FiZap,
  Simulation: FiMonitor,
  Matplotlib: SiPython,
  "Model-Based RL": FaBots,
  CEM: FiZap,
  Planning: FiZap,
  Streamlit: SiPython,

  // AI Dev Tools
  "GitHub Copilot": FiGithub,
  Cursor: FiZap,
  "Claude Code": FaBots,
  "Prompt Engineering": FaBots,
  "LLM Code Review": FaBots,
  "Agentic Dev": FaBots,

  // Embedded / Hardware
  Arduino: SiArduino,
  FPGA: GiMicrochip,
  SystemVerilog: FaMicrochip,
  Vivado: FaMicrochip,
  I2C: FiCpu,
  "I²C/SPI": FiCpu,
  SPI: FiCpu,
  "Embedded C": FiCpu,
  "Linux Systems Programming": SiLinux,
  Unix: SiLinux,
  POSIX: SiLinux,
  "Linux Systems": SiLinux,
  "UNIX": SiLinux,

  // DevOps & Cloud
  Docker: SiDocker,
  AWS: FaAws,
  Azure: FaCloud,
  Kubernetes: SiKubernetes,
  Linux: SiLinux,
  Git: SiGit,
  CI: FiRepeat,
  CD: FiRepeat,
  "CI/CD": FiRepeat,
  Vercel: SiVercel,
  GNS3: FaNetworkWired,
  Wireshark: FiMonitor,
  MongoDB: FiDatabase,

  // Networking
  BGP: FaNetworkWired,
  OSPF: FaNetworkWired,
  Cisco: FaNetworkWired,
  Networking: FaNetworkWired,
  "Networking / Cloud": FaNetworkWired,

  // Misc
  Sensors: FiCpu,
  PCB: GiMicrochip,
  RTL: GiMicrochip,
};

export function getIcon(tech, className = "h-3.5 w-3.5 flex-shrink-0") {
  const Icon = iconMap[tech] || FiHexagon;
  return <Icon className={className} />;
}
