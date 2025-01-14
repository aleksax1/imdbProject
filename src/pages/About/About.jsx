import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import AJ from "./profile-picAJ.png";
import AM from "./profile-picAM.png";

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
  return (
    <>
      <div
        className="text-div"
        style={{
      
        }}
      >
        <h1
          style={{
            color: "rgb(122, 178, 211)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          About us
        </h1>
        <h2
          style={{ color: "aliceblue", maxWidth: "60vw", textAlign: "center" }}
        >
          We are a team of five passionate students from Centar NIT, embarking
          on an exciting journey into the world of web development. This is our
          first group project, and we’ve challenged ourselves to create a
          dynamic and engaging clone of the IMDb website.
          <br /> Our goal is to showcase our skills, creativity, and teamwork
          while building a platform that celebrates movies, shows, and the
          people behind them. Join us as we learn, grow, and bring our vision to
          life!
        </h2>

        <button
          className="moj-btn"
          onClick={seeMoreFunction}
          style={{
            backgroundColor: "rgb(122, 178, 211)",
            border: "none",
            height: "4vh",
            width: "8vw",
            borderRadius: "1vh",
            color: "aliceblue",
          }}
        >
          See our team
        </button>

        {/* <Button className="moj-btn" variant="text" onClick={seeMoreFunction}>
          See our team
        </Button> */}
      </div>
      {seeMore ? (
        <div className="glavni" ref={glavniDivRef}>
          <div className="kartica">
            <div className="txt">
              <h2
                style={{
                  color: "aliceblue",
                  backgroundColor: " rgb(122, 178, 211)",
                }}
              >
                Aleksa Jankovic
              </h2>
              <h3>softwer developer</h3>
            </div>
            <img src={AJ} alt="" />
          </div>
          <div className="kartica">
            <div className="txt">
              <h2
                style={{
                  color: "aliceblue",
                  backgroundColor: " rgb(122, 178, 211)",
                }}
              >
                Adem Mulic
              </h2>
              <h3>softwer developer</h3>
            </div>
            <img src={AM} alt="" style={{ borderRadius: "50%" }} />
          </div>
          <div>edina</div>
          <div>merisa</div>
          <div>maid</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default About;
