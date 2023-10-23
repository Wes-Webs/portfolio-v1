import shopwow from '../Images/image2.jpeg'
import { Link } from 'react-router-dom';
function ShopWow() {
    return (
      <section id="projects" className="bg-light">
        <div className='container py-5 px-5'>
            <div className='d-flex justify-content-center mb-3'>
                <img src={shopwow} className='img-fluid'/>
            </div>
            <h3 className='mb-4'>Project Overview</h3>
            <p>
                Shop WOW is a Shopify project I created for people to buy affordable products. It is a general store and utilizes a lot of plugins from the platform and from external marketing tools like Facebook Pixel and Google Marketing.
            </p>
            <p>
                The store is intended to show my proficiency with Shopify's back-end and gain more knowledge about the e-commerce and digital marketing world. I will be building another store with a specific niche in the near future.
            </p>
            <p className='mb-4'>
                Feel free to check out the Project by visiting the Project Link.
            </p>
            <h3 className='mb-4'>Tools Used</h3>
            <div className="d-flex flex-row flex-wrap mb-4">
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">HTML</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">CSS</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">JavaScript</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Responsive Design</div>
                <div className="border rounded px-3 py-2 mr-2 mb-2 bg-light skill-pill">Shopify</div>
            </div>
            <h3 className='mb-4'>See Live</h3>
            <div className='d-flex flex-column flex-sm-row'>
            <button className='btn btn-custom btn-lg custom-button px-5 py-3 mb-3 mb-sm-0 mr-sm-2'><a href='https://goshopwow.com/' className='text-white' style={{textDecoration: 'none'}} target='_blank'>PROJECT LINK</a></button>
                <Link to={-1} className='btn btn-custom btn-lg custom-button-2 px-5 py-3'><span>GO BACK</span></Link>
            </div>
        </div>
      </section>
    );
  }

  export default ShopWow;