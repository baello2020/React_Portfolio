import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+2069133533" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:webmaster@baello2020@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/orlando-baello-217716110/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/baello2020" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="src/assets/Orlando.pdf"></a>

        </div>
      </div>
    </div >
  );
}

export default Learn;
