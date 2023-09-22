import { Container, Row, Col } from 'react-bootstrap';
import '../style/about.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/displayInformation');
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateAge = (birthDate) => {
    if (!birthDate) {
      return null; // or handle the case when birthDate is undefined
    }
  
    const birthDateObj = new Date(birthDate); // Convert birthDate string to a Date object
  
    if (isNaN(birthDateObj.getTime())) {
      return null; // or handle the case when birthDate is an invalid date string
    }
  
    const today = new Date(); // Get the current date
  
    // Calculate the age
    let age = today.getFullYear() - birthDateObj.getFullYear();
  
  
  
    return age;
  };

  return (
    <section
      id="about"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Container className="my-5 about-container">
        {data.map((info) => (
          <Row key={info.id}>
            <Col md={6}>
              <div>
                <h2>About Me</h2>
                <p className="about_description">{info.aboutMeDescription}</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="basic-info">
                <h2>Basic Information</h2>
                <ul>
                  <li>
                    Name: <span className="bio_text">{info.fname}</span>
                  </li>
                  <li>
                    Age: <span className="bio_text">{calculateAge(info.dateOfBirth)}</span>
                  </li>
                  <li>
                    Location: <span className="bio_text">{info.location}</span>
                  </li>
                  <li>
                    Occupation: <span className="bio_text">{info.occupation}</span>
                  </li>
                  <li>
                    Email: <span className="bio_text">{info.email}</span>
                  </li>
                  <li>
                    Phone: <span className="bio_text">{info.phone}</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        ))}

        <div className='dashed'> <p>.... . ....</p></div>
      </Container>
    </section>
  );
}

export default About;