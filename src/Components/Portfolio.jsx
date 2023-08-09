/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Shoe Classification Model",
    description:
      "Using Tensorflow and Flask, I built and deployed a deep learning model that can prredict the type of shoe that is contained in an image.",
    url: "https://github.com/Nalito/Shoe-Recognition-model-using-transfer-learning",
  },
  {
    title: "Food Recommender Website",
    description:
      "I have built and deployed a recommender model that can recommend a similar meal for you based on the training dataset.",
    url: "https://web-production-b18b.up.railway.app/",
  },
  {
    title: "Next Word Prediction Model",
    description:
      "I have developed a machine learning model that predicts the next word in a sentence.",
    url: "https://github.com/Nalito/Next-Word-Prediction",
  },
  {
    title: "Real-time smile detection project",
    description:
      "I implemented python's Open CV module to build a program that predict whether or not a person is smiling in a video.",
    url: "https://github.com/Nalito/Smile-Detector-with-Open-CV",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
