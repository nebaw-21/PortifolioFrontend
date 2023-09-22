import { Link } from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import { APP_URL } from '../../../config';


function ExperienceAdd() {
  const [experience, setExperience] = useState([]);
  const [date, setDate] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("experience", experience);
      formData.append("date", date);
      formData.append("description", description);
    
      const response = await axios.post(`${APP_URL}/api/addExperience`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        // Registration successful
        window.location.href = "/experience_display";
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Validation error occurred, get the error response from the server
        const errorResponse = error.response.data;
       // setErrors(errorResponse.errors);
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
<h2 className="text-center">Add Information About My Experience</h2>

<div className="text-center">
<div className="d-inline-block mx-3">
  <Link to={"/experience_display"} className="btn btn-primary">List</Link>
</div>
<div className="d-inline-block mx-3">
  <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
</div>
</div>

<form>
<div className="form-group">
<label htmlFor="work">Company name and Position</label>
<input  value={experience}
onChange={(e) => setExperience(e.target.value)} type="text" className="form-control" id="work" placeholder="Enter your Company name and Position" />
</div>

<div className="form-group">
<label htmlFor="expdate"> Work Start Date and Completion Date</label>
<input   value={date}
onChange={(e) => setDate(e.target.value)}  type="text" className="form-control" id="expdate" placeholder="Enter your Work Start Date and Completion Date" />
</div>

<div className="form-group">
<label htmlFor="expDes">Work Experience Description</label>
<textarea  value={description}
onChange={(e) => setDescription(e.target.value)} className="form-control" id="expDes" rows="5" placeholder="Enter your message"></textarea>
</div>


<button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>

</form>

</>
  
  
  
  
    );
  }
  
  export default ExperienceAdd;