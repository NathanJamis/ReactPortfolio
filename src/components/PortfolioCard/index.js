import React from "react";

function PortfolioCard(props) {
  return (
      <div className="card nes-container with-title is-centered mb-5">
        <p className="title nes-container">{props.title}</p>
        <div className="card-body">
          <p>{props.description}</p>
          <a href={props.website} target="_blank" rel="noreferrer">
            <button type="button" className="nes-btn is-primary">Website</button>
          </a>
          <a href={props.github} target="_blank" rel="noreferrer">
            <button type="button" className="nes-btn is-warning">GitHub</button>
          </a>
        </div>
      </div>
  );
}

export default PortfolioCard;
