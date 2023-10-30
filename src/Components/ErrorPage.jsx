import React  from 'react';
import { Link } from 'react-router-dom';

function ErrorPage () {

    return (
        <section id="error" className='d-flex flex-column justify-content-center text-center'>
            <h4>Oh no! Looks like you're in the wrong place</h4>
            <div><Link className="nav-link" to="/">Return to home page</Link></div>
        </section>
    );
}

export default ErrorPage