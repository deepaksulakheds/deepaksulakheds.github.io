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
        borderRadius: "8px",
        color: "White",
        maxWidth: 380,
        minWidth: "300px",
        width: "20vw",
        height: "10%",
        background: "rgba(255, 255, 255, 0.35)",
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
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
