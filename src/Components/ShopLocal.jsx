import shoplocal from '../Images/image1.jpeg'
import { Link } from 'react-router-dom';
function ShopLocal() {
    return (
      <section id="projects" className="bg-light">
        <div className='container py-5 px-5'>
            <div className='d-flex justify-content-center mb-3'>
                <img src={shoplocal} className='img-fluid'/>
            </div>
            <h3 className='mb-4'>Project Overview</h3>
            <p>
                Shop Local helps the best independent retailers across the United States, Canada, and the Carribean sell online. The platform provides retailers and their brands with tools to collaborate, compete online, and prosper financially.
            </p>
            <p>
                The goal is to help stores offer a great shopping experience with the best products, competitive prices, and quick delivery.
            </p>
            <p>
                I have been helping build and maintain the platform since 2022. My hands have touched a vast majority of the front-end and I have also implemented a lot of business logic in the back-end. My most recent project for the site was building a marketing manager page with tools a store will use to get more sales.
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
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">jQuery</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Responsive Design</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Cold Fusion</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">SQL</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">GIT</div>
            </div>
            <h3 className='mb-4'>See Live</h3>
            <div className='d-flex flex-column flex-sm-row'>
            <button className='btn btn-custom btn-lg custom-button px-5 py-3 mb-3 mb-sm-0 mr-sm-2'><a href='https://www.shoplocal.org/' style={{textDecoration: 'none'}} className='text-white' target='_blank'>PROJECT LINK</a></button>
                <Link to={-1} className='btn btn-custom btn-lg custom-button-2 px-5 py-3'><span>GO BACK</span></Link>
            </div>
        </div>
      </section>
    );
  }

  export default ShopLocal;