import React from 'react';
function FirstClassBanner() {
  return (
    <section id="shop-wow-banner">
      <div className='container'>
        {/* <div className='d-flex flex-column align-items-center sticky-socials'>
          <a href="https://www.linkedin.com/in/wesley-wood-30215422a/" target="_blank" className="social-link-nav"><i class="fa-brands fa-linkedin-in fa-2x ml-1 p-3"></i></a>
          <a href="https://github.com/Wes-Webs" target="_blank" className="social-link-nav"><i class="fa-brands fa-github fa-2x p-3"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100091622486044" target="_blank" className="social-link-nav"><i class="fa-brands fa-facebook-f fa-2x p-3"></i></a>
          <a href="https://www.instagram.com/wesowood/" target="_blank" className="social-link-nav"><i class="fa-brands fa-instagram fa-2x p-3 "></i></a>
          <a href="mailto:wesleyowood@gmail.com" target="_blank" className="social-link-nav"><i class="fa-regular fa-envelope fa-2x p-3"></i></a>
        </div> */}
        <div className='d-flex flex-column text-center'>
          <div className='mb-5'>
            <h1 className='heading-primary mb-5 landing-page-text'>1ST CLASS REAL ESTATE</h1>
            <h4 className='mb-5 landing-page-text' style={{lineHeight: '40px'}}>This page contains the case study of 1st Class Real Estate React project which includes the project overview, tools used and live links to the official product.</h4>
            <a href='https://firstclassrealestatepartners.com/' target='_blank'><button className='btn btn-custom btn-lg custom-button px-5 py-3'>PROJECT LINK</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstClassBanner;