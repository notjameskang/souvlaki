// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//     <>
//      <>
//       {/* Navbar */}
//       <nav className="navbar">
//         <img src="/src/assets/logo.png" alt="" className='logo'/>
//         <ul className="nav-links">
//           <li><a href="#">Menu</a></li>
//           <li><a href="#">Reviews</a></li>
//           <li><a href="#">Contact Us</a></li>
//           <li><a href="#">About Us</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h2>Welcome to Souvlaki!</h2>
//         <p>Your favorite place for authentic Greek cuisine.</p>
//         <button className="menu-btn">View Menu</button>
//       </section>

//       {/* Featured Menu Section */}
//       <section className="menu-section">
//         <h3>Our Specialties</h3>
//         <div className="menu-items">
//           <div>
//             <h4>Souvlaki Skewers</h4>
//             <p>Grilled to perfection, served with pita and tzatziki.</p>
//           </div>
//           <div>
//             <h4>Greek Salad</h4>
//             <p>Fresh and vibrant, topped with feta and olives.</p>
//           </div>
//           <div>
//             <h4>Baklava</h4>
//             <p>Delicious layers of pastry, honey, and nuts.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2024 Souvlaki. All rights reserved.</p>
//         <p><a href="#">Contact Us</a> | <a href="#">Privacy Policy</a></p>
//       </footer>
//     </>
//     </>
//   );
// }

// export default App
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; // Optional: Keep this if you have custom styles

function App() {
  return (

    <div className="container">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />


      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/src/assets/logo.png" alt="Logo" className="logo" width="150" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero text-center text-white d-flex align-items-center" style={{ height: '100vh', backgroundImage: 'url(/src/assets/background.jpg)', backgroundSize: 'cover' }}>
        <div className="container">
          <h2 className="display-4">Welcome to Souvlaki!</h2>
          <p className="lead">Your favorite place for authentic Greek cuisine.</p>
          <button className="btn btn-primary btn-lg">View Menu</button>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="menu-section py-5">
        <div className="container text-center">
          <h3 className="mb-4">Our Specialties</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h4>Souvlaki Skewers</h4>
              <p>Grilled to perfection, served with pita and tzatziki.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h4>Greek Salad</h4>
              <p>Fresh and vibrant, topped with feta and olives.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h4>Baklava</h4>
              <p>Delicious layers of pastry, honey, and nuts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-light py-4">
        <div className="container text-center">
          <p>© 2024 Souvlaki. All rights reserved.</p>
          <p>
            <a href="#">Contact Us</a> | <a href="#">Privacy Policy</a>
          </p>
        </div>
      </footer>
  
</div>
  
  );
}

export default App;
