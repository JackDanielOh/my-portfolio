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
    privateProjectModal: {
      title: "비공개 저장소",
      message:
        "죄송합니다. 이 프로젝트의 저장소는 비공개로 설정되어 있어 확인하실 수 없습니다.",
      close: "닫기",
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
      title: "Builder & Product Lead",
      avatar: "/images/profile/avatar.webp",
      bio: "메타바(주) 빌더 및 제품 책임자 | 레거시 엔터프라이즈 및 인터넷 인프라를 위한 2세대 Large Action Model (LAM) 구축. AI SaaS 및 에이전트 개발 특화.",
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
        title: "대표 & 프로덕트 리드",
        company: "메타바 (Metaba Co Ltd)",
        period: "2024년 3월 - 현재",
        description:
          "세 번의 피벗을 거치며 AI 회사를 설립하고 이끌었습니다. 온라인 커뮤니티 도구에서 AI 크리에이터 SaaS, B2B LAM 에이전트까지—각 단계에서 제품, 팀, 기술 기반을 구축했습니다.",
        phases: [
          {
            phaseLabel: "피벗 2: B2B 엔터프라이즈 LAM 모달 공급",
            period: "2025 Q4 - 현재",
            description:
              "레거시 엔터프라이즈 및 인트라넷 인프라에 특화된 2세대 Large Action Model (LAM) 에이전트.",
            highlights: [
              "헬스케어·통신 분야 B2B 클라이언트 계약으로 $7,000 MRR 및 $120k ARR 전망 달성.",
              "고성능 LAM 모델 구축: 클라우드 기반 RAG에서 Private VDS 호스팅 CAG(Cache-Augmented Generation)로 전환하여 지연 시간 대폭 단축 및 데이터 무결성 확보.",
              "자체 sLLM 배포 및 레거시 DB 오케스트레이션용 맞춤 검증 프레임워크로 운영 마진 75% 개선.",
            ],
            technologies: [
              "LAM",
              "CAG (Cache-Augmented Gen)",
              "sLLM 최적화",
              "Private VDS",
              "레거시 시스템 오케스트레이션",
            ],
          },
          {
            phaseLabel: "피벗 1: 크리에이터를 위한 올인원 AI 에이전틱 에이전트",
            period: "2025 Q2 - 2025 Q4",
            description:
              "크리에이터를 위한 올인원 AI 에이전틱 에이전트. 대화로 나만의 수익화 SaaS를 만드세요.",
            highlights: [
              "고유 서브도메인 기반 멀티테넌트 MVP 구축·배포, 현재 VPS 중심 AI 인프라의 기반 마련.",
              "초기 크리에이터 코호트 온보딩 및 기술 워크플로우 간소화로 '제로투원' 자동화 도구 수요 검증.",
              "NoSQL 데이터 구조(MongoDB)와 자동 링크 커스터마이징 엔진 간 연동 구축.",
            ],
            technologies: [
              "Next.js",
              "TypeScript",
              "MongoDB",
              "자동 VPS 프로비저닝",
            ],
          },
          {
            phaseLabel: "시작: 맞춤형 온라인 커뮤니티 플랫폼 생성",
            period: "2023 Q4 - 2025 Q1 (기반)",
            description:
              "왜 개인 온라인 커뮤니티 플랫폼을 갖기가 이렇게 어려울까? 마크는 2004년에 이미 자신만의 것을 갖고 있었다.",
            highlights: [
              "고유 서브도메인으로 데모 프로토타입 커뮤니티 출시, +10k MAU 달성.",
              "메이저 MCN(샌드박스, 롤큐) 크리에이터와 협업해 크리에이터 주도 캠페인 진행, +250k SNS 노출.",
              "프로덕션 수준 온라인 커뮤니티 아키텍처 구축.",
            ],
            technologies: [
              "React",
              "PostgreSQL",
              "MCN API 연동",
              "인프라 스케일링",
            ],
          },
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
