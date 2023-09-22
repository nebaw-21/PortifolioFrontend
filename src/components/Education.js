import '../style/education.css';
import { FaUniversity,AiOutlineLine } from 'react-icons/fa';
import { TbDots } from "react-icons/tb";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APP_URL } from '../config';


function Education() {
   const [schools, setSchools] = useState([]);
    
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displayEducation`);
        const result = response.data;
        setSchools(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div id='education' className="container shadow p-5 mb-5" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="400">
      <h2>Education</h2>
      <ul className="list-unstyled">
        {schools.map((school, index) => (
          <li key={index} className="mb-2">
            <div className="d-flex align-items-center">
              <FaUniversity  className="edit_icon me-3 text-lightblue fa-lg  " />
              <div>
                <h5 className='name'>{school.education}</h5>
                <h6 className='date'>{school.date}</h6>
                <p className='note'>{school.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
   
      <div className='dashededu'> <p>.... . ....</p></div>
    </div>
  );
}

export default Education;