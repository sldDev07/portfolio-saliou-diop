import {
  Code2,
  Database,
  Terminal,
  Network,
  ShieldCheck,
  Cpu,
  BrainCircuit,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    id: "langages",
    label: "Langages & Frameworks",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "Pascal", "HTML/CSS", "PHP", "Django", "DRF", "React", "Flutter/Dart", "Leaflet.js", "Bootstrap"],
  },
  {
    id: "bdd",
    label: "Bases de données",
    icon: Database,
    items: ["MySQL", "SQLite", "Oracle Database (RAC, ASM)", "PostgreSQL"],
  },
  {
    id: "systemes",
    label: "Systèmes",
    icon: Terminal,
    items: ["Linux (Kali, Ubuntu Server, Oracle Linux)", "Windows Server", "Active Directory"],
  },
  {
    id: "reseaux",
    label: "Réseaux",
    icon: Network,
    items: ["LAN/WAN", "VLAN", "TCP/IP", "DNS", "DHCP", "Câblage réseau", "MPLS", "LDP", "MP-BGP", "VRF", "OSPF", "IS-IS", "EIGRP", "RIP", "Bind9", "PKI/TLS-SSL", "HAProxy", "Postfix/Dovecot", "vsftpd", "Samba/DFS"],
  },
  {
    id: "securite",
    label: "Sécurité",
    icon: ShieldCheck,
    items: ["pfSense", "Snort", "DMZ", "SSH", "OpenVPN", "Pare-feu"],
  },
  {
    id: "outils",
    label: "Outils",
    icon: Terminal,
    items: ["Git", "Wireshark", "VMware", "VS Code", "Arduino", "VirtualBox", "Packet Tracer", "GNS3", "Huawei eNSP", "Docker", "Render", "Vercel", "GitHub", "API Twilio"],
  },
  {
    id: "iot",
    label: "IoT",
    icon: Cpu,
    items: ["Conception de systèmes IoT connectés à des applications web", "ESP32", "GPS NEO-6M", "GSM/GPRS SIM800L"],
  },
  {
    id: "data",
    label: "Data & Machine Learning",
    icon: BrainCircuit,
    items: ["Machine learning", "Traitement et analyse de données"],
  },
];

export default SKILL_CATEGORIES;
