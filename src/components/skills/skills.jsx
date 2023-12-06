import React from "react";
import "./skills.css";

const skills = [
  {
    title: "Frontend",
    list: [
      { content: "React JS", icon: "/react.png" },
      { content: "MUI", icon: "/mui.png" },
      { content: "Bootstrap", icon: "/bootstrap.png" },
      { content: "HTML", icon: "/html.png" },
      { content: "CSS", icon: "/CSS.png" },
    ],
  },
  {
    title: "Backend",
    list: [
      { content: "Node JS", icon: "/nodejs.png" },
      { content: "JavaScript", icon: "/javascript.png" },
      { content: "Python", icon: "/python.png" },
      { content: "GraphQL", icon: "/graphql.png" },
      { content: "C/C++", icon: "/c.png" },
      { content: "Java", icon: "/java.png" },
    ],
  },
  {
    title: "Database",
    list: [
      { content: "MySQL", icon: "/mysql.png" },
      { content: "MongoDB", icon: "/mongoDB.png" },
      { content: "PostgresSQL", icon: "/postgresql.png" },
      { content: "Redis", icon: "/redis.png" },
    ],
  },
  {
    title: "Others",
    list: [
      { content: "Git & Github", icon: "/git.png" },
      { content: "ApolloServer", icon: "/apollo.png" },
    ],
  },
];

export function Skills(props) {
  return (
    <>
      <div className="skillsTitle">
        <img className="skillsIcon" src="/star1.png" />
        <h2>Skills</h2>
      </div>
      <div className="skillContainer">
        {skills.map((skill, index) => (
          <div key={index} className="subSkill">
            <h2 style={{ margin: "0 0 8px 0", color: "white" }}>
              <u>{skill.title}</u>{" "}
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
