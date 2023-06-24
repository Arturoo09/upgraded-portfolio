import React from "react";
import cv from "./cv.pdf";
import Typed from "react-typed";
import dog from "../../assets/dog.png";
import "./Intro.css";

const Intro = () => {
  return (
    <div>
      <div class="home">
        <div class="home-content">
          <h3>Hello! , my name is</h3>
          <h1>Arturo Largo García</h1>
          <div className="typed-text">
            <Typed
              strings={[
                "Computer Engineering Student",
                "Data Analyst",
                "Hacker",
                "FullStack Developer",
                "Tennis Enjoyer",
                "Human Being",
              ]}
              typeSpeed={50}
              backSpeed={25}
              backDelay={1200}
              loop={true}
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sit amet lorem sit amet mi euismod laoreet. Nulla eget
            erat leo{" "}
          </p>

          <a href={cv} download>
            <button className="buttonCV">Download CV</button>
          </a>
        </div>

        <div class="glass">
          <div class="home-img">
            <img src={dog} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
