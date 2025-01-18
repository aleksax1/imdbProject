import React, { useEffect, useRef, useState } from "react";
import AboutUsCard from "../../components/AboutUsCard/AboutUsCard";
import "./About.css";
import AJ from "./profile-picAJ.png";
import AM from "./profile-picAM.png";
import EM from "./profile-picEM.png";
import MC from "./profile-picMC.png";
import { Button } from "@mui/material";

function About() {
  const [seeMore, setSeeMore] = useState(false);
  const glavniDivRef = useRef(null);

  const seeMoreFunction = () => {
    setSeeMore(true);
  };

  useEffect(() => {
    if (seeMore && glavniDivRef.current) {
      glavniDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [seeMore]);

  const people = [
    {
      name: "Aleksa Jankovic",
      role: "Data base analyst",
      image: AJ,
      githubUrl: "https://github.com/aleksax1",
    },
    {
      name: "Adem Mulic",
      role: "Software developer",
      image: AM,
      githubUrl: "https://github.com/ademulic",
    },
    {
      name: "Merisa Curic",
      role: "User experience design",
      image: MC,
      githubUrl: "https://github.com/merisacuric01",
    },
    {
      name: "Edina Maljevac",
      role: "User experience design",
      image: EM,
      githubUrl: "https://github.com/edinamaljevac",
    },
    {
      name: "Maid Halilovic",
      role: "Software developer",
      image: "",
      githubUrl: "https://github.com/MaidHalilovic",
    },
  ];

  return (
    <>
      <div className="text-div" style={{}}>
        <h1>About us</h1>
        <h2>
          We are a team of five passionate students from Centar NIT, embarking
          on an exciting journey into the world of web development. This is our
          first group project, and we’ve challenged ourselves to create a
          dynamic and engaging clone of the IMDb website.
          <br /> Our goal is to showcase our skills, creativity, and teamwork
          while building a platform that celebrates movies, shows, and the
          people behind them. Join us as we learn, grow, and bring our vision to
          life!
        </h2>

        <Button
          className="moj-btn"
          onClick={seeMoreFunction}
          style={{
            border: "none",
            height: "5vh",
            width: "10vw",
            borderRadius: "1vh",
          }}
        >
          See our team
        </Button>

      </div>
        
      {seeMore && (
        <div className="glavni">
          {people.map((person, index) => (
            <AboutUsCard key={index} person={person} />
          ))}
        </div>
      )}
    </>
  );
}

export default About;
