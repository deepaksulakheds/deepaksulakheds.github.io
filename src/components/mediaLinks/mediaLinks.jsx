import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import "./mediaLinks.css";

export function MediaLinks() {
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

  return (
    <div className="mediaLinks">
      {contactDetails.map((item, key) => (
        <a href={item.anchor} key={key}>
          {item.comp}
        </a>
      ))}
    </div>
  );
}
