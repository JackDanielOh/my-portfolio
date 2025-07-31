export const portfolioData = {
  profile: {
    name: "Jiseong Oh",
    title: "QA & Frontend Developer",
    avatar:
      "https://res.cloudinary.com/rushplusgg/image/upload/v1753938172/metaba/JDPFP_hpc6x6.webp",
    bio: "Passionate SaaS developer with 3+ years of experience building and publishing modern web applications. Specialized in React, Node.js, and cloud technologies.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "Next.js",
      "Tailwind CSS",
    ],
    contact: {
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
      github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
      website: process.env.NEXT_PUBLIC_WEBSITE_URL || "",
    },
  },
  experiences: [
    {
      title: "QA & Frontend Lead",
      company: "Metaba Co Ltd",
      period: "March 2024 - Present",
      description:
        "Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
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
        "Built and maintained multiple web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.",
      technologies: [
        "React",
        "Python",
        "PostgreSQL",
        "Django",
        "JavaScript",
        "Git",
      ],
    },
    {
      title: "Frontend Developer - Volunteer",
      company: "Join Us Korea (NGO)",
      period: "2022 - 2022",
      description:
        "Developed responsive user interfaces and implemented modern web standards. Worked closely with designers to create seamless user experiences.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Bootstrap",
        "jQuery",
      ],
    },
  ],
  projects: [
    {
      title: "Gecko AI - AI Agent for Creators",
      description:
        "Generated tailor fit social links & community & shops just by inserting your social link. Built with Next.js, Stripe, and MongoDB.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
    },
    {
      title: "Rushplus.gg - Social Platform",
      description:
        "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/johndoe/task-management",
    },
    {
      title: "Portfolio Website - This one!",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      liveUrl: "https://johndoe.dev",
      githubUrl: "https://github.com/johndoe/portfolio",
    },
    {
      title: "Soul Chef - Fun Mini Game",
      description:
        "As a Chief in HELL, become the owner of the most renowned restaurant in all layers of hell with your secret recipe!",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      technologies: ["GMS2", "JavaScript"],
      liveUrl: "https://weather-dashboard.com",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Melbourne",
      period: "2015 - 2019",
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
      date: "Jul 2022",
      description:
        "Professional certification in Google Analytics for advanced data analysis and reporting.",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "Apr 2022",
      description:
        "Cisco Certified Network Associate certification demonstrating expertise in networking fundamentals.",
    },
  ],
};
