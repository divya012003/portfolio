import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-5 " data-aos="fade-right">
            <img
              src="./Assests/profile.png" // Replace with your image path
              alt="Profile"
              className="img-fluid profile-img1"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-7 my-5" data-aos="fade-left">
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              I'm a passionate **MERN Stack Developer** with expertise in **React.js, Node.js, MongoDB, and Express.js**.
              I love **creating scalable, responsive, and user-friendly web applications**. My goal is to build impactful
              solutions that enhance user experiences.
            </p>
            <p>
              Apart from coding, I enjoy exploring **new technologies**, enhancing my **communication skills**, and
              working on **creative projects**.
            </p>

            <a href="/projects" className="btn btn-primary mt-3">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
