function Home() {
  return (
    <div className="home text-center text-white d-flex flex-column align-items-center justify-content-center vh-100  
    " style={{ marginTop: '56px' }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1999/1999625.png"
        alt="avatar"
        className="avatar mb-4"
        style={{ width: '150px', height: '150px' }}
      />
      <h1 className="fw-bold">START FRAMEWORK</h1>
      <div className="divider w-25 my-3" style={{ borderTop: '3px solid #fff' }}></div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}

export default Home;
