import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tyler Dipolito",
  initials: "TD",
  url: "https://tylerdipolito.com",
  location: "Tampa, FL",
  locationLink: "https://www.google.com/maps/place/tampa",
  description:
    "Entrepreneur, Developer, and Innovator. Dedicated to creating impactful solutions and helping businesses thrive in the digital age. Passionate about technology and continuous learning.",
  summary:
    "In 2023, I made a significant transition from sales and business development to focusing entirely on building and scaling my own tech ventures. My journey includes extensive experience in health insurance, developing SaaS platforms, and launching multiple startups. I’m committed to leveraging technology to solve real-world problems and create value.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "Vue.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@tylerdipolito.com",
    tel: "+18135555555",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tylerdipolito",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tylerdipolito/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tylerdipolito",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/tylerdipolito",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@tylerdipolito.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "JAKS Digital Consulting",
      href: "https://jaksconsulting.com",
      badges: [],
      location: "Tampa, FL",
      title: "Founder & CEO",
      logoUrl: "/jaks.png",
      start: "May 2023",
      end: "Present",
      description:
        "Founded and scaled a digital consulting firm focused on helping businesses with their online presence, digital marketing strategies, and AI integration. Led a team of experts to deliver custom solutions for clients.",
    },
    {
      company: "VVS Health Insurance Team",
      badges: [],
      href: "https://vvshealthinsurance.com",
      location: "Tampa, FL",
      title: "Sales Associate",
      logoUrl: "/vvs.png",
      start: "January 2022",
      end: "April 2023",
      description:
        "Assisted clients in finding the best health insurance plans tailored to their needs. Developed a deep understanding of the insurance industry and built strong relationships with clients.",
    },
    {
      company: "Exclusive Property Maintenance",
      href: "https://exclusivepropertymaintenance.com",
      badges: [],
      location: "Tampa, FL",
      title: "Digital Marketing Consultant",
      logoUrl: "/exclusive.png",
      start: "June 2021",
      end: "December 2021",
      description:
        "Implemented digital marketing strategies to enhance online visibility and customer engagement. Successfully increased website traffic and lead generation through targeted campaigns.",
    },
  ],
  education: [
    {
      school: "University of Tampa",
      href: "https://ut.edu",
      degree: "Bachelor's Degree in Business Administration",
      logoUrl: "/utampa.png",
      start: "2014",
      end: "2018",
    },
    {
      school: "Erwin Technical College",
      href: "https://erwin.edu",
      degree: "Associate Degree in Web Development",
      logoUrl: "/erwin.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "R2M Protocol DETOX",
      href: "https://r2mprotocoldetox.com",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Developed a detox program backed by scientific research and peer-reviewed studies. The platform offers users a comprehensive guide to improving their health, reducing toxins, and promoting rapid weight loss.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://r2mprotocoldetox.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Campos Law FL",
      href: "https://camposlawfl.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Created a legal platform where clients can book appointments with top lawyers. The website is optimized for user experience and integrates various legal resources.",
      technologies: [
        "WordPress",
        "Elementor",
        "JavaScript",
        "CSS",
        "Google Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://camposlawfl.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Reaction Labs",
      href: "https://reactionlabs.com",
      dates: "April 2023 - Present",
      active: true,
      description:
        "Developed a platform focused on advanced chemical reaction simulations and data analysis. The platform serves researchers and industries looking for precise reaction modeling.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://reactionlabs.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "KASH After Crash",
      href: "https://kashaftercrash.com",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Launched a platform that provides support and resources for individuals involved in car accidents. The platform connects users with legal, medical, and financial services.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://kashaftercrash.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Rhino Signs",
      href: "https://rhinosigns.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed and managed the digital presence for Rhino Signs, focusing on showcasing their portfolio of custom signs and attracting new clients.",
      technologies: [
        "WordPress",
        "JavaScript",
        "CSS",
        "Google Analytics",
        "WooCommerce",
      ],
      links: [
        {
          type: "Website",
          href: "https://rhinosigns.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Tampa 2024",
      dates: "March 23rd - 25th, 2024",
      location: "Tampa, FL",
      description:
        "Developed a mobile app to help local businesses track and optimize their supply chains using blockchain technology.",
      image: "",
      links: [],
    },
    {
      title: "Suncoast Developers Hackathon",
      dates: "January 20th - 21st, 2024",
      location: "St. Petersburg, FL",
      description:
        "Built a smart city dashboard using real-time data to improve traffic management and public safety.",
      image: "",
      links: [],
    },
  ],
} as const;
