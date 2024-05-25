import firstclass from '../Images/image4.jpeg'
import { Link } from 'react-router-dom';
function DonutShop() {
    return (
      <section id="projects" className="bg-light">
        <div className='container py-5 px-5'>
            <div className='d-flex justify-content-center mb-3'>
                <img src={firstclass} className='img-fluid'/>
            </div>
            <h3 className='mb-4'>Project Overview</h3>
            <p>
                1st Class Real Estate is a long standing company with tons of locations nation wide. For this web template I used React, Node.Js and Google Cloud / API's. I created this landing page for the branch owner to help him recruit new agents.
            </p>
            <p>
                Creating this allows me to showcase my full stack skills and learn a lot about connecting premium business accounts to the servers. I really enjoyed this project and made sure each action was as fast as possible utilizing React components and learned a ton about the API features Google provides.
            </p>
            <p className='mb-4'>
                Feel free to check out the Project by visiting the Project Link.
            </p>
            <h3 className='mb-4'>Tools Used</h3>
            <div className="d-flex flex-row flex-wrap mb-4">
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">HTML</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">CSS</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">JavaScript</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Bootstrap</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">React</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Responsive Design</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Node.JS</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Express</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">SQL</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">GIT</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Github</div>
            </div>
            <h3 className='mb-4'>See Live</h3>
            <div className='d-flex flex-column flex-sm-row'>
                <button className='btn btn-custom btn-lg custom-button px-5 py-3 mb-3 mb-sm-0 mr-sm-2'><a href='https://firstclassrealestatepartners.com/' className='text-white' style={{textDecoration: 'none'}} target='_blank'>PROJECT LINK</a></button>
                <Link to={-1} className='btn btn-custom btn-lg custom-button-2 px-5 py-3'><span>GO BACK</span></Link>
            </div>
        </div>
      </section>
    );
  }

  export default DonutShop;