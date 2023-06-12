import React from "react";
import food from "./images/food.png";
import comfy from "./images/comfy.png";
import movie from "./images/movie.png";
import quiz from "./images/quiz.png";

import "./work.css";
const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Works</span>

      <div className="container-work">
        <div className="projects">
          <div className="pro-img">
            <img src={food}></img>
          </div>
          <div className="git-links">
            <div className="net netlify">
              <a href=" https://frabjous-fenglisu-93c1cd.netlify.app/">
                view project
              </a>
            </div>
            <div className=" net git">
              <a href="https://github.com/n9nadhu0k/food-app">view code</a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="pro-img">
            <img src={comfy}></img>
          </div>
          <div className="git-links">
            <div className="net netlify">
              <a href=" https://celebrated-longma-6341f4.netlify.app/">
                view project
              </a>
            </div>
            <div className=" net git">
              <a href="https://github.com/n9nadhu0k/comfy-react">view code</a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="pro-img">
            <img src={movie}></img>
          </div>
          <div className="git-links">
            <div className="net netlify">
              <a href=" https://euphonious-torrone-4b0e06.netlify.app/">
                view project
              </a>
            </div>
            <div className=" net git">
              <a href="https://github.com/n9nadhu0k/movie-react-app">
                view code
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="pro-img">
            <img src={quiz}></img>
          </div>
          <div className="git-links">
            <div className="net netlify">
              <a href="https://astonishing-horse-09ead9.netlify.app/">
                view project
              </a>
            </div>
            <div className=" net git">
              <a href="https://github.com/n9nadhu0k/quiz-react">view code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
