import React from 'react';


function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold text-uppercase">Conatct Section</h2>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div className="bg-dark me-3" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
          <i className="fas fa-star fs-4 text-dark"></i>
          <div className="bg-dark ms-3" style={{ height: '4px', width: '80px', borderRadius: '2px' }}></div>
        </div>

        <form className="w-75 mx-auto">
          <input type="text" className="form-control mb-3" placeholder="userName" />
          <input type="number" className="form-control mb-3" placeholder="userAge" />
          <input type="email" className="form-control mb-3" placeholder="userEmail" />
          <input type="password" className="form-control mb-3" placeholder="userPassword" />
          <button className="btn btn-success mt-2">send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;