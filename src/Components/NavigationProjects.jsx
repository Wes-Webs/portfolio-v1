import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import myImage from '../Images/personal-image.jpg';
import { HashLink } from 'react-router-hash-link';

function Navigation() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > /* Add your scroll position threshold here */ 900) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define a CSS class for the navigation bar based on scroll position
  const navClass = isScrolled ? 'navbar-expand-lg fixed-top text-white px-sm-5' : 'navbar-expand-lg fixed-top text-white px-sm-5';
  const bgColor = '#1c2455';

  // Define a CSS transition for the background color
  const transitionStyle = {
    backgroundColor: bgColor,
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav id="main-navigation" className={navClass}  style={transitionStyle}>
      <div className="navbar d-flex flex-row align-items-center justify-content-between">
        <div className="navbar-brand d-flex flex-row align-items-center pr-0">
            <img
              src={myImage}
              alt="Wesley Wood"
              className="animate__animated animate__fadeIn  image-fluid rounded-circle mr-3"
              style={{ maxHeight: '60px', border: '2px solid #1c2455' }}
            />
            <Link
                className="react-scroll-link text-white navbar-brand text-decoration-none" // Add the CSS class here
                to="/"
                >
                <div className="animate__animated animate__fadeIn nav-name pr-0">WESLEY WOOD</div>
            </Link>
        </div>
        <div>
          <ul className={`animate__animated animate__fadeIn navbar-nav`}>
            <li>
              <Link
                className="react-scroll-link text-white pr-2 text-decoration-none" // Add the CSS class here
                to={-1} // Adjust this value as needed
              >
                <i className="fa-solid fa-arrow-left"></i> GO BACK
              </Link >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;