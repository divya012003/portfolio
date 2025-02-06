import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contacts";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div>

      {/* Hero Section */}
      <div className="home-container  ">
        <div className="home-text w-50 p-4 my-3">
        <h1 className="display-4 fw-bold text-start text-white my-5">Hi all, I'm Divya 👋</h1>
        <p className="lead text-start fw-bold ">
          A passionate Full Stack Software Developer 🚀 having experience in
          building Web and Mobile applications with JavaScript / React.js /
          Node.js /  and some other cool libraries and frameworks.
        </p>

        </div>
        {/* Social Media Icons */}
        <div className="social-icons  w-50">
          <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" style={{color:" #111212"}}></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"style={{color:" #111212"}}></i>
          </a>
          <a href="mailto:divyamote2003@gmail.com">
            <i className="fas fa-envelope"style={{color:" #111212"}}></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-instagram" style={{color:" #0a0a0b"}}></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
          <i class="fa-solid fa-user" style={{color:" #0a0a0b"}}></i>
          </a>
        </div>
        {/* Profile */}
        <div className="image-container me-4">
              <img src="/Assests/profile.png"  alt="Profile" className="profile-img" />
          </div>

        {/* Buttons */}
        <div className=" my-3  w-50" style={{paddingLeft:"50px"}}>
          <Link to="/contact" className="btn btn-primary btn-lg mx-2 fw-bold">
            Contact Me
          </Link>
          
          <a
            href="/Divya_resume_updated.pdf"
            download
            className="btn btn-danger btn-lg mx-2 fw-bold"
          >
             My Resume
          </a>
         
        </div>
      </div>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
    
  );
};

export default Home;
