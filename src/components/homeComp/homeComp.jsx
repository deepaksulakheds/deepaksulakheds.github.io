import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import "./homeComp.css";
import { CustomTimeline } from "../timeline/timeline";

export function HomeComp() {
  return (
    <Grid className="homeContainer">
      <Grid className="midContainer">
        <div className="titleCard">
          <img src="/deepak-nobg.png" alt="profile" className="profileImage" />
          <div className="nameNDesc">
            <div className="colorName">Deepak Sulakhe</div>
            <h3 className="jobTitle">Software Engineer 1</h3>
          </div>
        </div>
        <h3 className="about">
          To be a part of an organization that provides ample opportunities for
          professional and personal growth, where i can use my skills for the
          success of the organization with continuous learning and dedication.
        </h3>
        <a href="Deepak-Sulakhe-Resume.pdf" className="downloadBtn">
          Download CV
        </a>
      </Grid>
      <CustomTimeline />
    </Grid>
  );
}
