import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Experience from '../../Experience';
import { APP_URL } from '../../../config';

function Experience_edit() {
  const { id } = useParams(); 
  const [experience, setExperience] = useState([]);
  const [date, setDate] = useState([]);
  const [description, setDescription] = useState([]);
  const [error, setErrors] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displaySpecificExperience/${id}`);
        const result = response.data;
        setData(result);
        setLoading(false);

        setExperience(result.experience);
        setDate(result.date);
        setDescription(result.description);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
      formData.append("date", date);
      formData.append("experience", experience);
      formData.append("description", description);
  
      const response = await axios.post(`${APP_URL}/api/updateExperience/${id}`, formData, {
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
        setErrors(errorResponse.errors);
        const errorMessages = Object.values(errorResponse.errors).join("\n");
        alert("Validation errors:\n" + errorMessages);
      } else {
        // Other error occurred, handle it accordingly
        console.log("update failed");
      }
    }
  };

  if (loading) {
      return <div>Loading...</div>;
    }
    return (
        <>
        
        <h2 className="text-center">Edit Information About My Experience</h2>

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
        <input value={experience}
        onChange={(e) => setExperience(e.target.value)}  type="text" className="form-control" id="work" placeholder="Enter your Company name and Position" />
        </div>
        
        <div className="form-group">
        <label htmlFor="expdate"> Work Start Date and Completion Date</label>
        <input value={date}
        onChange={(e) => setDate(e.target.value)}  type="text" className="form-control" id="expdate" placeholder="Enter your Work Start Date and Completion Date" />
        </div>
        
        <div className="form-group">
        <label htmlFor="expDes">Work Experience Description</label>
        <textarea value={description}
        onChange={(e) => setDescription(e.target.value)}  className="form-control" id="expDes" rows="5" placeholder="Enter your message"></textarea>
        </div>
        
        
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Update</button></form>
        
     

  
        
        
        </>

  
  
  
    );
  }
  
  export default Experience_edit;