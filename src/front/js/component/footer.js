import React, { Component } from "react";
import logo from "../../img/WOW.png";
const date = new Date()
const year = date.getFullYear()
export const Footer = () => (
	<>
	
	<footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top footer">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
	  	<img src={logo} alt="logo-wow" width="70px" className="p-2" />
      </a>
      <p class="text-muted">© {year} All rights reserved.</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5 class="text-white">Section</h5>
      <ul class="nav flex-column ">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 class="text-white">Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 class="text-white">Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
      </ul>
    </div>
  </footer>
  </>
);
