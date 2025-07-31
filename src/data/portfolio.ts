export const portfolioData = {
  profile: {
    name: "Jiseong Oh",
    title: "Full Stack Developer",
    avatar:
      "https://res.cloudinary.com/rushplusgg/image/upload/v1753938172/metaba/JDPFP_hpc6x6.webp",
    bio: "Passionate full-stack developer with 5+ years of experience building modern web applications. Specialized in React, Node.js, and cloud technologies. Always eager to learn new technologies and solve complex problems.",
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
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "TypeScript",
        "Docker",
        "MongoDB",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
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
      title: "Frontend Developer",
      company: "WebSolutions",
      period: "2019 - 2020",
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
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with Next.js, Stripe, and MongoDB.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration, and progress tracking. Features include drag-and-drop interface and real-time notifications.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/johndoe/task-management",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization. Integrates with multiple weather APIs.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Chart.js",
        "OpenWeather API",
        "Leaflet",
      ],
      liveUrl: "https://weather-dashboard.com",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      liveUrl: "https://johndoe.dev",
      githubUrl: "https://github.com/johndoe/portfolio",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Melbourne",
      period: "2015 - 2019",
      description:
        "Graduated with honors. Specialized in software engineering and web development.",
    },
  ],
  awards: [
    {
      title: "CCNA",
      issuer: "Cisco",
      date: "2023",
      description:
        "Cisco Certified Network Associate certification demonstrating expertise in networking fundamentals.",
    },
    {
      title: "Google Analytics Professional",
      issuer: "Google",
      date: "2022",
      description:
        "Professional certification in Google Analytics for advanced data analysis and reporting.",
    },
    {
      title: "Commander Award",
      issuer: "South Korean Navy",
      date: "2021",
      description:
        "Recognition for exceptional leadership and service in the South Korean Navy.",
    },
  ],
};
