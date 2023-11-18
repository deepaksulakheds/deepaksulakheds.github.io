import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import "./experienceTimeline.css";

const experienceData = [
  {
    title: "Software Engineer - 1",
    companyTitle: "Zeliot Connected Services Pvt. Ltd.",
    duration: "Sep 2023 - Present",
  },
  {
    title: "Full-Stack Developer - Intern",
    companyTitle: "Zeliot Connected Services Pvt. Ltd.",
    duration: "June 2023 - Aug 2023",
  },
];

export function ExperienceTimeline() {
  return (
    <>
      <div className="experienceTitle">
        <img src="/experience.png" className="experienceIcon" />
        <h2>Professional Experience</h2>
      </div>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
        style={{ marginLeft: "2vw" }}
      >
        {experienceData.map((expertience) => (
          <TimelineItem key={expertience.duration}>
            <TimelineOppositeContent color="white">
              {expertience.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ fontFamily: "Ubuntu", width: "100%" }}>
              <div className="timelineItem">
                <h2 className="timelineTitle">{expertience.title}</h2>
                <h3 className="timelineCompanyTitle">
                  - {expertience.companyTitle}
                </h3>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
