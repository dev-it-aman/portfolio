import project1 from "../assets/projects/Codepair.jpeg";
import project2 from "../assets/projects/wemeet.png";
import project3 from "../assets/projects/portfolio.jpeg";

export const Roles = [
  "Full Stack Developer",
  "Back End Developer",
  "React Developer",
  "Competitive Programmer"
];

export const resume = "https://drive.google.com/file/d/1sfOysNfO9s8KhMLvSra-TaBgKMuRVPHk/view";

export const HERO_CONTENT = `👋 Hi there! I'm a passionate Full-Stack Developer at FPL Technologies (OneCard) in Pune. Since June 2023, I've been enhancing credit card processes with web apps like the Core-Simulator. My expertise includes Java, React.js, PostgreSQL, Hibernate, and Docker. Previously, I interned at Microsoft, improving the Android OneNote app with real-time collaboration features. I love tackling challenges and building efficient, scalable solutions. 🚀💻✨`;

export const ABOUT_TEXT = `👨‍💼 I'm a passionate programmer 2023 grad from IIT BHU having 1+ years of Experience with a keen interest in Data Structures and Algorithms, always striving for excellence and proactively seeking self-improvement. I enjoy tackling complex challenges and contributing to innovative solutions. Currently, I'm a key member of OneCard's core systems team, specializing in fintech solutions for the credit card industry. Previously, I interned at Microsoft's Android OneNote team, where I successfully delivered projects despite having limited prior experience in Android development. My technical skills include proficiency in Java, React.js, Hibernate, PostgreSQL, JPoS, and Docker, with a strong background in full-stack development using ReactJs, NodeJs, and Java. I am also adaptable to new technologies and a rapid learner. My problem-solving achievements include being a Knight on LeetCode with a top rating of 2056, and a 4-star coder on Codechef with a highest rating of 1940, demonstrating my expertise in competitive programming. 🔍💻💡`;

export const EXPERIENCES = [
  {
    year: "June, 2023 - Present",
    image:"https://www.fplabs.tech/Assets_FPL/FPL_Logo.svg",
    role: "Full-Stack Developer",
    company: "FPL Technologies (OneCard), Pune",
    description: [
      `Designed and implemented Core-Simulator, web application end-to-end to
       simulate the significant processes happening in credit card lifecycle for
       bank-auditing & features testing reducing operation costs and go-live time
       of new features, based on JAVA-backend & Reactjs-frontend deployed on
       Docker.`,
      `Implemented the Transaction Reversal Service for transaction reversals
       allowing credit card balance zeroization, reversals of past false credits
       bringing in INR 5 cr+ money in just 1 week of release.`,
      `Designed & implemented RestApi that mocks transaction posting scenario
       over VISA-network using ISO-8583 format allowing better Services testing.`,
      `Introduced the parsing and handling of VISA-settlement SMSData records
       reducing operational costs and customer follow-ups during OCT failures.`
    ],
    technologies: ["Java", "React.js", "Postgresql", "Hibernate", "Docker"],
  },
  {
    year: "May, 2022 - July, 2022",
    image:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    role: "Software Engineering Intern",
    company: "Microsoft Incorporation, Hyderabad",
    description: [
      `Implemented the Microsoft OneNote Notebook sharing functionality
       similar to Google Docs in the Android Microsoft OneNote application for the
       organization accounts paving the way for real-time collaboration.`,
      `Implemented the feature integrating Microsoft’s ODSP services and tech
       stack including Java, Kotlin, and extensive use of C++ native
       implementation.`
    ],
    technologies: ["Java", "Android Native", "C++"],
  }
];


export const PROJECTS = [
  {
    title: "CodePair",
    image: project1,
    description:
      [ `A Real-time Code Editor and a collaboration tool. Uses Socket.io for
        syncing code and setting up connection between client and server.`,
        `User can create a new room, share room ID with other peers, work on
        code real time. The Editor possess syntax highlighting, indentation,
        and brace matching functionality`],
    technologies: ["React", "Node.js","Express", "CodeMirror"],
  },
  {
    title: "WE-meet",
    image: project2,
    description: [ `WebRTC based Web application for Video meetings and real-time
      Chat.`,`Features include Multiple users Meetings, Chat, Share Screen,
      Recording, Sending Email Invitations, and User Authentication.`,
      `Application could handle 10 participants in single meeting with very
      low latency`],
    technologies: ["Ejs", "Express", "Peerjs", "Socket.io","Passport.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      [`A personal portfolio website showcasing projects, skills, and contact information.`],
    technologies: ["React","Tailwindcss","Framer-motion"],
  },
];

export const CONTACT = {
  address: "5, Shailesh Tower, Aundh, Pune 411007, INDIA",
  phoneNo: "+91 9057236386 ",
  email: "amanraizada01@gmail.com",
};

export const education = [
  {
    id: 0,
    img: "https://www.iitbhu.ac.in/contents/iitbhu/img/other/iit_logo_original.png",
    school: "Indian Institute of Technology, Varanasi (B.H.U)",
    date: "Aug 2019 - May 2023",
    grade: "9.10 CGPA",
    degree: "Bachelor of Technology - BTech, Mechanical Engineering",
  },
  {
    id: 1,
    img: "https://www.cbse.gov.in/images//logo.png",
    school: "Holy Mission Sr. Sec. School, Muzaffarpur, Bihar",
    date: "Apr 2016 - March 2018",
    grade: "94.60%",
    degree: "CBSE(XII), Science with Mathematics",
  },
  {
    id: 2,
    img: "https://www.cbse.gov.in/images//logo.png",
    school: "Holy Mission Sr. Sec. School, Muzaffarpur, Bihar",
    date: "April 2015 - March 2016",
    grade: "10 CGPA",
    degree: "CBSE(X)",
  },
];