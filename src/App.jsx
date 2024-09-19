import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar" style={{ backgroundColor: '#e3f2fd', padding: '1rem' }}>
        <h1 style={{ fontFamily: 'Georgia, serif' }}>Souvlaki</h1>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0 }}>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
        <h2>Welcome to Souvlaki!</h2>
        <p>Your favorite place for authentic Greek cuisine.</p>
        <button style={{ padding: '0.75rem 2rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          View Menu
        </button>
      </section>

      {/* Featured Menu Section */}
      <section style={{ padding: '4rem', backgroundColor: '#ffffff' }}>
        <h3 style={{ textAlign: 'center' }}>Our Specialties</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
          <div>
            <h4>Souvlaki Skewers</h4>
            <p>Grilled to perfection, served with pita and tzatziki.</p>
          </div>
          <div>
            <h4>Greek Salad</h4>
            <p>Fresh and vibrant, topped with feta and olives.</p>
          </div>
          <div>
            <h4>Baklava</h4>
            <p>Delicious layers of pastry, honey, and nuts.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#e9ecef' }}>
        <p>© 2024 Souvlaki. All rights reserved.</p>
        <p><a href="#">Contact Us</a> | <a href="#">Privacy Policy</a></p>
      </footer>
    </>
  );
}

export default App
