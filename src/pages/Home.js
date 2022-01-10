import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Buttons from "../components/Buttons";
import ProfilePic from "../img/profile-img.webp";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <span>Hello, I'm</span>
            <h1>ayush</h1>
            <h3>
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                words={[
                  "Web Developer",
                  "UI designer",
                  "Photographer",
                  "Video Editor",
                ]}
              />
            </h3>
            <Buttons btn1={"my work"} btn2={"hire me"} />
          </div>
          <div className="col">
            <div className="img-box">
              <img src={ProfilePic} alt="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
