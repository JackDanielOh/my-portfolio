export const en = {
  // Site Metadata
  metadata: {
    title: "Jiseong Oh - Builder & Product Lead Portfolio",
    description:
      "Builder & Product Lead at Metaba | Architecting 2nd-Gen Large Action Models (LAM) for Legacy Enterprise & Interanet Infra. Specialized in AI SaaS and Actionable Agents.",
    keywords:
      "QA Engineer, Frontend Developer, React, TypeScript, Node.js, Web Development, Portfolio, SaaS",
    author: "Jiseong Oh",
    siteName: "Jiseong Oh Portfolio",
  },

  // Navigation and general
  navigation: {
    // Add navigation items when you have them
  },

  // Profile Card
  profile: {
    skillsHeading: "Skills",
    contactHeading: "Contact",
    contactLabels: {
      linkedin: "LinkedIn",
      github: "GitHub",
      website: "Website",
      email: "Email",
    },
  },

  // Experience Section
  experience: {
    heading: "Work Experience",
    description: "My professional journey and contributions",
  },

  // Projects Section
  projects: {
    heading: "Featured Projects",
    description: "A showcase of my recent work and achievements",
    buttons: {
      liveDemo: "Visit",
      viewCode: "Code",
    },
    privateProjectModal: {
      title: "Private repository",
      message:
        "Sorry, this project's repository is private and not available to view.",
      close: "Close",
    },
  },

  // Education Section
  education: {
    educationHeading: "Education",
    educationDescription: "My academic background and qualifications",
    awardsHeading: "Awards & Certifications",
    awardsDescription: "Recognition and achievements",
  },

  // Common elements
  common: {
    loading: "Loading...",
    error: "An error occurred",
  },

  // Portfolio Data
  portfolioData: {
    profile: {
      name: "Jiseong Oh",
      title: "Builder & Product Lead",
      avatar: "/images/profile/avatar.webp",
      bio: "Builder & Product Lead at Metaba | Architecting 2nd-Gen Large Action Models (LAM) for Legacy Enterprise & Interanet Infra. Specialized in AI SaaS and Actionable Agents.",
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "VPS",
        "MongoDB",
        "Next.js",
        "Tailwind CSS",
      ],
      contact: {
        linkedin:
          process.env.NEXT_PUBLIC_LINKEDIN_URL ||
          "https://www.linkedin.com/in/jiseongoh/",
        github:
          process.env.NEXT_PUBLIC_GITHUB_URL ||
          "https://github.com/jackdanieloh",
        website: process.env.NEXT_PUBLIC_WEBSITE_URL || "",
        githubId: "jackdanieloh",
        linkedinId: "jiseongoh",
      },
    },
    experiences: [
      {
        title: "QA & Frontend Lead",
        company: "Metaba Co Ltd",
        period: "March 2024 - Present",
        description:
          "Lead QA and frontend development for an fullstack AI company, managing technical teams and ensuring platform reliability for thousands of active users.",
        highlight1:
          "Managed 5 developers, successfully supporting +3.5k monthly visitors of created online space.",
        highlight2:
          "Performed regular QA checks to ensure service stability, data integrity, and UX consistency.",
        highlight3:
          "Co-hosted creator campaigns with multiple MCNs, achieving total of 236k+ SNS impressions.",
        technologies: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "VPS",
          "MongoDB",
        ],
      },
      {
        title: "Computer Emergency Response Team (CERT)",
        company: "Republic of Korea Navy",
        period: "August 2022 - March 2024",
        description:
          "Managed cybersecurity infrastructure and network operations for a large-scale military environment. Led network administration, security automation, and regular quality assurance tests.",
        highlight1:
          "Administered firewalls, NAC servers, and Cisco network devices supporting 70,000+ personnel.",
        highlight2:
          "Conducted QA and reliability testing for mission-critical intranet pages, ensuring >95% uptime.",
        highlight3:
          "Developed internal scripts for automation for patching security across key systems.",
        technologies: [
          "JavaScript",
          "Python",
          "MySQL",
          "JavaScript",
          "Network Access Control (NAC)",
          "Jupyter Notebook",
        ],
      },
      {
        title: "Frontend Developer - Volunteer",
        company: "Join Us Korea (NGO)",
        period: "July 2022",
        description:
          "Developed responsive user interfaces and implemented modern web standards. Worked closely with designers to create seamless user experiences.",
        highlight1:
          "Delivered full redesign of the organization’s public blog site, increasing retention by 18%.",
        highlight2:
          "Executed QA testing across content updates and tracked SEO performance.",
        highlight3:
          "Maintained AdSense integration and DevOps on a platform with 15k MAU and 1M+ total visitors.",
        technologies: ["JavaScript", "HTML", "CSS", "Tistory"],
      },
    ],
    projects: [
      {
        title: "Metaba - Generative AI for Creators",
        description:
          "Using just a social link, tailor fit social links & community & shops generation. Multi tenant depolyment under unique subdomain.",
        image: "/images/projects/metaba-preview.webp",
        technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
        year: "2025",
        liveUrl: "https://metaba.com",
        githubUrl: "#",
      },
      {
        title: "Portfolio Website - This one!",
        description:
          "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations and optimized performance.",
        image: "/images/projects/portfolio-preview.jpg",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "PNPM"],
        year: "2025",
        liveUrl: "https://jiseongoh.dev",
        githubUrl: "https://github.com/JackDanielOh/my-portfolio",
      },
      {
        title: "Rushplus.gg - Game Community",
        description:
          "A collaborative community based on NEXON's Kartrider IP. Monthly fun online tournament and game statics with real-time updates.",
        image: "/images/projects/rushplus-preview.webp",
        technologies: ["React", "Next.js", "REST", "TypeScript", "MongoDB"],
        year: "2023",
        liveUrl: "https://rushplus.gg",
        githubUrl: "#",
      },
      {
        title: "Soul Chef - Fun Mini Game",
        description:
          "As a Chief in HELL, become the owner of the most renowned restaurant in all layers of hell with your secret recipe!",
        image: "/images/projects/soulchef-preview.webp",
        technologies: ["GMS2", "JavaScript"],
        year: "2022",
        liveUrl: "https://kimchiwombat.itch.io/soulchef",
        githubUrl: "#",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Melbourne",
        period: "2018 - 2021",
        description: "Specialized in software engineering and web development.",
      },
    ],
    awards: [
      {
        title: "Jinhae Naval Commander Letter of Recommendation",
        issuer: "South Korean Navy",
        date: "March 2024",
        description:
          "Recognition for exemplary showcase of leadership and work ethics.",
      },
      {
        title: "Google Analytics Professional",
        issuer: "Google",
        date: "July 2022",
        description:
          "Professional certification in Google Analytics for advanced data analysis and reporting.",
      },
      {
        title: "Cisco Certified Network Associate (CCNA)",
        issuer: "Cisco",
        date: "April 2022",
        description:
          "Network engineering certification demonstrating expertise in networking fundamentals.",
      },
    ],
  },
};
