import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <div className={`container ${navbarOpen ? "open" : ""}`}>
        <div className="logo">
          <img src="./logo.jpeg" alt="logo" />
          <a href="/">
            <span>CoinNexus</span>
          </a>
        </div>
        <div className={`navbar ${navbarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="Home"
                smooth={true}
                spy={true}
                offset={-100}
                duration={1000}
                onClick={() => toggleNavbar()}
                className="ani-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth="true"
                spy={true}
                offset={-10}
                duration={1000}
                className="ani-1"
                onClick={() => toggleNavbar()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Cards"
                smooth="true"
                spy={true}
                offset={-60}
                duration={1000}
                className="ani-1"
                onClick={() => toggleNavbar()}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="Price"
                smooth="true"
                spy={true}
                offset={-50}
                duration={1000}
                className="ani-1"
                onClick={() => toggleNavbar()}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth="true"
                spy={true}
                offset={50}
                duration={1000}
                className="ani-1"
                onClick={() => toggleNavbar()}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="main">
          <ul>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
            <li className="hamburger" onClick={() => toggleNavbar()}>
              <i class="fa-solid fa-bars"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
