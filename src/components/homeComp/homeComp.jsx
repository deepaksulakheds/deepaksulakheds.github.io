import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
// import styles from "./homeComp.css";
import "./homeComp.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { CustomTimeline } from "../timeline/timeline";

const contactDetails = [
  {
    comp: <MailIcon fontSize="medium" className="icons" />,
    anchor: null,
  },
  {
    comp: <CallIcon fontSize="medium" className="icons" />,
    anchor: null,
  },
  {
    comp: <LinkedInIcon fontSize="medium" className="icons" />,
    anchor: "//www.linkedin.com/in/deepaksulakheds/",
  },
  {
    comp: <GitHubIcon fontSize="medium" className="icons" />,
    anchor: "//www.github.com/deepaksulakheds",
  },
];

export function HomeComp() {
  useEffect(() => {
    document.title = "Deepak Sulakhe";
  }, []);

  return (
    <Grid className="homeContainer">
      <Grid className="midContainer">
        <div className="titleCard">
          <img src="/deepak-nobg.png" alt="profile" className="profileImage" />
          <div className="nameNDesc">
            <span className="colorName">Deepak Sulakhe</span>
            <h3 className="jobTitle">Software Engineer 1</h3>
          </div>
        </div>
        <h2 className="about">
          Seeking an entry level position in an organization that offers good
          growth and utilizes my skills & knowledge to work for the growth of
          the organization. Dedicated to continuously enhancing my skills and
          knowledge, and I'm enthusiastic about contributing to my team's
          success while pursuing new challenges.
        </h2>
        <a href="/resp.pdf" className="downloadBtn">
          Download CV
        </a>
      </Grid>
      <CustomTimeline />
    </Grid>
  );
}

