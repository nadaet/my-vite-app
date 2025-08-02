import { Link } from "react-router-dom";



function Portfolio() {
  return (
    <div className="py-5 w-100 min-vh-100" style={{ backgroundColor: "white" }}>

      <h1 className="header-portfolio text-center fs-1 mb-5">PORTFOLIO COMPONENT</h1>
      <div className="d-flex justify-content-center align-items-center my-3">
          <div className="bg-dark me-3" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
          <i className="fas fa-star fs-4 text-dark"></i>
          <div className="bg-dark ms-3" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
        </div>


      <div className="row gy-4">
        {/* الكارت الأول */}
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card position-relative overflow-hidden" style={{ width: '18rem' }}>
             <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-plus fa-3x text-white"></i>
    </div>
            <div className="card-body text-center p-0">
              <Link className="navbar-brand text-dark fw-bold d-block" to="/home">
                <img className="w-100" src="poert1.png" alt="..." />
              </Link>
            </div>
          </div>
          
        </div>

        {/* الكارت الثاني */}
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card position-relative overflow-hidden " style={{ width: '18rem' }}>
             <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-plus fa-3x text-white"></i>
    </div>
            <div className="card-body text-center p-0">
              <Link className="navbar-brand text-dark fw-bold d-block" to="/home">
                <img className="w-100" src="port2.png" alt="..." />
              </Link>
            </div>
          </div>
        </div>

        {/* الكارت الثالث */}
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card position-relative overflow-hidden" style={{ width: '18rem' }}>
            <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-plus fa-3x text-white"></i>
    </div>
            <div className="card-body text-center p-0">
              <Link className="navbar-brand text-dark fw-bold d-block" to="/home">
                <img className="w-100" src="port3.png" alt="..." />
              </Link>
            </div>
          </div>
        </div>

        {/* الكارت الرابع */}
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card position-relative overflow-hidden" style={{ width: '18rem' }}>
             <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-plus fa-3x text-white"></i>
    </div>
            <div className="card-body text-center p-0">
              <Link className="navbar-brand text-dark fw-bold d-block" to="/home">
                <img className="w-100" src="poert1.png" alt="..." />
              </Link>
            </div>
          </div>
        </div>

        {/* الكارت الثاني */}
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card position-relative overflow-hidden " style={{ width: '18rem' }}>
             <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-plus fa-3x text-white"></i>
    </div>
            <div className="card-body text-center p-0">
              <Link className="navbar-brand text-dark fw-bold d-block" to="/home">
                <img className="w-100" src="port2.png" alt="..." />
              </Link>
            </div>
          </div>
        </div>

        {/* الكارت الثالث */}
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card position-relative overflow-hidden" style={{ width: '18rem' }}>
            <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
      <i className="fas fa-plus fa-3x text-black"></i>
    </div>
            <div className="card-body text-center p-0">
              <Link className="navbar-brand text-dark fw-bold d-block" to="/home">
                <img className="w-100" src="port3.png" alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
