import { Network, ShieldCheck, Cpu, Code2, BrainCircuit } from "lucide-react";

const HERO_NODES = [
  { id: "reseaux", label: "Réseaux", angle: -90, icon: Network },
  { id: "securite", label: "Sécurité", angle: -18, icon: ShieldCheck },
  { id: "iot", label: "IoT & Embarqué", angle: 54, icon: Cpu },
  { id: "data", label: "Data & IA", angle: 126, icon: BrainCircuit },
  { id: "langages", label: "Dev Full-Stack", angle: 198, icon: Code2 },
];

export default HERO_NODES;
