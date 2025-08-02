

function Footer() {
  return (
    <footer className="footer-section text-white pt-5">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">LOCATION</h5>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
   <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
  <h5 className="fw-bold mb-3">AROUND THE WEB</h5>
  <div className="d-flex gap-3">
    <i className="fab fa-facebook-f icon-circle"></i>
    <i className="fab fa-twitter icon-circle"></i>
    <i className="fab fa-linkedin-in icon-circle"></i>
    <i className="fas fa-globe icon-circle"></i>
  </div>
</div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">ABOUT FREELANCER</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center py-3">
        Copyright © Your Website 2021
      </div>
    </footer>
  );
}

export default Footer;
