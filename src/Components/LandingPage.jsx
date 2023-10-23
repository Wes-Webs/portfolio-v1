import './CSS/LandingPage.css'
import React from 'react';
import { Link } from 'react-scroll';
function LandingPage() {
  return (
    <section id="landing-page">
      <div className='container'>
        <div className='animate__animated animate__fadeIn d-flex flex-column align-items-center sticky-socials'>
          <a href="https://www.linkedin.com/in/wesley-wood-30215422a/" target="_blank" rel="noreferrer" className="social-link-nav"><i class="fa-brands fa-linkedin-in fa-2x ml-1 p-3"></i></a>
          <a href="https://github.com/Wes-Webs" target="_blank" rel="noreferrer" className="social-link-nav"><i class="fa-brands fa-github fa-2x p-3"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100091622486044" target="_blank" rel="noreferrer" className="social-link-nav"><i class="fa-brands fa-facebook-f fa-2x p-3"></i></a>
          <a href="https://www.instagram.com/wesowood/" target="_blank" rel="noreferrer" className="social-link-nav"><i class="fa-brands fa-instagram fa-2x p-3 "></i></a>
          <a href="mailto:wesleyowood@gmail.com" target="_blank" rel="noreferrer" className="social-link-nav"><i class="fa-regular fa-envelope fa-2x p-3"></i></a>
        </div>
        <div className='d-flex flex-column text-white landing-text-block'>
          <div className='mb-5'>
            <h1 className='animate__animated animate__fadeInLeft heading-primary mb-4 landing-page-text'>HELLO WORLD! MY NAME IS<br/> WESLEY WOOD</h1>
            <h4 className='animate__animated animate__fadeInLeft animate__delay-1s mb-4 landing-page-text'>A Frontend focused Web Developer building the Websites and Web Applications that lead to the success of the overall product, service, or network</h4>
            <Link to="projects" smooth={true} duration={500} offset={-50}><button className='custom-button btn btn-custom btn-lg px-5 py-3 animate__animated animate__fadeInLeft animate__delay-2s'>PROJECTS</button></Link>
          </div>
          <div className='arrow-container text-center mt-5'>
            <i id="bounce-arrow" className="fa-solid fa-hand-point-down fa-3x"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;







