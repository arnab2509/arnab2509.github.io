// Projects
const allProjects = [
    {
    id: 'supply-chain-dashboard',
    title: "Inventory & Supply Chain Dashboard",
    tech: "Power BI, DAX, Data Modeling, Forecasting, CSV",
    desc: "Developed an interactive Power BI dashboard to analyze and optimize inventory and supply chain performance. Implemented ABC (COGS-based) and XYZ (demand variability) analysis, warehouse utilization tracking, and time-series forecasting of units sold. Visualized key metrics like transportation cost, order accuracy, and category-level performance using dynamic DAX measures.",
    link: "https://github.com/arnab2509/inventory-supply-chain-dashboard"
}
,
    {
        id: 'ola-ride-analysis',
        title: "OLA Ride Analysis Dashboard",
        tech: "Power BI, PostgreSQL, SQL, Python, DAX",
        desc: "Developed a 4-page interactive dashboard analyzing Ola ride booking data. Leveraged PostgreSQL for complex KPI extraction, automated Excel report generation using Python, and visualized trends in customer behavior, revenue performance, cancellations, and turnaround times in Power BI. Applied DAX for dynamic metrics like completion rate and CTAT/VTAT analysis.",
        link: "https://github.com/arnab2509/ola-ride-analysis-powerbi-sql" 
    },
   
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
    tech: "Flutter, Firebase (Auth, Firestore, Storage), Cloudinary, Dart",
    desc: "A responsive food delivery app with role-based access for users and admins. Features include email verification, real-time order tracking, profile management, and Cloudinary-powered image uploads.",
    link: "https://github.com/arnab2509/yumm"
}

    
    
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
            { name: "Power BI", icon: "powerbi" },
             { name: "NumPy", icon: "numpy" },
             { name: "Matplotlib", icon: "jupyter" }
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
            { name: "GitHub", icon: "github" },
            {name:"Jupyter Notebook", icon: "jupyter" },
        ]
    }
];

// Certifications
const allCerts = [
    {
  "title": "Business Analytics with Excel (Simplilearn, powered by Microsoft)",
  "date": "28th July 2025",
  "link": "https://drive.google.com/file/d/1I1dvfjCTBt1pDCBr2e6oaioDfE-HaEfg/view?usp=sharing",
  "details": [
    "Completed hands-on training in data analysis and business decision-making using Excel.",
    "Learned how to create dashboards, visualizations, and analytical models.",
    "Applied Excel functions like PivotTables, VLOOKUP, and conditional formulas.",
    "Gained exposure to real-world case studies and practical business scenarios."
  ]
}
,
   {
  "title": "Power BI for Beginners Certificate (Simplilearn, powered by Microsoft)",
  "link": "https://drive.google.com/file/d/1zjp1psmzlU-mWDnqbNVLtwsHr7ICcDdp/view?usp=sharing",
  "details": [
    "Explored the fundamentals of Power BI architecture and services",
    "Built interactive dashboards and data visualizations using real datasets",
    "Performed data cleaning and transformation using Power Query Editor",
    "Applied essential DAX formulas to calculate KPIs and derive insights"
  ]
}

,
    {
    title: "HP LIFE Data Science & Analytics Certificate",
    link: "https://drive.google.com/file/d/1tHqzyIICNDpCXAF_2finS5yFtdxBaQu9/view?usp=sharing", 
    details: [
        "Explored data-driven strategies and business decision-making",
        "Learned essential tools and skills for a data science career",
        "Understood the role of AI/ML in modern data systems",
        "Examined ethical and cybersecurity considerations in data tech"
    ]
}
// ,{
//         title: "Tata Data Visualisation Job Simulation",
//         link: "https://drive.google.com/file/d/12ALdvt0Q-OHzLy6YZSOtLFY1OY3RiCOC/view?usp=sharing",
//         details: [
//             "Created data visualizations for business insights",
//             "Prepared strategic questions for client leadership meetings",
//             "Developed visuals for executive decision making"
//         ]
//     },

//     {
//         title: "Accenture Software Engineering Virtual Simulation",
//         link: "https://drive.google.com/file/d/17JHu3_Shuex-d22SqR0CwwZWkI4sAt0c/view?usp=sharing",
//         details: [
//             "Completed modules on Software Architecture, Security, Programming",
//             "Gained hands-on experience with Testing and Agile methodologies",
//             "Developed problem-solving and collaboration skills"
//         ]
//     },
//         {
//         title: "Deloitte Australia Data Analytics Job Simulation",
//         link: "https://drive.google.com/file/d/1DzGRJMUFx7gkKkKgWdFihXwu6iVFdYen/view?usp=sharing",
//         details: [
//             "Completed data analysis and forensic technology simulation",
//             "Created data dashboard using Tableau",
//             "Used Excel for data classification and business insights"
//         ]
//     },
    
];

// About Me
window.aboutMe = {
    photo: "about-me.jpg",
    text: "I'm Arnab Mondal, a B.Tech graduate in Computer Science from Heritage Institute of Technology, specializing in Android development using Flutter and data analytics. I build intuitive, scalable mobile apps and craft meaningful insights using Power BI, Tableau, and Excel. With hands-on experience in both development and analytics, I’m passionate about creating tech-driven solutions that make an impact."
};

// CV Download Links
window.cvLinks = {
    general: "https://drive.google.com/file/d/1LVE0za71iUn-QheN9vJBTZ3q5fhZ6u5r/view?usp=sharing",
    dataAnalyst: "https://drive.google.com/file/d/1tvip_vZQHqETd2Q9BYvMumW47M77xHKb/view?usp=sharing" // Replace with your actual Data Analyst CV link
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
    title: "Data Visualization Job Simulation - Tata Group",
    date: " July 2025",
     location:'Virtual',
     experienceType:"Micro Internship",
    details: [
        "Created impactful data visualizations to support business insights",
        "Prepared strategic questions for client leadership meetings",
        "Designed visuals tailored for executive-level decision making",
        // "Certificate: https://drive.google.com/file/d/12ALdvt0Q-OHzLy6YZSOtLFY1OY3RiCOC/view?usp=sharing"
    ]
},
{
    title: "Software Engineering Job Simulation - Accenture",
    date: " June 2025",
     location:'Virtual',
     experienceType:"Micro Internship",

    details: [
        "Completed modules on software architecture, cybersecurity, and programming",
        "Gained hands-on experience with Agile methodology and software testing",
        "Developed practical problem-solving and collaboration skills",
        // "Certificate: https://drive.google.com/file/d/17JHu3_Shuex-d22SqR0CwwZWkI4sAt0c/view?usp=sharing"
    ]
},
{
    title: "Data Analytics Job Simulation - Deloitte Australia",
    date: "June 2025",
    location:'Virtual',
     experienceType:"Micro Internship",

    details: [
        "Completed data analysis and forensic technology simulation tasks",
        "Created interactive dashboards using Tableau for business insights",
        "Utilized Excel for data classification and analytical reporting",
        // "Certificate: https://drive.google.com/file/d/1DzGRJMUFx7gkKkKgWdFihXwu6iVFdYen/view?usp=sharing"
    ]
}
,
    {
        title: "Android Developer Intern - Ardent Computech Pvt. Ltd.",
        date: "June 2024 - July 2024 ",
        location: " Kolkata, West Bengal",
     experienceType:"Internship",

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
