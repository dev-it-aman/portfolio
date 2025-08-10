import project1 from "../assets/projects/Codepair.jpeg";
import project2 from "../assets/projects/wemeet.png";
import project3 from "../assets/projects/portfolio.jpeg";
import onecardLogo from "../assets/onecard.png";

export const Roles = [
  "Full Stack Developer",
  "Back End Developer",
  "React Developer",
  "Competitive Programmer"
];

export const resume = "https://drive.google.com/file/d/1zP8pbqNTO95xJzYEjluJL3KBj9-m1M0S/view?usp=sharing";

export const HERO_CONTENT = (
    <>
      💻 SDE 2 at Dream11 | Architecting and optimizing distributed offer platforms with Java, Vert.x, Kafka, DynamoDB, and AWS — powering 20M+ RPM at sub-10 ms latency.
      <br />
      🚀 Ex-OneCard & Microsoft | Expert in system design, performance tuning, and Data Structures & Algorithms (Knight on LeetCode).
    </>
);

export const ABOUT_TEXT = (
    <>
      👨‍💼 I’m a 2023 IIT BHU graduate with ~2 years of experience building scalable, high-performance systems.
      <br /><br />
      Currently an SDE 2 at Dream11, I design, own, and optimize a distributed offers platform handling 20M+ RPM with sub-10 ms latency using Java, Vert.x, Kafka, DynamoDB, and AWS.
      <br /><br />
      Previously at OneCard, I built fintech solutions including the Core-Simulator and transaction frameworks using Java, React.js, Hibernate, PostgreSQL, JPoS, and Docker — reducing costs and accelerating feature releases. Earlier, at Microsoft, I contributed to the Android OneNote team, adding real-time collaboration features.
      <br /><br />
      Passionate about Data Structures & Algorithms, I’ve achieved Knight on LeetCode (rating 2056) and 4⭐ on CodeChef (rating 1940). I thrive on solving complex challenges, learning fast, and delivering impactful solutions. 🔍💻💡
    </>
);

export const EXPERIENCES = [
  {
    year: "September, 2024 - Present",
    image:"https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/dream11LogoWhite.webp",
    role: "Software Development Engineer 2",
    company: "Dream11, Mumbai",
    description: [
      `Core contributor to a multi-tenant Offers Platform using Vert.x,
       DynamoDB, and Kafka, enabling plug-and-play integration for 3+ product
       teams via offer logic abstraction.`,
      `Own the Fetch User Offers API (peak 6.5M RPM, p95 6ms, p99 12ms)
       end-to-end — from design to implementation and performance tuning.`,
      `Collaborated on HLD/LLD, service boundaries, and schema design with a
       senior engineer, ensuring efficient queries and low latency at scale.`,
      `Led service optimization via Gatling-based load testing (Torque), from
       single-instance benchmarks to 35M RPM simulating real-time match flow.`,
      `Reduced product go-live effort from 60 man-days to 15 man-days, saving
       engineering bandwidth and accelerating delivery cycles.`
    ],
    technologies: ["Java","Vert.x", "DynamoDB", "Kafka", "Aerospike", "Node.js", "AWS"],
  },
  {
    year: "June, 2023 - September, 2024",
    image: onecardLogo,
    role: "Full-Stack Developer",
    company: "FPL Technologies (OneCard), Pune",
    description: [
      `Engineered Universal Transaction Posting Service for all the non-network
       involved transactions catering to One Card CMS and LMS transactions,
      reducing code duplication by 40% and enhancing project repository
       cleanliness, maintainability and developer efficiency.`,
      `Developed and launched Core-Simulator, a comprehensive web application
      using JAVA backend and ReactJS frontend, deployed on Docker,reducing
      operational costs by 25% and cutting go-live time for new features by 40%.`,
       `Designed & implemented RestApi that mocks transaction posting scenario
       over VISA-network using ISO-8583 format allowing better Transaction Authorization
       Services testing.`,
      `Implemented the Transaction Reversal Service for transaction reversals
       allowing credit card balance zeroization, reversals of past false credits
       bringing in INR 5 cr+ money in just 1 week of release.`,
      `Introduced the parsing and handling of VISA-settlement SMSData records
       reducing operational costs and customer follow-ups during OCT failures.`
    ],
    technologies: ["Java","JPoS", "React.js", "Postgresql", "Hibernate", "Docker"],
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
  address: "M-1402, Godrej Central L-R Tower, Shell Colony, Chembur, Mumbai 400071, INDIA",
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