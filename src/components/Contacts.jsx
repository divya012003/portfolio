import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 sec
  };

  return (
    <div className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Contact Info */}
          <div className="col-md-5 text-center" data-aos="fade-right">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
            </p>
            <div className="contact-details">
              <p><i className="fas fa-envelope"></i> divyamote2003@gmail.com</p>
              <p><i className="fas fa-phone"></i> 7499386155</p>
              <p><i className="fas fa-map-marker-alt"></i> Pune, India</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-7" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
