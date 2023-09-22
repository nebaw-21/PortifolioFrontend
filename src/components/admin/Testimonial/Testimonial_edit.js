import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { APP_URL } from '../../../config';
function Testimonial_edit() {

  const { id } = useParams(); 
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState([]);
  const [name, setName] = useState([]);
  const [error, setErrors] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displaySpecificTestimonial/${id}`);
        const result = response.data;
        setData(result);
        setLoading(false);
        setDescription(result.description);
        setName(result.name);
    
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
      formData.append("image", image);
      formData.append("description", description);
      formData.append("name", name);
    
      const response = await axios.post(`${APP_URL}/api/updateTestimonial/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        // Registration successful
        window.location.href = "/testimonial_display";
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
        <h2 className="text-center">Edit Testimonial</h2>
        
        <div className="text-center">
        <div className="d-inline-block mx-3">
          <Link to={"/testimonial_display"} className="btn btn-primary">List</Link>
        </div>
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
        </div>
        
        <form>
        
        <div className="form-group">
        <label htmlFor="image">Testimonial Image</label>
        <div className="custom-file">
          <input   onChange={(e) => setImage(e.target.files[0])} type="file" className="custom-file-input" id="timage" />
          <label className="custom-file-label" htmlFor="timage">Choose file</label>
        </div>
        </div>
        
        <div className="form-group">
        <label htmlFor="testimonial">Testimonial description</label>
        <textarea   value={description}
        onChange={(e) => setDescription(e.target.value)} className="form-control" id="testimonial" rows="5" placeholder="Enter your message"></textarea>
        </div>
        
        <div className="form-group">
        <label htmlFor="tname">Name of Person that give testimony</label>
        <input   value={name}
        onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="tname" placeholder="Enter Name of Person that give testimony " />
        </div>
        
        
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Update</button>
        
        
        </form>
        
        
        </>
          
          
  
  
  
  
    );
  }
  
  export default Testimonial_edit;