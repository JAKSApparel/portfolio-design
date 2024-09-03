import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tammy Biggerstaff",
  initials: "TB",
  url: "https://tammybiggerstaff.com",
  location: "Tampa, FL",
  locationLink: "https://www.google.com/maps/place/tampa",
  description:
    "Experienced Marketing Consultant specializing in the restoration industry. Fluent in both English and Spanish with a proven track record in sales and business development.",
  summary:
    "With years of experience in marketing and consulting, Tammy Biggerstaff has worked with top restoration companies like 911 Restoration Company and United Water Restoration. She now helps other restoration companies scale and succeed. Her skills include strategic marketing, sales optimization, and bilingual communication in English and Spanish.",
  avatarUrl: "/tammy.png",
  skills: [
    "Marketing Strategy",
    "Sales Optimization",
    "Business Development",
    "Bilingual Communication (English & Spanish)",
    "Digital Marketing",
    "Brand Management",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tammy@example.com",
    tel: "+18135551234",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tammybiggerstaff/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tammybiggerstaff",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tammy@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "911 Restoration Company",
      href: "https://911restoration.com",
      badges: [],
      location: "Tampa, FL",
      title: "Marketing Consultant",
      logoUrl: "/911restoration.png",
      start: "January 2018",
      end: "December 2021",
      description:
        "Led marketing initiatives that boosted brand awareness and increased lead generation by 30%. Developed and executed digital marketing strategies across multiple platforms.",
    },
    {
      company: "United Water Restoration Company",
      href: "https://unitedwaterrestoration.com",
      badges: [],
      location: "Tampa, FL",
      title: "Marketing Manager",
      logoUrl: "/uwr.png",
      start: "January 2015",
      end: "December 2017",
      description:
        "Managed marketing campaigns that resulted in a 25% increase in sales. Implemented successful customer retention strategies and expanded the company's digital presence.",
    },
    {
      company: "Independent Consultant",
      href: "https://independentconsultant.com", // Placeholder link
      location: "Tampa, FL",
      title: "Consultant",
      logoUrl: "/consultant.png",
      start: "January 2022",
      end: "Present",
      description:
        "Currently consulting for various restoration companies, helping them scale their businesses through strategic marketing and sales development. Fluent in both English and Spanish, providing bilingual services to a diverse client base.",
    },
  ],
  education: [
    {
      school: "University of Florida",
      href: "https://ufl.edu",
      degree: "Bachelor of Science in Marketing",
      logoUrl: "/uf.png",
      start: "2006",
      end: "2010",
    },
  ],
  projects: [
    {
      title: "Scaling Strategies for Restoration Companies",
      href: "https://yourdomain.com/scaling-strategies",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "Developed a comprehensive guide and toolkit for restoration companies to scale their operations, including marketing plans, sales strategies, and customer retention techniques.",
      technologies: [
        "Marketing Strategy",
        "Sales Optimization",
        "Digital Marketing",
        "Bilingual Communication",
      ],
      links: [
        {
          type: "Website",
          href: "https://yourdomain.com/scaling-strategies",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bilingual Marketing Campaign",
      href: "https://yourdomain.com/bilingual-marketing",
      dates: "June 2022 - Dec 2022",
      active: true,
      description:
        "Created and managed a bilingual marketing campaign that targeted both English and Spanish-speaking clients, resulting in a 40% increase in customer engagement.",
      technologies: [
        "Bilingual Communication",
        "Digital Marketing",
        "Marketing Strategy",
      ],
      links: [
        {
          type: "Website",
          href: "https://yourdomain.com/bilingual-marketing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Restoration Marketing Summit 2023",
      dates: "March 15th - 17th, 2023",
      location: "Orlando, FL",
      description:
        "Led a workshop on advanced marketing strategies for restoration companies, focusing on digital presence and customer engagement.",
      image: "",
      links: [],
    },
    {
      title: "Bilingual Business Growth Conference",
      dates: "August 12th - 14th, 2022",
      location: "Miami, FL",
      description:
        "Presented a case study on the success of bilingual marketing campaigns in the restoration industry, emphasizing the importance of cultural competence.",
      image: "",
      links: [],
    },
  ],
} as const;
