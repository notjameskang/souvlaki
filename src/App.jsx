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
import HomePage from './Components/HomePage/home'

function App() {
  return (

    <div className="container">
      <HomePage/>
    </div>

  );
}

export default App;
