function About() {
  return (
    <div className="about-section  text-white py-5 mt-5">
      <div className="container-fluid">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase">About Component</h2>
          <div className="d-flex justify-content-center align-items-center my-3">
            <div
              className="bg-white me-3"
              style={{ height: '4px', width: '80px', borderRadius: '2px' }}
            ></div>
            <i className="fas fa-star fs-4 text-white"></i>
            <div
              className="bg-white ms-3"
              style={{ height: '4px', width: '80px', borderRadius: '2px' }}
            ></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <p className="lead text-center text-md-start">
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization            </p>
          </div>
          <div className="col-md-6">
            <p className="lead text-center text-md-start">
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.           </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


