const PROJECTS = [
  {
    title: "Déploiement d'une architecture Oracle RAC haute disponibilité",
    period: "Juillet 2026",
    description:
      "Cluster Oracle RAC 19c à 2 nœuds sous Oracle Linux, stockage partagé iSCSI/Oracle ASM (OCR, DATA, FRA) et Grid Infrastructure (SCAN Listener, VIP, Voting Disk, Cache Fusion). Tests de bascule de nœud sans perte de transaction et comparatif des architectures Oracle.",
    tags: ["Oracle RAC 19c", "Oracle Linux", "iSCSI", "ASM", "Grid Infrastructure", "Haute disponibilité"],
    image: "/projects/oracle-rac.png",
    imageAlt: "Architecture Oracle RAC haute disponibilité",
    links: { rapport: "https://drive.google.com/file/d/1boOpuUN1QC9pWAH6D7Ituc5AWfA-XCBi/view?usp=drive_link" },
  },
  {
    title: "Environnement informatique complexe sous Linux",
    period: "Novembre 2025",
    description:
      "Infrastructure réseau sécurisée sous Ubuntu Server intégrant six services : DNS (Bind9), PKI (AC auto-signée SSL/TLS), Apache/PHP en HTTPS avec synchronisation rsync/systemd, HAProxy, messagerie Postfix/Dovecot, FTP sécurisé (vsftpd/FTPS) et partage Samba avec DFS unifié.",
    tags: ["Bind9", "PKI", "HAProxy", "Postfix/Dovecot", "Samba/DFS"],
    image: "/projects/environnement-linux.png",
    imageAlt: "Infrastructure Linux multi-services",
    links: { rapport: "https://drive.google.com/file/d/1BXT6x6wFHUzbtgbsllhgv_Uazo0Ixmvf/view?usp=drive_link" },
  },
  {
    title: "Administration Windows Server & Services Réseau",
    period: "Mai 2024",
    description:
      "Déploiement d'un environnement Windows Server 2019 virtualisé sous VMware Workstation avec configuration d'Active Directory, DNS, DHCP, gestion des utilisateurs et des accès, sauvegarde et quotas, routage et accès distant RRAS, audit DNS/DHCP, monitoring avec alertes de performance. Mise en place d'IIS pour l'hébergement Web et FTP.",
    tags: ["Windows Server 2019", "Active Directory", "DNS/DHCP", "RRAS", "IIS", "VMware", "Audit"],
    image: "/projects/windows-server.png",
    imageAlt: "Infrastructure Windows Server 2019 virtualisée",
    links: { rapport: "https://drive.google.com/file/d/1Sv8MRqV8G_gi76YlvT1B1KQKau1KqD47/view?usp=drive_link" },
  },
  {
    title: "Tunnels MPLS L3VPN Inter-AS (Option A)",
    period: "Mai 2026",
    description:
      "Interconnexion de deux backbones opérateurs distincts pour deux clients institutionnels : IGP hétérogènes (OSPF, IS-IS), sessions MP-BGP VPNv4, VRF multiples (RD/RT) et interconnexion Inter-AS via eBGP entre ASBR. Validation par tests de connectivité et analyse Wireshark de la pile de labels MPLS.",
    tags: ["MPLS", "MP-BGP", "VRF", "Inter-AS", "Huawei eNSP"],
    image: "/projects/haut-debit.png",
    imageAlt: "Tunnels MPLS L3VPN Inter-AS",
    links: { rapport: "https://drive.google.com/file/d/1XqVldF6NXnGeZPcr11YF9neSChD8_tBb/view?usp=drive_link" },
  },
  {
    title: "CampusPulse — Gestion d'emploi du temps universitaire",
    period: "Juin 2026",
    description:
      "Backend Django 5.2/DRF, interface d'administration React 18 + Vite, application mobile Flutter/Dart en Clean Architecture. Stratégie offline-first (cache Hive), JWT avec stockage chiffré natif, notifications locales et filtrage par profil. Déploiement Render (Docker) et Vercel.",
    tags: ["Django", "DRF", "React", "Flutter", "JWT", "Offline-first"],
    image: "/projects/campuspulse.png",
    imageAlt: "Application CampusPulse multi-plateforme",
    links: { rapport: "https://drive.google.com/file/d/1lehvy3EUzMjF9deLpgAz3M4IWaZLYx_A/view?usp=drive_link", github: "https://github.com/sldDev07/EXAMEN-DEV-MOBILE.git" },
  },
  {
    title: "MapTalibé — Géolocalisation anti-déperdition des Talibés",
    period: "Projet de Memoire en Licence · Avril 2025 - juillet 2025",
    description:
      "Système embarqué (ESP32, GPS NEO-6M, GSM/GPRS SIM800L) transmettant la position des talibés vers une plateforme Django avec cartographie temps réel (Leaflet.js, Mapbox) et géorepérage. Alertes SMS (API Twilio) et email en cas de sortie de zone, authentification par rôles.",
    tags: ["ESP32", "GPS", "Django", "Leaflet.js", "Twilio", "Géorepérage"],
    image: "/projects/maptalibe.png",
    imageAlt: "Géolocalisation MapTalibé avec carte temps réel",
    links: { rapport: "https://drive.google.com/file/d/1tJDyHzv2ouUpgXEhFXvPAHckNIdsUDy2/view?usp=drive_link", github: "https://github.com/sldDev07/mapTalibe.git" },
  },
  {
    title: "Sécurisation d'une architecture réseau LAN/WAN/DMZ",
    period: "Fevrier 2025",
    description:
      "Architecture à trois zones avec pfSense (filtrage par zone), Snort en sonde IDS, HTTP vers HTTPS, FTP sécurisé, proxy Squid/SquidGuard, accès distant OpenVPN et SSH par clé. Simulations d'attaques (Nmap, hping3, ARP spoofing, Ettercap/Metasploit, SET, OWASP ZAP) et validation via Wireshark/Snort.",
    tags: ["pfSense", "Snort", "OpenVPN", "IDS", "Pentest"],
    image: "/projects/securite.png",
    imageAlt: "Sécurisation réseau LAN WAN DMZ",
    links: { rapport: "https://drive.google.com/file/d/1dMOzp-Ixh0LVteHwqTUucTuXkVc0OaDx/view?usp=drive_link" },
  },
  {
    title: "Le Problème des 8-Reines — Algorithme & Complexité",
    period: "Février 2026",
    description:
      "Plateforme web interactive dédiée au problème des N-Reines : résolution par méthode des permutations et algorithme de backtracking avec élagage, simulations 3D animées du placement des reines, solveur de labyrinthe 3D et analyse comparative des performances des deux approches.",
    tags: ["JavaScript", "Three.js", "Backtracking", "Python", "Algorithmique"],
    image: "/projects/8-reines.jpg",
    imageAlt: "Simulation 3D du problème des 8 reines",
    links: { demo: "https://probleme-8-reines.netlify.app", github: "https://github.com/sldDev07/projet_8_reine.git" },
  },
];

export default PROJECTS;
