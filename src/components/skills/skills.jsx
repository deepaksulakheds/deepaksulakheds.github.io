import React from "react";
import "./skills.css";
const colors = ["#800080", "#91915f", "#008000", "#43c1c1"];
const skills = [
  {
    title: "Frontend",
    list: [
      { content: "HTML", icon: "/html.png" },
      { content: "CSS", icon: "/CSS.png" },
      { content: "Bootstrap", icon: "/bootstrap.png" },
      { content: "React", icon: "/react.png" },
      { content: "MUI", icon: "/mui.png" },
    ],
  },
  {
    title: "Backend",
    list: [
      { content: "C/C++", icon: "/c.png" },
      { content: "Java", icon: "/java.png" },
      { content: "JavaScript", icon: "/javascript.png" },
      { content: "Node JS", icon: "/nodejs.png" },
      { content: "GraphQL", icon: "/graphql.png" },
      { content: "Python", icon: "/python.png" },
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
      <h2 className="skillsTitle">Skills</h2>
      <div className="skillContainer">
        {skills.map((skill, index) => (
          <div key={index} className="subSkill">
            <h2 style={{ margin: "0 0 8px 0", color: "white" }}>
              {skill.title}{" "}
            </h2>
            <div className="skillList">
              {skill.list.map((s) => (
                <div key={s.content} className="skill">
                  <img src={s.icon} className="skillIcon" />
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
