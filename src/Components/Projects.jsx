import shoplocal from '../Images/image1.jpeg'
import goshopwow from '../Images/image2.jpeg'
import donutshop from '../Images/image3.jpeg'
import React from 'react';
import { Link } from 'react-router-dom';
function Projects() {

    return (
      <section id="projects" className="bg-light">
        <div className='container py-5'>
          <h1 className='text-center mt-5 mb-2 header'>PROJECTS</h1>
          <div className="d-flex flex-row justify-content-center mb-3 header-dots">
              <div className="mx-2">&bull;</div>
              <div className="mx-2">&bull;</div>
              <div className="mx-2">&bull;</div>
          </div>
          <h5 className="text-center mb-5 sub-header">Here you will find some of the personal and client projects that I created with each project containing its own case study</h5>
          <div className="d-lg-flex flex-lg-row justify-content-between align-items-center my-5 projects-block">
            <div className='col-12 col-lg-5'>
                <Link to="/shop-local"><img src={shoplocal} className='img-fluid'/></Link>
            </div>
            <div className="d-flex flex-column ml-0 ml-md-3">
                <h3 className="header">Shop Local</h3>
                <div className='mb-4'><i>Client Project</i></div>
                <p className='body-text'>
                    Shop Local is a successful e-commerce platform that I help build and maintain. Brands, retailers, and sales rep agencies use the platform to run online stores, offer online gift registries, share products, and perform wholesale operations.
                </p>
                <Link to="/shop-local" style={{textDecoration:'none'}}><button className='btn btn-custom-projects btn-lg custom-button px-5 py-3'>CASE STUDY</button></Link>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row justify-content-between align-items-center my-5 projects-block">
            <div className='col-12 col-lg-5'>
                <Link to="/shop-wow"><img src={goshopwow} className='img-fluid'/></Link>
            </div>
            <div className="d-flex flex-column ml-0 ml-md-3">
                <h3 className="header">Shop WOW</h3>
                <div className='mb-4'><i>Shopify Project</i></div>
                <p className='body-text'>
                    Shop WOW is my personal project created with Shopify. I built this in order to show my proficiency with Shopify's tools. I can build a store from start to finish including adding products, creating email campaigns, and setting up marketing tools in house or via third-party.
                </p>
                <Link to="/shop-wow" style={{textDecoration:'none'}}><button className='btn btn-custom-projects btn-lg custom-button px-5 py-3'>CASE STUDY</button></Link>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row justify-content-between align-items-center my-5 projects-block">
            <div className='col-12 col-lg-5'>
              <Link to="/donut-shop"><img src={donutshop} className='img-fluid'/></Link>
            </div>
            <div className="d-flex flex-column ml-0 ml-md-3">
                <h3 className="mb-4 header">Big Bite Donuts</h3>
                <div className='mb-4'><i>React Project</i></div>
                <p className='body-text'>
                  Big Bite Donuts is a personal project I created, inspired by a local donut shop's website that I admire. I aimed to demonstrate my ability to design websites for the restaurant and food industry. The mock checkout feature is currently pending.
                </p>
                <Link to="/donut-shop" style={{textDecoration:'none'}}><button className='btn btn-custom-projects btn-lg custom-button px-5 py-3'>CASE STUDY</button></Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Projects;