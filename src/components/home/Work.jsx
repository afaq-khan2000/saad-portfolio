import React, { useState } from "react";
import { Case1, Case2, Case3, Case4, Case5, Case6, Case7, Case8, Case9 } from "../../assets/images";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./styles/styles.css";
import WorkCard from "./WorkCard";

function Work() {
  const [isHovered, setIsHovered] = useState({
    index: null,
    flag: false,
  });

  const workData = [
    {
      id: 1,
      title: "Afrock",
      description: "A dynamic platform for African-inspired fashion, built with React and Node.js. Features include custom shopping carts, secure payments, and seamless user authentication.",
      category: "E-Commerce",
      hashtags: ["#React", "#NodeJS", "#Fashion", "#Ecommerce"],
      image: Case1,
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "6 months",
      completionDate: "June 2023",
    },
    {
      id: 2,
      title: "FitPro",
      description: "A fitness app for tracking workouts and meals, integrating wearables and real-time cloud syncing. Built with React Native for cross-platform compatibility.",
      category: "Fitness",
      hashtags: ["#ReactNative", "#Health", "#Fitness", "#Mobile"],
      image: Case2,
      techStack: ["React Native", "Firebase", "Google Fit API"],
      duration: "4 months",
      completionDate: "March 2023",
    },
    {
      id: 3,
      title: "InsightX",
      description: "An advanced data visualization platform for predictive analytics. Uses Python and machine learning algorithms to analyze large datasets.",
      category: "Analytics",
      hashtags: ["#Python", "#DataScience", "#ML", "#Analytics"],
      image: Case3,
      techStack: ["Python", "Pandas", "Scikit-learn", "Dash"],
      duration: "8 months",
      completionDate: "December 2022",
    },
    {
      id: 4,
      title: "ChatAI",
      description: "A smart AI chatbot for automating customer support with machine learning. Integrated with Slack and WhatsApp for real-time interactions.",
      category: "AI",
      hashtags: ["#AI", "#Chatbot", "#Python", "#NLP"],
      image: Case4,
      techStack: ["Python", "TensorFlow", "Dialogflow", "Twilio"],
      duration: "5 months",
      completionDate: "July 2023",
    },
    {
      id: 5,
      title: "Homematchx",
      description: "A unified design system for a SaaS platform, providing consistency across web and mobile interfaces with reusable components.",
      category: "UI/UX",
      hashtags: ["#UI", "#UX", "#DesignSystem", "#Figma"],
      image: Case5,
      techStack: ["Figma", "Sketch", "Adobe XD"],
      duration: "3 months",
      completionDate: "May 2023",
    },
    {
      id: 6,
      title: "RealConnect",
      description: "A real-time messaging API supporting web sockets for instant communication, with a focus on scalability and secure data transfer.",
      category: "Messaging",
      hashtags: ["#NodeJS", "#Express", "#API", "#WebSockets"],
      image: Case6,
      techStack: ["Node.js", "Express", "WebSockets", "Redis"],
      duration: "7 months",
      completionDate: "August 2023",
    },
    {
      id: 7,
      title: "DeployNow",
      description: "A robust CI/CD pipeline built for a microservices architecture on AWS, automating testing and deployment for seamless development.",
      category: "DevOps",
      hashtags: ["#AWS", "#Docker", "#CI/CD", "#Kubernetes"],
      image: Case7,
      techStack: ["AWS", "Docker", "Jenkins", "Kubernetes"],
      duration: "5 months",
      completionDate: "April 2023",
    },
    {
      id: 8,
      title: "SecureNet",
      description: "A toolkit for penetration testing and vulnerability assessment, featuring encryption analysis and secure code auditing for robust cybersecurity.",
      category: "Cybersecurity",
      hashtags: ["#Security", "#PenTesting", "#Encryption", "#Network"],
      image: Case8,
      techStack: ["Kali Linux", "Metasploit", "Wireshark", "OpenSSL"],
      duration: "6 months",
      completionDate: "September 2023",
    },
    {
      id: 9,
      title: "VoteChain",
      description: "A decentralized voting platform built on blockchain to ensure secure, transparent, and immutable election processes.",
      category: "Blockchain",
      hashtags: ["#Blockchain", "#Crypto", "#Ethereum", "#SmartContracts"],
      image: Case9,
      techStack: ["Solidity", "Ethereum", "Web3.js", "IPFS"],
      duration: "9 months",
      completionDate: "November 2023",
    },
  ];

  return (
    <Box
      id="work"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        // width: "calc(100vw - 20px)",
        // width: { xs: "100vw", md: "calc(100vw - 20px)" },
        backgroundColor: "primary.background",
        mt: "100px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ py: { xs: "10px", md: "30px" }, px: { xs: "10px", lg: "90px" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
              flexDirection: "column",
              gap: "10px",
              my: { xs: "20px", md: "60px" },
              textAlign: { xs: "left", md: "center" },
              mb: { xs: "80px", md: "0px" },
            }}
            data-aos="fade-up"
          >
            <Typography
              variant="bebus"
              sx={{
                color: "secondary.main",
                fontSize: { md: "36px", xs: "24px" },
                letterSpacing: "-1px",
                fontWeight: 700,
              }}
            >
              SELECTED WORK
            </Typography>
            <Typography
              variant="normal"
              sx={{
                color: "secondary.main",
                fontSize: { md: "17px", xs: "14px" },
                fontWeight: 700,
              }}
            >
              My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.
            </Typography>
          </Box>

          <Grid container spacing={10}>
            {workData.map((work, i) => (
              <WorkCard work={work} i={i} key={i} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Work;
