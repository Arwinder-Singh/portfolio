import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,


    pup,
    oceana,
    pseb,
    skill,

    orangeShop,
    kyp,
    baratie,
    pardesi,
    jeona,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [{
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Education",
        company_name: "Punjabi University",
        icon: pup,
        iconBg: "#383E56",
        // date: " 2020 - April 2021",
        points: [
            "Bachelor Of Technology in Computer Science.",
            "Jun 2020 - Jun 2024 (expected).",
            " CGPA : 8.68",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Education",
        company_name: "B.G.S.U.S Senior Secondary School",
        icon: pseb,
        iconBg: "#E6DEDD",
        // date: "Jan 2021 - Feb 2022",
        points: [
            "12th Grade",
            "Mar 2018 - Mar 2020",
            "Percentage : 86.2",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Work Experience",
        company_name: "Oceana Tech",
        icon: oceana,
        iconBg: "#E6DEDD",
        // date: "Jan 2022 - Jan 2023",
        points: [
            "Training Intern",
            "Jul 2022 – Aug 2022",
            " Acquired hands-on experience in building web applications using Django framework",
            " Developed a responsive website PARDESI",
        ],
    },
    {
        title: "Skills",
        company_name: "Technical Skills",
        icon: skill,
        iconBg: "#E6DEDD",
        // date: "Jan 2023 - Present",
        points: [
            "<b> <u>Programming Languages</u></b>: C++, Python.",
            "<b> <u>Web Frameworks</u></b>: Django, React, Three.js, &nbsp Bootstrap.",
            " <b><u>Other tech</u></b>: Linux, Web Scraping, Git and Github, SQL.",
            "<b><u>College Coursework</u></b>: DBMS, Data Structures and Algorithms, OOPS.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Know Your Professor",
        description: " <ul class='list-disc'><li>Website where students can share anonymous feedback of professors.</li><li>Implemented a comprehensive rating system based on specific parameters which provide detailed insights about professor.</li></ul>",
        tags: [{
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "violet-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },

            {
                name: "sqlite",
                color: "orange-text-gradient",
            },
        ],
        image: kyp,
        source_code_link: "https://github.com/Arwinder-Singh/Know_your_professor",
        website_link: "https://knowyourprofessor.pythonanywhere.com/",
    },
    {
        name: "Baratie",
        description: "<ul class='list-disc'><li>Recipe app where user can search any recipe and can see it’s instructions and ingredients required.</li><li> Spoonacular API is integrated with react frontend for fetching all the recipes</li></ul>",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "spoonacular api",
                color: "green-text-gradient",
            },

        ],
        image: baratie,
        source_code_link: "https://github.com/Arwinder-Singh/baratie",
        website_link: "https://baratie-a5996.firebaseapp.com/"
    },
    {
        name: "Orange Shop",
        description: "<ul class='list-disc'><li>Analyzing critical associations between products by applying the FP-Growth algorithm to the store sales dataset.</li><li>Empowered the store to make informed decisions based on data-driven insights using simple web-application.</li></ul>",
        tags: [{
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "ml",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "violet-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },

            {
                name: "sqlite",
                color: "orange-text-gradient",
            },
        ],
        image: orangeShop,
        source_code_link: "https://github.com/Arwinder-Singh/Orange_shop",
        website_link: "https://orangeshop.pythonanywhere.com/",
    },
    {
        name: "Pardesi",
        description: "<ul class='list-disc'><li>PARDESI is a website where users can find a suitable pg room as per their requirements and availability.</li><li>Pg owners can list their rooms on this website’s portal and can reach out to their target customers</li></ul>",
        tags: [{
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "violet-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },

            {
                name: "sqlite",
                color: "orange-text-gradient",
            },
        ],
        image: pardesi,
        source_code_link: "https://github.com/Arwinder-Singh/pardesi",
        website_link: "https://orangeshop.pythonanywhere.com/",
    },
    {
        name: "Jeona ਅਜੰਟ",
        description: " PARDESI is a website where users can find a suitable pg room as per their requirements and availability.Pg owners can list their rooms on this website portal and can reach out to their target customers",
        tags: [{
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "violet-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },

            {
                name: "sqlite",
                color: "orange-text-gradient",
            },
        ],
        image: jeona,
        source_code_link: "https://github.com/Arwinder-Singh/Jeona",
        website_link: "https://jeona.pythonanywhere.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };