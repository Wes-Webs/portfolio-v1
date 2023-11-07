import donutshop from '../Images/image3.jpeg'
import { Link } from 'react-router-dom';
function DonutShop() {
    return (
      <section id="projects" className="bg-light">
        <div className='container py-5 px-5'>
            <div className='d-flex justify-content-center mb-3'>
                <img src={donutshop} className='img-fluid'/>
            </div>
            <h3 className='mb-4'>Project Overview</h3>
            <p>
                Big Bite Donuts is a web template that I created targeting the restaurant and food industry using React and Node.Js. I decided to recreate the Frontend of Hana's Donuts in Kansas City because of its simplicity and sleak design.
            </p>
            <p>
                Creating this allows me to showcase my front-end skills. I really enjoyed this project and made sure each action was as fast as possible utilizing React components.
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
                <button className='btn btn-custom btn-lg custom-button px-5 py-3 mb-3 mb-sm-0 mr-sm-2'><a href='https://starlit-rugelach-42dc6c.netlify.app/' className='text-white' style={{textDecoration: 'none'}} target='_blank'>PROJECT LINK</a></button>
                <Link to={-1} className='btn btn-custom btn-lg custom-button-2 px-5 py-3'><span>GO BACK</span></Link>
            </div>
        </div>
      </section>
    );
  }

  export default DonutShop;