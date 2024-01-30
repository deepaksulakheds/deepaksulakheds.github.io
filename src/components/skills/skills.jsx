import React from "react";
import "./skills.css";

const skills = [
  {
    title: "Frontend",
    list: [
      { content: "React JS", icon: "/react.svg" },
      { content: "Material UI", icon: "/mui.svg" },
      { content: "HTML", icon: "/html.svg" },
      { content: "CSS", icon: "/css.svg" },
      { content: "Bootstrap", icon: "/bootstrap.svg" },
    ],
  },
  {
    title: "Backend",
    list: [
      { content: "Node JS", icon: "/nodejs.svg" },
      { content: "JavaScript", icon: "/javascript.svg" },
      { content: "Python", icon: "/python.svg" },
      { content: "GraphQL", icon: "/graphql.svg" },
      { content: "C/C++", icon: "/cpp.svg" },
      { content: "Java", icon: "/java.svg" },
    ],
  },
  {
    title: "Database",
    list: [
      { content: "MySQL", icon: "/mysql.svg" },
      { content: "MongoDB", icon: "/mongodb.svg" },
      { content: "PostgresSQL", icon: "/pgsql.svg" },
      { content: "Redis", icon: "/redis.svg" },
    ],
  },
  {
    title: "Others",
    list: [
      { content: "Git & Github", icon: "/git.svg" },
      { content: "ApolloServer", icon: "/apollo.svg" },
    ],
  },
];

export function Skills(props) {
  return (
    <>
      <div className="skillsTitle">
        <img className="skillsIcon" src="/star.svg" />
        <h2>Skills</h2>
      </div>
      <div className="skillContainer">
        {skills.map((skill, index) => (
          <div key={index} className="subSkill">
            <h2
              style={{
                margin: "0 0 8px 0",
                color: "white",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "0.1px",
              }}
            >
              {skill.title}
            </h2>
            <div className="skillList">
              {skill.list.map((s) => (
                <div key={s.content} className="skill">
                  <img
                    src={s.icon}
                    className="skillIcon"
                    height="32"
                    width="32"
                  />
                  <p className="skillContent">{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
