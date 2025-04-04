import React from 'react';
import './AboutPage.css'
import mohammedAli  from "../../mediaFiles/mmpic.jpg"
const About = () => {
  return (
    <section className="mt-5 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold mb-4 text-white text-decoration-underline">About</h1>
      <h2 className="text-4xl font-semibold mb-6 text-white">
        <i>This web app was developed by the collaboration of IA lab with Engineering of Catalyst and Reaction Kinetics Research Lab</i>
      </h2>

      <div className="">
        <div className="resizer">
          <h5 className="text-xl mb-5 text-justify text-white">
            The inspiration behind this web app came from the frequent need for students to visit professors for paper signatures to access lab machinery, and the constant requests and calls to equipment operators for sample status and queries. This app streamlines communication and processes, saving time, cost, energy, and effort for students, operators, and professors alike.
          </h5>
          <h5 className="text-xl mb-5 text-justify text-white">
            The front-end of the application is developed using React, and the back-end utilizes the Express.js framework. These technologies are widely adopted by leading tech companies like Facebook, Instagram, WhatsApp, Airbnb, Uber, IBM, Netflix, and PayPal, ensuring that this app stays up-to-date with cutting-edge industry standards.
          </h5>
          <p className="text-white">
            To close, we’d like to share a famous quote from the legendary American boxer and social activist, Muhammad Ali:
          </p>
        </div>
        <div className='d-column'>
          <div>
          </div>
          <div>
            <img src={mohammedAli} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
