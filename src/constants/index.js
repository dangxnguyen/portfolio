import {
  backend,
  nlp,
  software,
  web,

  unt,
  delmar,

  css,
  cpp,
  express,
  git,
  html,
  java,
  javascript,
  mongodb,
  nodejs,
  python,
  react,
  redux,
  tailwind,
  typescript,
  
  moviedb,
  summaryze,
  imaginai,
  foodie,
  sorting,
  evoice,
  accessx,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Software Engineering",
    icon: software,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Natural Language Processing",
    icon: nlp,
  },
];

const education = [
  {
    college: "University of North Texas",
    degree: "Bachelor of Science in Computer Science",
    icon: unt,
    iconBg: "#383E56",
    date: "January 2022 - December 2023",
    points: [
      "Studied advanced topics in computer science including algorithms, data structures, and operating systems.",
      "Learned how to design and implement software solutions to solve real-world problems.",
      "Developing and maintaining web applications using React.js, Tailwind CSS and other related technologies.",
      "Collaborating in teams coming from different backgrounds including frontend, backend, mobile, and natural language processing to create high-quality projects.",
    ],
  },
  {
    college: "Del Mar College",
    degree: "Associate of Science in Computer Programming",
    icon: delmar,
    iconBg: "#E6DEDD",
    date: "January 2020 - December 2021",
    points: [
      "Studied theoretical and technical foundations of computer science.",
      "Developed fundamental programming skills in C++ and Python.",
      "Created basic web applications using HTML, CSS, and JavaScript.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Movie Database",
    description:
      "React-based movie web application with Redux and TMDB API integration for movie searches, trailer viewing, and cast information. It features a Material UI design for a user-friendly experience and includes an Alan AI-powered voice-assisted interface for interactive navigation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
    ],
    image: moviedb,
    code_link: "https://github.com/dangxnguyen/moviedb",
    live_link: "https://dxn-moviedb.netlify.app/",
  },
  {
    name: "Article Summarizer",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: summaryze,
    code_link: "https://github.com/dangxnguyen/summaryze",
    live_link: "https://dxn-summaryze.netlify.app/",
  },
  {
    name: "Image Generator",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "gray-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: imaginai,
    code_link: "https://github.com/dangxnguyen/imaginai",
    live_link: "https://dxn-imaginai.netlify.app/",
  },
  {
    name: "Recipe App",
    description:
      "React-based recipe app that showcases various cuisines, providing detailed information for each recipe including ingredients, instructions, and nutritional data. It utilizes the Spoonacular API to enrich user understanding of food and recipe dynamics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: foodie,
    code_link: "https://github.com/dangxnguyen/foodie",
    live_link: "https://dxn-foodie.netlify.app/",
  },
  {
    name: "Voice Assistant Email",
    description:
      "Django web application aids visually impaired users in managing Gmail via a virtual voice assistant. It supports voice commands for email tasks and has a user-friendly HTML/CSS layout, blending accessibility with functionality.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: evoice,
    code_link: "https://github.com/dangxnguyen/virtual-voice-assistant-email",
    live_link: "https://github.com/dangxnguyen/virtual-voice-assistant-email",
  },
  {
    name: "Landing Information Page",
    description:
      "React-based landing page that provides information about the importance of web accessibility and how to implement it. It features a user-friendly design and includes a Firefox extension that allows users to check the accessibility of any website.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: accessx,
    code_link: "https://github.com/dangxnguyen/accessibility-extension",
    live_link: "https://unt-accessx.netlify.app/",
  },
];

export { services, technologies, education, projects };