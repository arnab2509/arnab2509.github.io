// Projects
const allProjects = [
    // // Random Project Example
    // {
    //     id: 'weatherly',
    //     title: "Weatherly: Real-Time Weather App",
    //     tech: "React, OpenWeatherMap API, CSS3",
    //     desc: "A responsive web application that provides real-time weather updates for any city worldwide. Features include dynamic background changes, search history, and detailed weather statistics using the OpenWeatherMap API.",
    //     link: "https://github.com/arnab2509/weatherly"
    // },
    {
        id: 'ecommerce',
        title: "Ecommerce Sales Dashboard in Power BI",
        tech: "Power BI, Excel, DAX",
        desc: "Built an interactive Ecommerce Sales Dashboard using Power BI and Excel datasets. Delivered insights into sales performance, customer behavior, and product profitability using DAX measures and dynamic filters.",
        link: "https://github.com/arnab2509/ecommerce-sales-dashboard"
    },
    {
        id: 'scribble',
        title: "Scribble Space",
        tech: "HTML5, CSS3, JavaScript (ES6+), SQL",
        desc: "A modern Content Management System for managing rich media blog posts with offline data support. Features include search functionality, filtering options, dark mode, and smooth animations with custom notifications.",
        link: "https://github.com/arnab2509/Scribble-Space"
    },
    {
        id: 'yumm',
        title: "Yumm: Food Delivery App",
        tech: "Flutter, Firebase, Authentication, Cloud Storage, Realtime DB",
        desc: "A comprehensive food delivery application with real-time order tracking and secure Firebase authentication. Integrated Cloud Storage for user profiles and order history with intuitive UI design.",
        link: "https://github.com/arnab2509/yumm"
    },
    
    
    // Add more projects as needed
];

// Skills
const allSkills = [
    {
        category: "Programming Languages",
        items: [
            { name: "Python", icon: "python" },
            { name: "Java", icon: "java" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Dart", icon: "dart" },
            { name: "SQL", icon: "mysql" },
            { name: "HTML", icon: "html5" },
            { name: "CSS", icon: "css3" }
        ]
    },
    {
        category: "Data Analytics",
        items: [
            { name: "Data Analysis", icon: "chartdotjs" },
            { name: "Pandas", icon: "pandas" },
            { name: "Data Modeling", icon: "databricks" },
            { name: "Excel", icon: "microsoftexcel" },
            { name: "Tableau", icon: "tableau" },
            { name: "Power BI", icon: "powerbi" }
        ]
    },
    {
        category: "Cloud & Databases",
        items: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "Firebase", icon: "firebase" },
            { name: "MySQL", icon: "mysql" }
        ]
    },
    {
        category: "Tools & Frameworks",
        items: [
            { name: "Flutter", icon: "flutter" },
            { name: "VS Code", icon: "visualstudiocode" },
            { name: "Android Studio", icon: "androidstudio" },
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" }
        ]
    }
];

// Certifications
const allCerts = [
    {
        title: "Deloitte Australia Data Analytics Job Simulation",
        link: "https://drive.google.com/file/d/1DzGRJMUFx7gkKkKgWdFihXwu6iVFdYen/view?usp=sharing",
        details: [
            "Completed data analysis and forensic technology simulation",
            "Created data dashboard using Tableau",
            "Used Excel for data classification and business insights"
        ]
    },
    {
        title: "Accenture Software Engineering Virtual Simulation",
        link: "https://drive.google.com/file/d/17JHu3_Shuex-d22SqR0CwwZWkI4sAt0c/view?usp=sharing",
        details: [
            "Completed modules on Software Architecture, Security, Programming",
            "Gained hands-on experience with Testing and Agile methodologies",
            "Developed problem-solving and collaboration skills"
        ]
    },
    {
        title: "Tata Data Visualisation Job Simulation",
        link: "https://drive.google.com/file/d/12ALdvt0Q-OHzLy6YZSOtLFY1OY3RiCOC/view?usp=sharing",
        details: [
            "Created data visualizations for business insights",
            "Prepared strategic questions for client leadership meetings",
            "Developed visuals for executive decision making"
        ]
    }
];

// About Me
window.aboutMe = {
    photo: "about-me.jpg",
    text: "I'm Arnab Mondal, a B.Tech graduate in Computer Science from Heritage Institute of Technology, specializing in Android development using Flutter and data analytics. I build intuitive, scalable mobile apps and craft meaningful insights using Power BI, Tableau, and Excel. With hands-on experience in both development and analytics, I’m passionate about creating tech-driven solutions that make an impact."
};

// Education
window.education = [
    {
        institute: "Heritage Institute of Technology",
        degree: "Bachelor of Technology in Computer Science",
        date: "2022 - 2025",
        location: "Kolkata, West Bengal",
        board: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
        percentage: "7.29 CGPA",
        description: "Focused on software engineering, mobile apps, and data analytics."
    },
    {
        institute: "Iswar Chandra Vidyasagar Polytechnic",
        degree: "Diploma in Computer Science and Technology",
        date: "2019 - 2022",
        location: "Jhargram, West Bengal",
        board: "West Bengal State Council of Technical & Vocational Education and Skill Development",
        percentage: "8.2 CGPA",
        description: "Learned programming, databases, and problem-solving."
    },
    {
        institute: "Durgapur Tarak Nath High School",
        degree: "Higher Secondary Education (Class XII)",
        date: "2018 - 2019",
        location: "Durgapur, West Bengal",
        board: "West Bengal Council of Higher Secondary Education (WBCHSE)",
        percentage: "72.6%",
        description: "Studied science and mathematics."
    },
    {
        institute: "Durgapur Project Township Boys' High School",
        degree: "Secondary Education (Class X)",
        date: "2016 - 2017",
        location: "Durgapur, West Bengal",
        board: "West Bengal Board of Secondary Education (WBBSE)",
        percentage: "73%",
        description: "Completed secondary education."
    }
];

// Relevant Coursework
window.coursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Object Oriented Programming",
    "Database Management System",
    "Software Engineering"
];

// Experience Section
window.experience = [
    {
        title: "Android Developer Intern - Ardent Computech Pvt. Ltd.",
        date: "June 2024 - July 2024 | Kolkata, West Bengal",
        details: [
            "Created custom mobile applications with native technologies",
            "Tested applications before final review to confirm issue resolution",
            "Maintained solid understanding of mobile development cycle",
            "Applied debugging techniques for quick issue resolution"
        ]
    }
];

// Export for ES6 modules or attach to window for browser usage
if (typeof window !== "undefined") {
    window.allProjects = allProjects;
    window.allSkills = allSkills;
    window.allCerts = allCerts;
}

// For ES6 module usage (uncomment if using modules)
// export { allProjects, allSkills, allCerts };
