import '../style/education.css';
import { FiLink } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APP_URL } from '../config';

function Experience() {
  const [experiences, setExperiences] = useState([]);
    
  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post(`${APP_URL}/api/displayExperience`);
      const result = response.data;
      setExperiences(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <div id='experience' className="container shadow p-5 mb-5"   data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="400">
      <h2>Work Experience</h2>
      <ul className="list-unstyled">
        {experiences.map((experience, index) => (
          <li key={index} className="mb-2">
            <div className="d-flex align-items-center">
              <FiLink  className="edit_icon me-3 text-green " />
              <div>
                <h5 className='name'>{experience.experience}</h5>
                <h6 className='date'>{experience.date}</h6>
                <p className='note'>{experience.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      <div className='dashedexe'> <p>.... . ....</p></div>
    </div>
  );
}

export default Experience;