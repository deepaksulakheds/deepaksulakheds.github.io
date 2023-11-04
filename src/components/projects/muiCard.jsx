import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./projects.css";

export function CardComp(props) {
  //   console.log(props);
  return (
    <Card
      sx={{
        "border-radius": "8px",
        color: "White",
        maxWidth: 380,
        minWidth: "200px",
        width: "25vw",
        height: "10%",
        background: "rgba(255, 255, 255, 0.35)",
        "-webkit-backdrop-filter": "blur(8px)",
        "backdrop-filter": "blur(8px)",
        // border: "2px solid rgba(224, 221, 221, 0.753)",
      }}
    >
      <CardActionArea href={props.projData.path} className="cardAction">
        <CardMedia
          component="img"
          height="180"
          image={props.projData.image}
          alt="project image"
        />
        <CardContent style={{ padding: "10px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {props.projData.title}
          </Typography>
          <Typography
            // gutterBottom
            variant="body2"
            color="text.secondary"
            style={{ fontWeight: "bold" }}
          >
            {props.projData.techUsed}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
