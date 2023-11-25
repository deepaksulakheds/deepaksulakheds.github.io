import React from "react";
import "./projects.css";
import { CardComp } from "./muiCard";

export function Projects(props) {
  const projData = [
    {
      title: "Telematic Analytics - Zeliot",
      techUsed: "JavaScript, NodeJS, React JS, GraphQL, ApolloServer",
      image: "/telematics-1.png",
      path: "https://github.com/deepaksulakheds/Zeliot_Telematic_Project",
    },
    {
      title: "Dashboard - Zeliot Analytics",
      techUsed: "React JS, Node JS, Apollo-Server, MUI, HTML, CSS, ",
      image: "/dashboard-1.png",
      path: "https://github.com/deepaksulakheds/Zeliot-Analytics-Dashboard",
    },
    {
      title: "Face Recognition using LBPH",
      techUsed: "Python, OpenCV, Haar-Cascade Classifier, LBPH Algorithm",
      image: "/faceRecog-1.jpeg",
      path: "https://github.com/deepaksulakheds/Face-Recognition-using-LBPH",
    },
    {
      title: "Rice Mill Management System",
      techUsed: "HTML, CSS, PHP, Bootstrap 5, WAMP",
      image: "/riceMill.jpeg",
      path: "#",
    },
  ];

  return (
    <>
      <div className="projectTitle">
        <img src="/projects1.png" className="projectsIcon" />
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projData.map((project, index) => (
          <CardComp key={index} projData={project} />
        ))}
      </div>
    </>
  );
}
