import { useState, useEffect } from 'react';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import myImage from '../Images/personal-image.jpg';

function Navigation() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
  const navClass = isScrolled ? 'navbar navbar-expand-lg fixed-top text-white py-2 px-sm-5' : 'navbar navbar-expand-lg fixed-top text-white py-2 px-sm-5';
  const bgColor = isScrolled ? '#1c2455' : '#199db2';

  // Define a CSS transition for the background color
  const transitionStyle = {
    backgroundColor: bgColor,
    transition: 'background-color 0.4s ease', // Adjust the duration and timing function as needed
  };

  // Define a CSS style for the links
  const linkStyle = {
    color: bgColor === '#1c2455' ? '#1c2455' : '#fff', // Set link color based on background color
    textDecoration: 'none',
    transition: 'color 0.3s ease', // Add a transition for link color change
  };

  // Define a hover style for the links
  const hoverLinkStyle = {
    color: '#1c2455',
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const listItemMarginClass = isNavOpen ? 'mt-2' : '';
  const listItemBorderClass = isNavOpen ? 'border-bottom py-2' : '';

  return (
    <nav id="main-navigation" className={navClass}  style={transitionStyle}>
      <div className="navbar-brand d-flex flex-row align-items-center pr-0 py-0">
          <ScrollLink
              className="react-scroll-link-2 text-white navbar-brand text-decoration-none" // Add the CSS class here
              to="landing-page"
              smooth={true}
              duration={500}
              offset={-50}
              >
            <img
              src={myImage}
              alt="Wesley Wood"
              className="animate__animated animate__fadeIn  image-fluid rounded-circle"
              style={{ maxHeight: '60px', border: '2px solid #1c2455' }}
            />
          </ScrollLink>
          <ScrollLink
              className="react-scroll-link-2 text-white navbar-brand text-decoration-none" // Add the CSS class here
              to="landing-page"
              smooth={true}
              duration={500}
              offset={-50}
              >
              <div className="animate__animated animate__fadeIn nav-name pr-0">WESLEY WOOD</div>
          </ScrollLink>
      </div>
      <button className="navbar-toggler border-white text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isNavOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={toggleNav} style={{minWidth: '60px',  borderColor: 'white !important'}}>
        <span className="border-white p-1">
          {isNavOpen ? (
              <i className="fa-solid fa-times p-1"></i>
            ) : (
              <i className="fa-solid fa-bars p-1"></i>
            )}
        </span>
      </button>
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className={`animate__animated animate__fadeIn navbar-nav ml-auto ${listItemMarginClass}`}>
          <li className={`nav-item ${listItemBorderClass}`}>
            <ScrollLink
              className="react-scroll-link text-white nav-item nav-link px-3 text-decoration-none" // Add the CSS class here
              to="landing-page" // Adjust this value as needed
              smooth={true}
              duration={500}
              offset={-50}
            >
              HOME
            </ScrollLink >
          </li>
          <li className={`nav-item ${listItemBorderClass}`}>
            <ScrollLink
              className="react-scroll-link nav-item nav-link px-3" // Add the CSS class here
              to="about"
              smooth={true}
              duration={500}
              offset={-50} // Adjust this value as needed
            >
              ABOUT
            </ScrollLink>
          </li>
          <li className={`nav-item ${listItemBorderClass}`}>
            <ScrollLink
              className="react-scroll-link nav-item nav-link px-3" // Add the CSS class here
              to="projects"
              smooth={true}
              duration={500}
              offset={-50} // Adjust this value as needed
            >
              PROJECTS
            </ScrollLink>
          </li>
          <li className={`nav-item ${listItemBorderClass}`}>
            <ScrollLink
              className="react-scroll-link nav-item nav-link px-3" // Add the CSS class here
              to="contact"
              smooth={true}
              duration={500}
              offset={-50} // Adjust this value as needed
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;