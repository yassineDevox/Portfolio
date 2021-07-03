import React from 'react'

const NavBar = () => {
  return (
    <nav class="nav" id="nav">
      <div class="nav-center">
        {/* <!-- nav header --> */}
        <div class="nav-header">
          <img
            src="./images/logo.svg"
            class="nav-logo"
            alt="logo"
          />
          <button class="nav-btn" id="nav-btn">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- nav links --> */}
        <ul class="nav-links">
          <li><a href="index.html">home</a></li>
          <li><a href="about.html">about</a></li>
          <li><a href="projects.html">projects</a></li>
          <li><a href="contact.html">contact</a></li>
        </ul>
      </div>
    </nav>
  )

}

export default NavBar;