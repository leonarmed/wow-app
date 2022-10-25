import React, { Component } from "react";
import logo from "../../img/WOW.png";
const date = new Date();
const year = date.getFullYear();
export const Footer = () => (
  <>
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top footer me-0 ms-0">
      <div className="col mb-3">
        <a
          href="/"
          className="d-flex align-items-center mb-3 link-dark text-decoration-none"
        >
          <img src={logo} alt="logo-wow" width="70px" className="p-2" />
        </a>
        <p className="text-muted">© {year} All rights reserved.</p>
      </div>

      <div className="col mb-3"></div>

      <div className="col mb-3">
        <h5 className="text-white">Section</h5>
        <ul className="nav flex-column ">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5 className="text-white">Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="col mb-3">
        <h5 className="text-white">Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Features
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              Pricing
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              FAQs
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 text-white">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </>
);
