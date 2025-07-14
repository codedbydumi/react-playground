import React from 'react'
import './Navbar.css'

function Head() {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">🍎 MyFruitApp</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#fruits">Fruits</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>

    </div>
  )
}

export default  Head
