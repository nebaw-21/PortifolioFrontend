import '../style/contact.css';
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState('');

  const sendEmail = () => {
    const data = {
      to: 'nebiyuzewge1993@gmail.com',
      subject: 'Contact Form Submission',
      body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    axios.post('http://localhost:8000/api/contact', data)
      .then(response => {
        window.location.href = '/home';
        setSuccessful("Email sent successfully!!");
      })
      .catch(error => {
        console.error('Failed to send email:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div id="contact">
      <div className="contact_us_6">
        <div className="responsive-container-block container">
          <form className="form-box">
            <div className="container-block form-wrapper" data-aos="fade-right" data-aos-duration="800">
              <div className="mob-text">
                <p className="text-blk contactus-head">
                  Get in Touch
                </p>
                <p className="text-blk contactus-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
                </p>
              </div>
              <div className="responsive-container-block" id="i2cbk">
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                  <p className="text-blk input-title ">
                    FIRST NAME
                  </p>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="input" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                  <p className="text-blk input-title">
                    EMAIL
                  </p>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" id="ipmgh-3" name="Email" placeholder="Please enter email..." />
                </div>
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                  <p className="text-blk input-title">
                    WHAT DO YOU HAVE IN MIND ?
                  </p>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="textinput" id="i5vyy-3" placeholder="Please enter query..."></textarea>
                </div>
              </div>
              <button onClick={handleSubmit} className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                Submit
              </button>
              {successful && (
                <div className="alert alert-success" role="alert">
                  {successful}
                </div>
              )}
            </div>
          </form>
          <div className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
            <div className="map-part">
              <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
                Contact Me
              </p>
              <p className="text-blk map-contactus-subhead">
                Welcome to my personal website! As an experienced accountant,
                 I am dedicated to providing exceptional financial services and guidance.
                  Whether you have inquiries about tax planning, bookkeeping, or financial
                   consulting, I'm here to assist you. Please feel free to contact me using
                    the form below or through the provided email and phone number. Let's discuss 
                    your financial needs and find tailored solutions to help you achieve your goals.
                     I look forward to hearing from you!
              </p>
              <div className="map-box container-block" data-aos="flip-right" data-aos-duration="800">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;