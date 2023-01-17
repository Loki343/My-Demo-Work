import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <a href="#" className="logo">
          Logo
        </a>

        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pages+</a>
                <ul>
                  <li><a href="#">blogs</a></li>
                  <li><a href="#">service+</a>
                    <ul>
                      <li><a href="#">html</a></li>
                      <li><a href="#">css</a></li>
                      <li><a href="#">JavaScript</a></li>
                    </ul>
                  </li>
                </ul>
            </li>
            <li>
              <a href="#">Review</a>
            </li>
            <li>
              <a href="#">Gallery +</a>
              <ul>
                <li><a href="#">Grid Gallery</a></li>
                <li><a href="#">Flex Gallery</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
