import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import { APP_URL } from '../../../config';

function AboutAdd() {
  const [fname, setFname] = useState([]);
  const [lname, setLname] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState([]);
  const [location, setLocation] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [image, setImage] = useState([]);
  const [aboutMeDescription, setAboutMeDescription] = useState([]);
  const [contactMeDescription, setContactMeDescription] = useState([]);

  


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("fname", fname);
      formData.append("lname", lname);
      formData.append("dateOfBirth", dateOfBirth);
      formData.append("location", location);
      formData.append("occupation", occupation);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("image", image);
      formData.append("aboutMeDescription", aboutMeDescription);
      formData.append("contactMeDescription", contactMeDescription);
  
      const response = await axios.post(`${APP_URL}/api/addInformation`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        // Registration successful
        window.location.href = "/about_display";
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Validation error occurred, get the error response from the server
        const errorResponse = error.response.data;
        //setErrors(errorResponse.errors);
        const errorMessages = Object.values(errorResponse.errors).join("\n");
        alert("Validation errors:\n" + errorMessages);
      } else {
        // Other error occurred, handle it accordingly
        console.log("Registration failed");
      }
    }
  };

    return (
<>

<h2 className="text-center">Add Information About Me</h2>

<div className="text-center">
<div className="d-inline-block mx-3">
  <Link to={"/about_display"} className="btn btn-primary">List</Link>
</div>
<div className="d-inline-block mx-3">
  <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
</div>
</div>

<div className="container">

<form>
  <div className="form-group">
    <label htmlFor="fname">FirstName</label>
    <input 
    value={fname}
    onChange={(e) => setFname(e.target.value)}
     type="text" className="form-control" id="fname" placeholder="Enter your First Name" />
  </div>

  <div className="form-group">
  <label htmlFor="lname">LastName</label>
  <input  value={lname}
  onChange={(e) => setLname(e.target.value)} 
  type="text" className="form-control" id="lname" placeholder="Enter your Last Name" />
</div>

  <div className="form-group">
    <label htmlFor="date">Date of Birth</label>
    <input  value={dateOfBirth}
    onChange={(e) => setDateOfBirth(e.target.value)} type="date" className="form-control" id="date" />
  </div>

  <div className="form-group">
  <label htmlFor="location">Location</label>
  <input 
  value={location}
  onChange={(e) => setLocation(e.target.value)}  type="text" className="form-control" id="location" placeholder="Enter your Location" />
</div>

<div className="form-group">
<label htmlFor="occupation">Occupation</label>
<input  value={occupation}
onChange={(e) => setOccupation(e.target.value)} type="text" className="form-control" id="occupation" placeholder="Enter your Occupation" />
</div>

<div className="form-group">
<label htmlFor="email">Email</label>
<input  value={email}
onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your Email" />
</div>

<div className="form-group">
<label htmlFor="name">Phone</label>
<input  value={phone}
onChange={(e) => setPhone(e.target.value)}  type="text" className="form-control" id="name" placeholder="Enter your Phone" />
</div>

<div className="form-group">
<label htmlFor="image">Your Image</label>

<div className="custom-file">
  <input  onChange={(e) => setImage(e.target.files[0])} type="file" className="custom-file-input" id="image" />
  <label className="custom-file-label" htmlFor="image">Choose file</label>
</div>

</div>

  <div className="form-group">
    <label htmlFor="about">About Me description</label>
    <textarea  value={aboutMeDescription}
    onChange={(e) => setAboutMeDescription(e.target.value)} className="form-control" id="about" rows="5" placeholder="Enter your message"></textarea>
  </div>

  <div className="form-group">
  <label htmlFor="contact">Contact Me  description</label>
  <textarea  value={contactMeDescription}
  onChange={(e) => setContactMeDescription(e.target.value)}  className="form-control" id="contact" rows="5" placeholder="Enter your message"></textarea>
</div>

<button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

</>
  
  );
  }
  
  export default AboutAdd;