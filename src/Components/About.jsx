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
        <h5 className="text-center mb-5 sub-header">Here you will find more information about me, what I do, and my current programming skills</h5>
        <div className="row">
            <div className="col-12 col-lg-6 col-md-6 mb-5">
                <h3 className="mb-5 header">Get to know me!</h3>
                <p className="body-text">
                    I'm a <span className="about-text-bold">Web Developer</span> dedicated to crafting interactive and visually captivating front-end experiences for websites and web applications. Check out some of my work in the <span className="about-text-bold">Projects</span> section.
                </p>
                <p className="body-text">
                    In addition to my development work, I'm passionate about sharing the knowledge I have accrued over the years so it can help other people in the Dev Community. <span className="about-text-bold">Connect</span> or <span className="about-text-bold">Follow me</span> on my <a href="https://www.linkedin.com/in/wesley-wood-30215422a/" className="about-text-bold" style={{color: '#199db2'}}>Linkedin</a> where I post useful content related to Web Development and Programming.
                </p>
                <p className="body-text">
                    I am enthusiastically seeking new opportunities where I can not only contribute my skills, but also continue my professional growth journey. If you have an exciting opportunity that aligns with my skillset and experience, please don't hesitate to <span className="about-text-bold">reach out</span>. I'm ready to make a meaningful impact.
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
                    <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Swift</div>
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