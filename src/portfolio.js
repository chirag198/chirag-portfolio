import emoji from "react-easy-emoji";

// Splash Screen Animation
const splashScreen = {
  enabled: true,
  animation: require("./assets/lottie/splashAnimation"),
  duration: 2000,
};

// Greeting Section
const illustration = {
  animated: true,
};
const greeting = {
  username: "Chirag Gulati",
  title: "Hi all, I'm Chirag",
  subTitle: emoji(
    "Result-driven Senior Software Engineer and Tech Lead with 6+ years of experience building scalable solutions and leading teams.\nExpertise in Python, Django, Kubernetes, and cloud security. Lover of DevOps, cloud automation, and solving complex challenges!"
  ),
  resumeLink:
    "https://drive.google.com/your-resume-file-link-here", // <-- Add your online CV
  displayGreeting: true,
};

// Your Social Media Links
const socialMediaLinks = {
  github: "https://github.com/chirag198",
  linkedin: "https://linkedin.com/in/chirag-gulati-695620149/",
  gmail: "cgulati198@gmail.com",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Senior Engineer | Tech Lead | Cloud, DevOps, and SaaS Platform Specialist",
  skills: [
    emoji("⚡ Design & build cloud security and DevOps platforms using Python, Django, Kubernetes"),
    emoji("⚡ Lead engineering teams—hiring, mentoring, reviewing code, ensuring best practices"),
    emoji("⚡ Architect secure multi-tenant SaaS solutions with RBAC & cloud integrations"),
    emoji("⚡ Deep experience integrating open-source in production (Trivy, AWS Security Hub, etc.)")
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git / GitHub",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha University, New Delhi",
      subHeader: "Bachelor of Technology, 2015-2019",
      duration: "2015 - 2019",
      desc: "Graduated with 8.5 CGPA",
      descBullets: ["Participated in hackathons, built cloud and security projects"]
    }
  ]
};

// Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Accuknox",
      date: "Nov 2022 – Present",
      desc: "Led the engineering/devops for Accuknox's Cloud Security Posture Management (CSPM), with deep Kubernetes and Linux DevSecOps focus.",
      descBullets: [
        "Architected multi-tenancy user management & RBAC for SaaS",
        "Conducted regular code reviews, mentored, and hired engineers",
        "Integrated Trivy, AWS Security Hub, CloudSploit, et al. into core cloud platform"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Pectus Finance GMBH",
      date: "Jun 2022 – Nov 2022",
      desc: "Built serverless APIs for financial data, prediction microservices, and custom KPI tools for finance.",
      descBullets: [
        "Optimized data uploads (handled 500k+ record files)",
        "Developed KPI builder for custom company metrics"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Cashify.in",
      date: "Oct 2019 – Jun 2022",
      desc:
        "Built scalable Django REST platforms, deployed AWS cloud systems, and led integration of payment, auth, and mapping services."
    }
  ]
};

// Projects (add replace images as needed in /src/assets/images/)
const bigProjects = {
  title: "Projects",
  subtitle: "Key Projects",
  projects: [
    {
      image: require("./assets/images/accuknoxLogo.png"), // Upload your project logo to /images/
      projectName: "Accuknox Cloud Security",
      projectDesc: "Cloud security management, vulnerability detection, and automation for Kubernetes and cloud platforms.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://accuknox.com"
        }
      ]
    },
    {
      image: require("./assets/images/screenproLogo.png"),
      projectName: "ScreenPro",
      projectDesc: "On-demand mobile repair app with expert doorstep service.",
      footerLink: [
        {
          name: "Play Store",
          url:
            "https://play.google.com/store/apps/details?id=in.cashify.screenpro"
        }
      ]
    },
    {
      image: require("./assets/images/phoneshopLogo.png"),
      projectName: "PhoneShop",
      projectDesc: "App for phone shop owners—manage inventory, sales, GST, and marketing.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=co.phoneshop.app"
        }
      ]
    }
  ],
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in collaborating or want to connect? Drop me a line!",
  number: "+91 999 964 3553",
  email_address: "cgulati198@gmail.com"
};

const isHireable = true;

// (Other minor sections can remain as original or removed if not needed)

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
  isHireable
};
