import React from 'react';

function Footer() {
    return (
      <section id="about" style={{backgroundColor: '#1c2455'}} className="py-5">
        <div className='container text-white'>
            <div className="d-flex flex-sm-row flex-column justify-content-between border-bottom border-white py-5 mb-4">
                <div>
                    <h4 className="mb-4 footer-header">WESLEY WOOD</h4>
                    <div className="w-75 footer-body-text">An adept Web Developer dedicated to crafting websites and web applications that propel the overall success of the product, service, or network.</div>
                </div>
                <div>
                    <h4 className="mb-4 footer-header">SOCIAL</h4>
                    <div className="d-flex flex-row">
                        <a href="https://www.linkedin.com/in/wesley-wood-30215422a/" target="_blank" className="social-link"><i className="fa-brands fa-linkedin-in fa-2x ml-1 mr-2"></i></a>
                        <a href="https://github.com/Wes-Webs" target="_blank" className="social-link"><i className="fa-brands fa-github fa-2x mx-2"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100091622486044" target="_blank" className="social-link"><i className="fa-brands fa-facebook-f fa-2x mx-2"></i></a>
                        <a href="https://www.instagram.com/wesowood/" target="_blank" className="social-link"><i className="fa-brands fa-instagram fa-2x mx-2 "></i></a>
                        <a href="mailto:wesleyowood@gmail.com" target="_blank" className="social-link"><i className="fa-regular fa-envelope fa-2x mx-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center pb-4 footer-body-text">© Copyright 2023. Made by Wesley Wood</div>
        </div>
      </section>
    );
  }

  export default Footer;