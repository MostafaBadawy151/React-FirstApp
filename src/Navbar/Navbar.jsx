import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
  <div class="container-fluid">
    <Link className="navbar-brand text-white fw-bolder fs-1 ps-5" to="/">Start React</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
        <li class="nav-item">
          <Link class="nav-link active text-white fs-6 fw-bold text-uppercase mx-3" aria-current="page" to="portfolio">Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-white fs-6 fw-bold text-uppercase mx-3" to="about">About</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-white fs-6 fw-bold text-uppercase mx-3" to="contact">Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  </>
   
  
}
