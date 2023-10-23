import React from 'react';
import { Link } from 'react-scroll';

function About() {

  return (
    <section id="about" className="py-5">
      <div className='container mb-5'>
        <h1 className='text-center mt-5 mb-2 header'>ABOUT ME</h1>
        <div className="d-flex flex-row justify-content-center mb-3 header-dots">
            <div className="mx-2">&bull;</div>
            <div className="mx-2">&bull;</div>
            <div className="mx-2">&bull;</div>
        </div>
        <h5 className="text-center mb-5 sub-header">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h5>
        <div className="row">
            <div className="col-12 col-lg-6 col-md-6 mb-5">
                <h3 className="mb-5 header">Get to know me!</h3>
                <p className="body-text">
                    I'm a <span className="about-text-bold">Frontend Web Developer</span> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="about-text-bold">Projects</span> section.
                </p>
                <p className="body-text">
                    I also like sharing content related to the stuff that I have learned over the years in <span className="about-text-bold">Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/wesley-wood-30215422a/" className="about-text-bold" style={{color: '#199db2'}}>Linkedin</a> where I post useful content related to Web Development and Programming
                </p>
                <p className="body-text">
                    I'm open to <span className="about-text-bold">Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span className="about-text-bold">contact</span> me.
                </p>
                <Link to="contact" smooth={true} duration={500} offset={-50}><button className='btn btn-custom btn-lg custom-button px-5 py-3'>CONTACT</button></Link>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
                <h3 className="mb-5 header">My Skills</h3>
                <div className="d-flex flex-row flex-wrap">
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">HTML</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">CSS</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">JavaScript</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Bootstrap</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">jQuery</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">React</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Responsive Design</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Node.JS</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Python</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Express</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Cold Fusion</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">SQL</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">GIT</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Github</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Shopify</div>
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">WordPress</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;