import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">Languages</a>
          <ul className='dropdown'>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">React</a></li>
          </ul>
        </li>
        <li><a href="#">AboutUS</a></li>
        <li><a href="#">ContactUS</a></li>
      </ul>
    </div>
  )
}

export default Navbar
