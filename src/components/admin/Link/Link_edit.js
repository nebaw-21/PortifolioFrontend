import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { APP_URL } from '../../../config';


function Link_edit() {
  const { id } = useParams(); 
  const [facebook, setFacebook] = useState([]);
  const [instagram, setInstagram] = useState([]);
  const [tweeter, setTweeter] = useState([]);
  const [linkedin, setLinkedin] = useState([]);
  const [error, setErrors] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displaySpecificLink/${id}`);
        const result = response.data;
        setData(result);
        setLoading(false);

        setFacebook(result.facebook);
        setTweeter(result.tweeter);
        setInstagram(result.instagram);
        setLinkedin(result.linkedin);
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
      formData.append("facebook", facebook);
      formData.append("instagram", instagram);
      formData.append("tweeter", tweeter);
      formData.append("linkedin", linkedin);
  
      const response = await axios.post(`${APP_URL}/api/updateLink/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        // Registration successful
        window.location.href = "/link_display";
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
        <h2 className="text-center">Edit Social Link </h2>
        
        <div className="text-center">
        <div className="d-inline-block mx-3">
          <Link to={"/link_display"} className="btn btn-primary">List</Link>
        </div>
        
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
        
        </div>
        
        <form>
        
        <div className="form-group">
        <label htmlFor="facebook">Facebook</label>
        <input  value={facebook}
        onChange={(e) => setFacebook(e.target.value)} type="text" className="form-control" id="facebook" placeholder="Enter your facebook Link" />
        </div>
        
        <div className="form-group">
        <label htmlFor="tweeter">Tweeter</label>
        <input    value={tweeter}
        onChange={(e) => setTweeter(e.target.value)} type="text" className="form-control" id="tweeter" placeholder="Enter your Tweeter Link" />
        </div>
        
        <div className="form-group">
        <label htmlFor="instagram">Instagram</label>
        <input    value={instagram}
        onChange={(e) => setInstagram(e.target.value)} type="text" className="form-control" id="instagram" placeholder="Enter your Instagram Link" />
        </div>
        
        <div className="form-group">
        <label htmlFor="linkedin">Linkedin</label>
        <input    value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)} type="text" className="form-control" id="linkedin" placeholder="Enter your Linkedin" />
        </div>
        
        <button onClick={handleSubmit}  type="submit" className="btn btn-primary ">Update</button>
        
        </form>
        
        </>
    );
  }
  
  export default Link_edit;