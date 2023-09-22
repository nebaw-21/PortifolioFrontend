import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { APP_URL } from '../../../config';

function EducationEdit() {

  const { id } = useParams(); 
  const [education, setEducation] = useState([]);
  const [date, setDate] = useState([]);
  const [description, setDescription] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displaySpecificEducation/${id}`);
        const result = response.data;
        setData(result);
        setLoading(false);

        setEducation(result.education);
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
      formData.append("education", education);
      formData.append("date", date);
      formData.append("description", description);
  
      const response = await axios.post(`${APP_URL}/api/updateEducation/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        // Registration successful
        window.location.href = "/education_display";
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
        console.log("update failed");
      }
    }
  };

  if (loading) {
      return <div>Loading...</div>;
    }



    return (
        <>

        <h2 className="text-center">Edit Information About My Education</h2>
        
        <div className="text-center">
        <div className="d-inline-block mx-3">
          <Link to={"/education_display"} className="btn btn-primary">List</Link>
        </div>
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
        </div>
        
        <form>
        <div className="form-group">
        <label htmlFor="school">Academic achievement with school name</label>
        <input  value={education}
        onChange={(e) => setEducation(e.target.value)} type="text" className="form-control" id="school" placeholder="Enter your Academic achievement with school name" />
        </div>
        
        <div className="form-group">
        <label htmlFor="edudate"> Education Start Date and Completion Date</label>
        <input   value={date}
        onChange={(e) => setDate(e.target.value)} type="text" className="form-control" id="edudate" placeholder="Enter your Education Start Date and Completion Date  " />
        </div>
        
        <div className="form-group">
        <label htmlFor="eduDes">Education Description</label>
        <textarea  value={description}
        onChange={(e) => setDescription(e.target.value)} className="form-control" id="eduDes" rows="5" placeholder="Enter your message"></textarea>
        </div>
        
        
        <button onClick={handleSubmit}  type="submit" className="btn btn-primary">Update</button>
        </form>
        
        </>
  
  
  
  
    );
  }
  
  export default EducationEdit;