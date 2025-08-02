export const ko = {
  // Site Metadata
  metadata: {
    title: "오지성 - QA 및 프론트엔드 개발자 포트폴리오",
    description:
      "3년 이상의 경험을 가진 열정적인 SaaS 개발자로, 현대적인 웹 애플리케이션을 구축하는 데 전문성을 가지고 있습니다. React, Node.js, 클라우드 기술에 특화되어 있습니다.",
    keywords:
      "QA 엔지니어, 프론트엔드 개발자, React, TypeScript, Node.js, 웹 개발, 포트폴리오, SaaS",
    author: "오지성",
    siteName: "오지성 포트폴리오",
  },

  // Navigation and general
  navigation: {
    // Add navigation items when you have them
  },

  // Profile Card
  profile: {
    skillsHeading: "기술",
    contactHeading: "연락처",
    contactLabels: {
      linkedin: "링크드인",
      github: "깃허브",
      website: "웹사이트",
      email: "이메일",
    },
  },

  // Experience Section
  experience: {
    heading: "경력",
    description: "저의 전문적인 여정과 기여",
  },

  // Projects Section
  projects: {
    heading: "주요 프로젝트",
    description: "최근 작업과 성과를 보여주는 포트폴리오",
    buttons: {
      liveDemo: "방문",
      viewCode: "코드",
    },
  },

  // Education Section
  education: {
    educationHeading: "학력",
    educationDescription: "학업 배경과 자격 사항",
    awardsHeading: "수상 및 자격증",
    awardsDescription: "인정받은 성과와 업적",
  },

  // Common elements
  common: {
    loading: "로딩 중...",
    error: "오류가 발생했습니다",
  },

  // Portfolio Data
  portfolioData: {
    profile: {
      name: "오지성",
      title: "QA 및 프론트엔드 개발자",
      avatar: "/images/profile/avatar.webp",
      bio: "3년 이상의 경험을 가진 열정적인 SaaS 개발자로, 현대적인 웹 애플리케이션을 구축하고 출시하는 데 전문성을 가지고 있습니다. React, Node.js, 클라우드 기술에 특화되어 있습니다.",
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
        linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
        github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
        website: process.env.NEXT_PUBLIC_WEBSITE_URL || "",
      },
    },
    experiences: [
      {
        title: "QA 및 프론트엔드 리드",
        company: "메타바 (Metaba Co Ltd)",
        period: "2024년 3월 - 현재",
        description:
          "풀스택 AI 회사에서 QA 및 프론트엔드 개발을 주도하며, 기술팀을 관리하고 수천 명의 활성 사용자를 위한 플랫폼 안정성을 보장합니다.",
        highlight1:
          "5명의 개발자를 관리하며, 생성된 온라인 공간의 월간 방문자 3.5천+ 명을 성공적으로 지원했습니다.",
        highlight2:
          "서비스 안정성, 데이터 무결성, UX 일관성을 보장하기 위해 정기적인 QA 검사를 수행했습니다.",
        highlight3:
          "여러 MCN과 크리에이터 캠페인을 공동 주최하여 총 236k+ SNS 노출 수를 달성했습니다.",
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
        title: "컴퓨터 비상대응팀 (CERT)",
        company: "대한민국 해군",
        period: "2022년 8월 - 2024년 3월",
        description:
          "대규모 군사 환경에서 사이버 보안 인프라와 네트워크 운영을 관리했습니다. 네트워크 관리, 보안 자동화, 정기적인 품질 보증 테스트를 주도했습니다.",
        highlight1:
          "70,000+ 명의 인원을 지원하는 방화벽, NAC 서버, Cisco 네트워크 장비를 관리했습니다.",
        highlight2:
          "임무 중요 인트라넷 페이지에 대한 QA 및 신뢰성 테스트를 수행하여 95% 이상의 가동 시간을 보장했습니다.",
        highlight3:
          "핵심 시스템의 보안 패치 자동화를 위한 내부 스크립트를 개발했습니다.",
        technologies: [
          "JavaScript",
          "Python",
          "MySQL",
          "JavaScript",
          "네트워크 접근 제어 (NAC)",
          "Jupyter Notebook",
        ],
      },
      {
        title: "프론트엔드 개발자 - 자원봉사",
        company: "조인어스코리아 (NGO)",
        period: "2022년 7월",
        description:
          "반응형 사용자 인터페이스를 개발하고 현대적인 웹 표준을 구현했습니다. 디자이너와 긴밀히 협력하여 매끄러운 사용자 경험을 만들었습니다.",
        highlight1:
          "조직의 공식 블로그 사이트 전체 재디자인을 완료하여 사용자 유지율을 18% 향상시켰습니다.",
        highlight2:
          "콘텐츠 업데이트 전반에 걸쳐 QA 테스트를 실행하고 SEO 성과를 추적했습니다.",
        highlight3:
          "월 활성 사용자 15k명과 총 방문자 100만+ 명의 플랫폼에서 AdSense 통합 및 DevOps를 유지했습니다.",
        technologies: ["JavaScript", "HTML", "CSS", "Tistory"],
      },
    ],
    projects: [
      {
        title: "메타바 - 크리에이터용 생성형 AI",
        description:
          "소셜 링크만으로 맞춤형 소셜 링크, 커뮤니티, 쇼핑몰을 생성합니다. 고유 서브도메인 하에 멀티 테넌트 배포를 지원합니다.",
        image: "/images/projects/metaba-preview.webp",
        technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
        year: "2025",
        liveUrl: "https://metaba.com",
        githubUrl: "#",
      },
      {
        title: "포트폴리오 웹사이트 - 바로 이것!",
        description:
          "Next.js와 Tailwind CSS로 구축된 현대적이고 반응형인 포트폴리오 웹사이트입니다. 부드러운 애니메이션과 최적화된 성능을 특징으로 합니다.",
        image: "/images/projects/portfolio-preview.jpg",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "PNPM"],
        year: "2025",
        liveUrl: "https://jiseongoh.dev",
        githubUrl: "https://github.com/JackDanielOh/my-portfolio",
      },
      {
        title: "러시플러스.gg - 게임 커뮤니티",
        description:
          "넥슨의 카트라이더 IP를 기반으로 한 협력 커뮤니티입니다. 월간 재미있는 온라인 토너먼트와 실시간 업데이트가 포함된 게임 통계를 제공합니다.",
        image: "/images/projects/rushplus-preview.webp",
        technologies: ["React", "Next.js", "REST", "TypeScript", "MongoDB"],
        year: "2023",
        liveUrl: "https://rushplus.gg",
        githubUrl: "#",
      },
      {
        title: "소울 셰프 - 재미있는 미니 게임",
        description:
          "지옥의 요리사로서, 비밀 레시피로 지옥의 모든 층에서 가장 유명한 레스토랑의 주인이 되어보세요!",
        image: "/images/projects/soulchef-preview.webp",
        technologies: ["GMS2", "JavaScript"],
        year: "2022",
        liveUrl: "https://kimchiwombat.itch.io/soulchef",
        githubUrl: "#",
      },
    ],
    education: [
      {
        degree: "컴퓨터 과학 학사",
        institution: "멜버른 대학교",
        period: "2018 - 2021",
        description: "소프트웨어 엔지니어링 및 웹 개발 전공",
      },
    ],
    awards: [
      {
        title: "진해 해군사령관 추천서",
        issuer: "대한민국 해군",
        date: "2024년 3월",
        description: "리더십과 직업 윤리의 모범적인 시연에 대한 인정",
      },
      {
        title: "구글 애널리틱스 전문가",
        issuer: "구글",
        date: "2022년 7월",
        description:
          "고급 데이터 분석 및 보고를 위한 구글 애널리틱스 전문 자격증",
      },
      {
        title: "시스코 공인 네트워크 어소시에이트 (CCNA)",
        issuer: "시스코",
        date: "2022년 4월",
        description:
          "네트워킹 기초에 대한 전문 지식을 증명하는 네트워크 엔지니어링 자격증",
      },
    ],
  },
};
