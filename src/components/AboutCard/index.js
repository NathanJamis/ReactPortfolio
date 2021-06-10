import React from "react";
import headshot from "../../images/headshot.jpg";

function AboutCard() {
  return (
    <div className="container">
      <div className="card nes-container with-title is-centered mb-5">
        <p className="title nes-container">About</p>
          <div className="card-body">
          <img className="img-responsive float-left mb-3" width="250px" height="260px" src={headshot}></img>
          <p className="mt-3">Hello there!</p>
          <p>Your friendly neighborhood web-dev here.</p>
          <p>I am a creator. I love to create, make, and build. My wide artistic taste allows me to appreciate all eras, styles, and forms of art. On the other side of my brain, I have a strong desire to analyze and seek logical solutions to problems. I've learned how to combine them and find my path.</p>
          <p>For so long, I have wanted to learn to code, and now that dream is a reality. I recently received my certification in Full-Stack Web Development through the University of Washington, and I am ready to start building the next great web app!</p>
          </div>
      </div>
    </div>
  );
}

export default AboutCard;
