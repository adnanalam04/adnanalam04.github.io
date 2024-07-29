import React from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaTools, FaUserShield, FaHandsHelping, FaCode, FaChartLine, FaLightbulb, FaBriefcase } from "react-icons/fa";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-circular-progressbar/dist/styles.css';
import "../styles/about.css";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const profileDetails = [
    { icon: "🔐", text: "Specializing in offensive security and penetration testing" },
    { icon: "🌐", text: "Experienced in securing web applications and cloud infrastructures" },
    { icon: "🔍", text: "Skilled in digital forensics and incident response" },
    { icon: "🧠", text: "Passionate about continuous learning and staying ahead of cyber threats" },
    { icon: "🤝", text: "Committed to sharing knowledge and mentoring aspiring cybersecurity professionals" }
  ];

  const coreCompetencies = [
    { title: "Penetration Testing", icon: "🎯", description: "Expert in identifying vulnerabilities and conducting ethical hacking" },
    { title: "Vulnerability Assessment", icon: "🔍", description: "Proficient in scanning and evaluating system weaknesses" },
    { title: "Cloud Security", icon: "☁️", description: "Experienced in securing AWS, Azure, and Google Cloud environments" },
    { title: "Network Security", icon: "🌐", description: "Skilled in designing and implementing secure network architectures" },
    { title: "Web Application Security", icon: "🔒", description: "Adept at identifying and mitigating OWASP Top 10 vulnerabilities" },
    { title: "Digital Forensics", icon: "🔬", description: "Proficient in collecting and analyzing digital evidence" },
    { title: "Malware Analysis", icon: "🦠", description: "Experienced in reverse engineering and analyzing malicious software" },
    { title: "Exploit Development", icon: "⚡", description: "Skilled in creating and testing custom exploits" }
  ];

  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "Kali Linux", level: 95 },
    { name: "Burp Suite", level: 85 },
    { name: "Metasploit", level: 80 },
    { name: "Wireshark", level: 85 },
    { name: "Nmap", level: 90 },
    { name: "SIEM Tools", level: 75 },
    { name: "Docker", level: 70 }
  ];

  return (
    <Layout>
      <ParallaxProvider>
        <motion.div 
          className="about-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Parallax className="parallax-header" y={[-20, 20]} tagOuter="figure">
            <motion.h1 variants={itemVariants}>About Me</motion.h1>
            <motion.p className="intro" variants={itemVariants}>
              Cybersecurity Specialist | Ethical Hacker | Digital Forensics Expert
            </motion.p>
          </Parallax>
          
          <motion.section className="profile" variants={itemVariants}>
            <h2><FaUserShield /> Profile</h2>
            <p className="profile-summary">
              Passionate cybersecurity professional with a strong foundation in ethical hacking, 
              digital forensics, and secure software development. Committed to protecting 
              digital assets and empowering organizations against evolving cyber threats.
            </p>
            <div className="profile-details">
              {profileDetails.map((detail, index) => (
                <motion.div key={index} className="profile-item" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <span className="profile-icon">{detail.icon}</span>
                  <p>{detail.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="competencies" variants={itemVariants}>
            <h2><FaTools /> Core Competencies</h2>
            <div className="competencies-grid">
              {coreCompetencies.map((competency, index) => (
                <motion.div key={index} className="competency" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <span className="competency-icon">{competency.icon}</span>
                  <h3>{competency.title}</h3>
                  <p>{competency.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Parallax className="parallax-section" y={[-10, 10]} tagOuter="figure">
            <motion.section className="technical-skills" variants={itemVariants}>
              <h2><FaCode /> Technical Skills</h2>
              <div className="skills-grid">
                {technicalSkills.map((skill, index) => (
                  <motion.div key={index} className="skill-item" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                    <CircularProgressbar
                      value={skill.level}
                      text={`${skill.level}%`}
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: `rgba(0, 255, 255, ${skill.level / 100})`,
                        textColor: '#00ffff',
                        trailColor: '#2a3749',
                      })}
                    />
                    <h4>{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </Parallax>

          <motion.section className="education" variants={itemVariants}>
            <h2><FaGraduationCap /> Education</h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'var(--card-bg-color)', color: 'var(--text-color)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--card-bg-color)' }}
                date="Aug 2021 - Present"
                iconStyle={{ background: 'var(--secondary-color)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">B.Tech in Computer Science and Cybersecurity</h3>
                <h4 className="vertical-timeline-element-subtitle">Sharda University</h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'var(--card-bg-color)', color: 'var(--text-color)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--card-bg-color)' }}
                date="Jul 2019 - Jul 2021"
                iconStyle={{ background: 'var(--secondary-color)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">Diploma in Computer Science and Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle">Arunachal University of Studies</h4>
                <p>GPA: 9.1</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'var(--card-bg-color)', color: 'var(--text-color)' }}
                contentArrowStyle={{ borderRight: '7px solid var(--card-bg-color)' }}
                date="Nov 2019 - Nov 2020"
                iconStyle={{ background: 'var(--secondary-color)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">Diploma in Cyber Security</h3>
                <h4 className="vertical-timeline-element-subtitle">CRAW Cyber Security Institute, Delhi</h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </motion.section>

          <motion.section className="certifications" variants={itemVariants}>
            <h2><FaCertificate /> Certifications</h2>
            <div className="certifications-grid">
              {[
                { title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", date: "May 2023", icon: "🏅" },
                { title: "Vulnerability Assessment and Penetration Testing (VAPT)", date: "Oct 2022", icon: "🛡️" },
                { title: "Computer Hacking Forensic Investigator (CHFI)", date: "Jul 2021", icon: "🕵️" },
                { title: "Certified Ethical Hacker (CEH)", date: "Oct 2020", icon: "🎓" },
                { title: "Certified Web Penetration Tester (CWPT)", date: "Jul 2020", icon: "🌐" }
              ].map((cert, index) => (
                <motion.div key={index} className="certification" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <span className="cert-icon">{cert.icon}</span>
                  <h3>{cert.title}</h3>
                  <p>{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Parallax className="parallax-section" y={[-10, 10]} tagOuter="figure">
            <motion.section className="achievements" variants={itemVariants}>
              <h2><FaHandsHelping /> Leadership & Achievements</h2>
              <ul>
                <li>
                  <strong>President, OWASP Sharda University Student Chapter</strong>
                  <p>Leading initiatives to promote web application security awareness (Apr 2023 - Present)</p>
                </li>
                <li>
                  <strong>Elite Hacker, HackTheBox</strong>
                  <p>Demonstrated advanced penetration testing skills on the platform (Feb 2022 - Present)</p>
                </li>
                <li>
                  <strong>Top 1% Ranked, TryHackMe</strong>
                  <p>Consistently high performance in cybersecurity challenges (Sep 2021 - Present)</p>
                </li>
                <li>
                  <strong>Lead, Cyber Pirates Club at Sharda University</strong>
                  <p>Organized cybersecurity workshops and capture-the-flag events (Feb 2023 - May 2023)</p>
                </li>
              </ul>
            </motion.section>
          </Parallax>

          <motion.section className="projects" variants={itemVariants}>
            <h2><FaLightbulb /> Notable Projects</h2>
            <div className="projects-grid">
              {[
                { title: "Secure Code Review Tool", description: "Developed an automated tool for identifying security vulnerabilities in source code", icon: "🔍" },
                { title: "IoT Security Framework", description: "Created a comprehensive security framework for Internet of Things devices", icon: "🌐" },
                { title: "Malware Analysis Platform", description: "Built a sandboxed environment for safe analysis of malicious software", icon: "🦠" },
                { title: "Blockchain-based Identity Management", description: "Implemented a decentralized identity management system using blockchain technology", icon: "🔗" }
              ].map((project, index) => (
                <motion.div key={index} className="project" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                  <span className="project-icon">{project.icon}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <Parallax className="parallax-section" y={[-10, 10]} tagOuter="figure">
            <motion.section className="professional-experience" variants={itemVariants}>
              <h2><FaBriefcase /> Professional Experience</h2>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'var(--card-bg-color)', color: 'var(--text-color)' }}
                  contentArrowStyle={{ borderRight: '7px solid var(--card-bg-color)' }}
                  date="Jun 2023 - Present"
                  iconStyle={{ background: 'var(--accent-color)', color: '#fff' }}
                  icon={<FaBriefcase />}
                >
                  <h3 className="vertical-timeline-element-title">Cybersecurity Intern</h3>
                  <h4 className="vertical-timeline-element-subtitle">TechSecure Solutions, Delhi</h4>
                  <p>
                    Assisting in vulnerability assessments and penetration testing for client networks and applications.
                    Developing automated scripts for security auditing and reporting.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'var(--card-bg-color)', color: 'var(--text-color)' }}
                  contentArrowStyle={{ borderRight: '7px solid var(--card-bg-color)' }}
                  date="Jan 2023 - May 2023"
                  iconStyle={{ background: 'var(--accent-color)', color: '#fff' }}
                  icon={<FaBriefcase />}
                >
                  <h3 className="vertical-timeline-element-title">Freelance Security Consultant</h3>
                  <h4 className="vertical-timeline-element-subtitle">Various Clients</h4>
                  <p>
                    Conducted security assessments for small businesses and startups.
                    Provided recommendations for improving overall security posture.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </motion.section>
          </Parallax>
        </motion.div>
      </ParallaxProvider>
    </Layout>
  );
};

export default AboutPage;
