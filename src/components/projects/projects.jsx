import React from "react";
import "./projects.css";
import { CardComp } from "./muiCard";
import { PopupCard } from "./popupCard";

export function Projects(props) {
  const projData = [
    {
      title: "Telematic Analytics - Zeliot",
      techUsed: "JavaScript, NodeJS, React JS, GraphQL, ApolloServer",
      image: "/fleet.jpg",
      path: "https://github.com/deepaksulakheds/Zeliot_Telematic_Project",
    },
    {
      title: "Dashboard - Zeliot Analytics",
      techUsed: "React JS, Node JS, Apollo-Server, MUI, HTML, CSS, ",
      image: "/dashboard2.png",
      path: "https://github.com/deepaksulakheds/Zeliot-Analytics-Dashboard",
    },
    {
      title: "Face Recognition using LBPH",
      techUsed: "Python, OpenCV, Haar-Cascade Classifier, LBPH Algorithm",
      image: "/face-rec.jpg",
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
        <img src="/projects.svg" className="projectsIcon" />
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {/* {projData.map((project, index) => (
          <CardComp key={index} projData={project} />
        ))} */}
        <PopupCard />
      </div>
    </>
  );
}
