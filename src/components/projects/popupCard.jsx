import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./popupCard.css";

const projData = [
  {
    title: "Telematic Analytics - Zeliot",
    desc: "Collaborative work on telematics and fleet data analysis for improved performance and efficiency.",
    techUsed: "JavaScript, NodeJS, React JS, GraphQL, ApolloServer",
    image: "/fleet.jpg",
    path: "https://github.com/deepaksulakheds/Zeliot_Telematic_Project",
  },
  {
    title: "Zeliot Analytics Dashboard",
    techUsed: "React JS, Node JS, Apollo-Server, MUI, HTML, CSS, ",
    desc: "Visualize and analyze fleet data with this interactive dashboard.",
    image: "/dashboard-1.png",
    path: "https://github.com/deepaksulakheds/Zeliot-Analytics-Dashboard",
  },
  {
    title: "Face Recognition using LBPH",
    desc: "Project to demonstrate Face Recognition individually or collectively.",
    techUsed: "Python, OpenCV, Haar-Cascade Classifier, LBPH Algorithm",
    image: "/face-rec.jpg",
    path: "https://github.com/deepaksulakheds/Face-Recognition-using-LBPH",
  },
  {
    title: "Rice Mill Management System",
    desc: "Simple website that helps to automate the day-today operations of a rice mill.",
    techUsed: "HTML, CSS, PHP, Bootstrap 5, WAMP",
    image: "/riceMill.jpeg",
    path: "#",
  },
];

export function PopupCard(props) {
  return (
    <>
      {projData.map((project) => (
        <div
          key={project.title}
          style={{
            background: `url(${project.image})`,
            backgroundSize: "cover",
          }}
          className="card-container"
        >
          <div className="content">
            <p className="heading">{project.title}</p>
            <p className="projectDesc">{project?.desc}</p>
            <a href={project.path} className="projectLink">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
