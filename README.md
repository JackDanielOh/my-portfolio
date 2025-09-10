# 🚀 Modern Portfolio Template

A stunning, responsive portfolio website built with Next.js 15, featuring smooth animations, internationalization, and a unique interactive cursor experience. Perfect for developers, designers, and creatives looking to showcase their work professionally.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

### 🎨 **Modern Design & Animations**

- **Interactive Custom Cursor** - Unique spinning cursor with target detection and smooth animations
- **Terminal Background** - Animated faulty terminal effect with glitch aesthetics
- **Smooth GSAP Animations** - Professional-grade animations throughout the site
- **Responsive Design** - Perfect on all devices from mobile to desktop

### 🌍 **Internationalization (i18n)**

- **Multi-language Support** - English and Korean with easy extensibility
- **Dynamic Language Switching** - Seamless language changes without page reload
- **SEO Optimized** - Proper meta tags and structured data for each language
- **URL-based Locales** - Clean URLs like `/en` and `/ko`

### 🏗️ **Modern Tech Stack**

- **Next.js 15** - Latest App Router with React Server Components
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS 4** - Utility-first CSS with modern features
- **GSAP** - Professional animation library
- **OGL** - WebGL library for advanced graphics

### 📱 **Performance & SEO**

- **Optimized Images** - WebP format with proper sizing
- **Font Optimization** - Custom Pretendard font with variable weights
- **Meta Tags** - Complete Open Graph and Twitter Card support
- **Sitemap & Robots** - SEO-ready with proper indexing

## 🎯 **Live Demo**

🌐 **[View Live Portfolio](https://jiseongoh.dev)**

## 🚀 **Quick Start**

### Prerequisites

- Node.js 18+
- PNPM (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JackDanielOh/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ **Customization Guide**

### 1. **Personal Information**

Edit the data files in `src/data/languages/`:

- `en.ts` - English content
- `ko.ts` - Korean content

### 2. **Profile Section**

Update your personal information:

```typescript
profile: {
  name: "Your Name",
  title: "Your Title",
  avatar: "/images/profile/avatar.webp",
  bio: "Your bio...",
  skills: ["React", "TypeScript", "Node.js"],
  contact: {
    linkedin: "your-linkedin-url",
    github: "your-github-url",
    website: "your-website-url",
  },
}
```

### 3. **Projects & Experience**

Add your projects and work experience in the respective arrays in the language files.

### 4. **Styling**

- Modify `src/app/globals.css` for global styles
- Update component styles using Tailwind classes
- Customize the terminal background in `src/components/backgrounds/FaultyTerminal.tsx`

### 5. **Images**

Replace images in the `public/images/` directory:

- `profile/avatar.webp` - Your profile picture
- `projects/` - Project preview images

## 📁 **Project Structure**

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── animations/         # Animation components
│   │   └── TargetCursor.tsx
│   ├── atoms/              # Basic UI components
│   ├── molecules/          # Composite components
│   ├── organisms/          # Complex sections
│   ├── templates/          # Page layouts
│   └── backgrounds/        # Background effects
├── contexts/
│   └── LanguageContext.tsx # i18n context
├── data/
│   └── languages/          # Content data
└── middleware.ts           # i18n middleware
```

## 🎨 **Key Components**

### **TargetCursor**

Interactive custom cursor with:

- Smooth GSAP animations
- Target detection and highlighting
- Parallax effects
- Configurable spin duration

### **FaultyTerminal**

Animated background with:

- Glitch effects
- Scanline animations
- Mouse interaction
- Customizable parameters

### **PortfolioLayout**

Main layout featuring:

- Responsive grid system
- Sticky sidebar
- Smooth scrolling
- Language switching

## 🌐 **Deployment**

### **Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Other Platforms**

- **Netlify**: Works out of the box
- **Railway**: Supports Next.js natively
- **Custom VPS**: Use `pnpm build && pnpm start`

## 🔧 **Environment Variables**

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_WEBSITE_URL=https://your-website.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

## 📱 **Browser Support**

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [GSAP](https://greensock.com/gsap/) - Animation library
- [OGL](https://github.com/oframe/ogl) - WebGL library
- [Pretendard](https://cactus.tistory.com/306) - Korean font

## 📞 **Contact**

**Jiseong Oh** - [@JackDanielOh](https://github.com/JackDanielOh)

Project Link: [https://github.com/JackDanielOh/my-portfolio](https://github.com/JackDanielOh/my-portfolio)

---

⭐ **Star this repository if you found it helpful!**
