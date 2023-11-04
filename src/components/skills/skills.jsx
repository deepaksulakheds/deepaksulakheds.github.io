import React from "react";
import "./skills.css";
const colors = ["#800080", "#91915f", "#008000", "#43c1c1"];
const skills = [
  { title: "Frontend", list: ["HTML", "CSS", "Bootstrap", "React", "MUI"] },
  {
    title: "Backend",
    list: ["C/C++", "Java", "NodeJS", "GraphQL", "Python"],
  },

  { title: "Database", list: ["MySQL", "MongoDB", "PostgresSQL", "Redis"] },
  { title: "Others", list: ["Git & Github", "ApolloServer"] },
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
                <p key={s} className="skill">
                  {s}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
