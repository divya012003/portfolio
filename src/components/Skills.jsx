import React from 'react';

function Skills() {
  return (
    <section className="skills py-5 bg-secondary  "style={{ height: 'auto',  }}>
      <h2 className='text-center fw-bold py-3'>Skills</h2>
      <div className="progress mb-3">
        <div className="progress-bar" style={{ width: '90%' }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">React.js (90%)</div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar" style={{ width: '80%' }} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Node.js (80%)</div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar" style={{ width: '85%' }} role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">MongoDB (85%)</div>
      </div>
      {/* Repeat for more skills */}
    </section>
  );
}

export default Skills;
