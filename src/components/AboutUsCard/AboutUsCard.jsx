import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

function AboutUsCard({ person }) {
  return (
    <div>
      <Card sx={{ maxWidth: 600, borderRadius: "2vh" }}>
        <CardActionArea
          sx={{ backgroundColor: "#008170", width: "20vw", height: "54vh" }}
        >
          <CardMedia
            component="img"
            height="270"
            image={person.image}
            alt={person.name}
            sx={{ backgroundColor: "#008170" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              {person.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "white" }}>
              {person.role}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <a
                href={person.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ color: "white" }}></GitHubIcon>
              </a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default AboutUsCard;
