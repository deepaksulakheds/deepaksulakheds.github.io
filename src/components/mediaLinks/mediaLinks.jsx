import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import Tooltip from "@mui/material/Tooltip";

import "./mediaLinks.css";

export function MediaLinks() {
  const contactDetails = [
    {
      comp: <MailIcon fontSize="medium" className="icons" />,
      anchor: null,
      toolTip: "email@gmail.com",
    },
    {
      comp: <CallIcon fontSize="medium" className="icons" />,
      anchor: null,
      toolTip: "Call",
    },
    {
      comp: <LinkedInIcon fontSize="medium" className="icons" />,
      anchor: "//www.linkedin.com/in/deepaksulakheds/",
      toolTip: "Deepak Sulakhe | LinkedIn",
    },
    {
      comp: <GitHubIcon fontSize="medium" className="icons" />,
      anchor: "//www.github.com/deepaksulakheds",
      toolTip: "Deepak Sulakhe | GitHub",
    },
  ];

  return (
    <div className="mediaLinks">
      {contactDetails.map((item, key) => (
        <Tooltip key={item.toolTip} title={item.toolTip} placement="right">
          <a href={item.anchor}>{item.comp}</a>
        </Tooltip>
      ))}
    </div>
  );
}
