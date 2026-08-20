const PROJECTS = [
  {
    title: "Déploiement d'une architecture Oracle RAC haute disponibilité",
    period: "Projet académique",
    description:
      "Cluster Oracle RAC 19c à 2 nœuds sous Oracle Linux, stockage partagé iSCSI/Oracle ASM (OCR, DATA, FRA) et Grid Infrastructure (SCAN Listener, VIP, Voting Disk, Cache Fusion). Tests de bascule de nœud sans perte de transaction et comparatif des architectures Oracle.",
    tags: ["Oracle RAC 19c", "ASM", "Grid Infrastructure", "Haute disponibilité"],
    links: { rapport: "#" },
  },
  {
    title: "Environnement informatique complexe sous Linux",
    period: "Projet académique",
    description:
      "Infrastructure réseau sécurisée sous Ubuntu Server intégrant six services : DNS (Bind9), PKI (AC auto-signée SSL/TLS), Apache/PHP en HTTPS avec synchronisation rsync/systemd, HAProxy, messagerie Postfix/Dovecot, FTP sécurisé (vsftpd/FTPS) et partage Samba avec DFS unifié.",
    tags: ["Bind9", "PKI", "HAProxy", "Postfix/Dovecot", "Samba/DFS"],
    links: { rapport: "#" },
  },
  {
    title: "Tunnels MPLS L3VPN Inter-AS (Option A)",
    period: "Simulation Huawei eNSP",
    description:
      "Interconnexion de deux backbones opérateurs distincts pour deux clients institutionnels : IGP hétérogènes (OSPF, IS-IS), sessions MP-BGP VPNv4, VRF multiples (RD/RT) et interconnexion Inter-AS via eBGP entre ASBR. Validation par tests de connectivité et analyse Wireshark de la pile de labels MPLS.",
    tags: ["MPLS", "MP-BGP", "VRF", "Inter-AS", "Huawei eNSP"],
    links: { rapport: "#" },
  },
  {
    title: "CampusPulse — Gestion d'emploi du temps universitaire",
    period: "Full-stack · 3 tiers",
    description:
      "Backend Django 5.2/DRF, interface d'administration React 18 + Vite, application mobile Flutter/Dart en Clean Architecture. Stratégie offline-first (cache Hive), JWT avec stockage chiffré natif, notifications locales et filtrage par profil. Déploiement Render (Docker) et Vercel.",
    tags: ["Django", "DRF", "React", "Flutter", "JWT", "Offline-first"],
    links: { github: "#" },
  },
  {
    title: "MapTalibé — Géolocalisation anti-déperdition des daaras",
    period: "Mémoire de Licence Pro",
    description:
      "Système embarqué (ESP32, GPS NEO-6M, GSM/GPRS SIM800L) transmettant la position des talibés vers une plateforme Django avec cartographie temps réel (Leaflet.js, Mapbox) et géorepérage. Alertes SMS (API Twilio) et email en cas de sortie de zone, authentification par rôles.",
    tags: ["ESP32", "GPS", "Django", "Leaflet.js", "Twilio", "Géorepérage"],
    links: { rapport: "#", github: "#" },
  },
  {
    title: "Sécurisation d'une architecture réseau LAN/WAN/DMZ",
    period: "Projet sécurité",
    description:
      "Architecture à trois zones avec pfSense (filtrage par zone), Snort en sonde IDS, HTTP vers HTTPS, FTP sécurisé, proxy Squid/SquidGuard, accès distant OpenVPN et SSH par clé. Simulations d'attaques (Nmap, hping3, ARP spoofing, Ettercap/Metasploit, SET, OWASP ZAP) et validation via Wireshark/Snort.",
    tags: ["pfSense", "Snort", "OpenVPN", "IDS", "Pentest"],
    links: { rapport: "#" },
  },
];

export default PROJECTS;
