import React from 'react';

function Projects() {
  return (
    <section className="projects py-5">
      <h2 className='d-flex justify-content-center my-4 font-weight-bold text-danger'>My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/Assests/Car.png" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Project 1: Cental</h5>
              <p className="card-text">Built a car rental web application using React.js, HTML, CSS, and Bootstrap. Provides a vehicle listing, booking system, and user-friendly interface for easy car rentals.</p>
              <a href="https://divyamotecental.netlify.app/" className="btn btn-primary mx-5" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/divya012003/CarRentalWeb" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        {/* Repeat this block for each project */}
        <div className="col-md-4">
          <div className="card">
            <img src="/Assests/Ecommerce.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title ">Project 2: E-commerce Website</h5>
              <p className="card-text">Developed a fully functional e-commerce platform using React.js. Features product listing, shopping cart, and payment gateway integration for a seamless shopping experience.</p>
              <a href="https://github.com/divya012003/EcommerceApp" className="btn btn-primary mx-5" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/divya012003/EcommerceApp" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/Assests/TravelGo.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Project 3: TravelGo</h5>
              <p className="card-text">A travel booking platform developed using MERN Stack. Allows users to browse destinations, book trips, and explore travel packages with a clean and interactive UI.</p>
              <a href="https://github.com/divya012003/EcommerceApp" className="btn btn-primary mx-5" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href="https://github.com/divya012003/EcommerceApp" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
