/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chirag Gulati",
  title: "Hi all, I'm Chirag",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with expertise in full-stack development, cloud technologies, and modern frameworks. I love building scalable applications and solving complex problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/your-resume-link-here/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/chirag198",
  linkedin: "https://www.linkedin.com/in/chirag-gulati/",
  gmail: "chirag.gulati@example.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO LOVES TO EXPLORE CUTTING-EDGE TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop responsive and interactive web applications using modern frameworks"
    ),
    emoji("⚡ Build scalable backend services and APIs"),
    emoji(
      "⚡ Cloud deployment and DevOps practices using AWS, Docker, and Kubernetes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Your University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "2018 - 2022",
      desc: "Focused on software engineering, algorithms, and system design.",
      descBullets: [
        "Completed coursework in Data Structures, Algorithms, and Software Engineering",
        "Participated in coding competitions and hackathons"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Tech Company",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2022 – Present",
      desc: "Developing scalable web applications and contributing to full-stack development projects.",
      descBullets: [
        "Built responsive web applications using React.js and Node.js",
        "Implemented RESTful APIs and worked with cloud deployment"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Previous Company",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Summer 2021",
      desc: "Gained hands-on experience in software development and collaborated with senior developers on various projects."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Portfolio Website",
      projectDesc: "A responsive portfolio website built with React.js showcasing my skills and projects",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chirag198.github.io/chirag-portfolio/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Web Application",
      projectDesc: "A full-stack web application with modern UI/UX and backend API integration",
      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Cool Stuff that I have accomplished!",

  achievementsCards: [
    {
      title: "Full Stack Development Certificate",
      subtitle:
        "Completed comprehensive full-stack development certification covering modern web technologies.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Certificate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    },
    {
      title: "Cloud Computing Certificate",
      subtitle:
        "Achieved certification in cloud computing and deployment strategies.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Cloud Certificate Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love sharing my knowledge and experiences through writing about technology and development.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Getting Started with React.js",
      description:
        "A comprehensive guide for beginners to start their journey with React.js development."
    },
    {
      url: "#",
      title: "Best Practices in Full Stack Development",
      description:
        "Sharing insights and best practices I've learned in full-stack development."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCES 😊"
  ),

  talks: [
    {
      title: "Modern Web Development Practices",
      subtitle: "Talk at Local Tech Meetup",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY AND DEVELOPMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "#"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-XXXXXXXXXX",
  email_address: "chirag.gulati@example.com"
};

// Twitter Section

const twitterDetails = {
  userName: "chirag_gulati", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
