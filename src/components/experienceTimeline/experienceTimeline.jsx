import * as React from "react";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import "./experienceTimeline.css";

const experienceData = [
  {
    companyTitle: "Zeliot Connected Services Pvt. Ltd.",
    titles: [
      {
        title: "Software Engineer - 1",
        duration: "Sep 2023 - Present",
      },
      {
        title: "Full-Stack Developer - Intern",
        duration: "June 2023 - Aug 2023",
      },
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <>
      <div className="experienceTitle">
        <img src="/experience.svg" className="experienceIcon" />
        <h2>Professional Experience</h2>
      </div>
      <div>
        {experienceData.map((experience) => (
          <div className="experienceContainer" key={experience.companyTitle}>
            <h3 className="timelineCompanyTitle" key={experience.companyTitle}>
              {experience.companyTitle}
            </h3>
            {experience.titles.map((titles) => (
              <div
                key={titles.title}
                style={{ display: "flex", marginLeft: "12.5vw" }}
              >
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <div className="timelineItem">
                  <p className="timelineTitle">{titles.title}</p>
                  <p style={{ margin: 0, textIndent: "12px" }}>
                    - {titles.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
