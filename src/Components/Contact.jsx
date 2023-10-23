import './CSS/Contact.css'
import React from 'react';
import { useState } from "react";
import Axios from 'axios';

function Contact() {

    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const updateName = (event) => {
        const newName = event.target.value;
        setName(newName);
    };

    const updateEmail = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
    };

    const updatePhone = (event) => {
      const newPhone = event.target.value;
      setPhone(newPhone);
    };

    const updateMessage = (event) => {
      const newMessage = event.target.value;
      setMessage(newMessage);
  };

    const handleContactInfo = (event) => {
        event.preventDefault();
        console.log(name, email, phone, message);
        Axios.post("https://portfolio-site-v1-cc6856b1ae63.herokuapp.com/contact", {
            name: name,
            email: email,
            phone: phone,
            message: message
        }).then(() => {
            console.log("Success");
            setShowAlert(true);
            setShowErrorAlert(false);
        }).catch(error => {
            console.error("Error:", error);
            setShowAlert(false);
            setShowErrorAlert(true);
        });
    };

  return (
    <section id="contact">
      <div className='container'>
        <h1 className='text-center mb-2 header'>CONTACT</h1>
        <div className="d-flex flex-row justify-content-center mb-3 header-dots">
            <div className="mx-2">&bull;</div>
            <div className="mx-2">&bull;</div>
            <div className="mx-2">&bull;</div>
        </div>
        <h5 className="text-center mb-2 mb-lg-5 mb-md-4 mb-sm-3 sub-header">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h5>
        <form id="contact-form" className='mx-auto p-lg-5 p-md-4 p-sm-3 p-3' onSubmit={handleContactInfo} >
            <div class="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" class="form-control form-control-lg" id="contact-name" placeholder="Enter Your Name" onChange={updateName} required/>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input type="email" class="form-control form-control-lg" id="contact-email" placeholder="Enter Your Email" onChange={updateEmail} required/>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Phone Number</label>
                <input type="tel" class="form-control form-control-lg" id="contact-phone" placeholder="Enter Your Phone Number" onChange={updatePhone}/>
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">Message</label>
                <textarea rows="5" type="text" class="form-control form-control-lg" id="contact-message" placeholder="Enter Your Message" onChange={updateMessage} required/>
            </div>
            <div className='d-flex flex-sm-row flex-column align-items-center justify-content-between'>
                <div>
                    {showAlert && (
                        <div class="alert alert-success mt-3 text-center" role="alert">
                            I have received your message! I will contact you shortly.
                        </div>
                    )}
                    {showErrorAlert && (
                        <div class="alert alert-danger mt-3 text-center" role="alert">
                            Please make sure the information above is valid.
                        </div>
                    )}
                </div>
                <button className='btn btn-custom-projects btn-lg custom-button-3 px-5 py-3' type="submit">SUBMIT</button>
            </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;