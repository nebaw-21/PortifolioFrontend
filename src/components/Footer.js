
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { APP_URL } from '../config';


function Footer() {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displayLink`);
        const result = response.data;
        setLinks(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (

    <footer className="footer  container-shadow-top">
    <Container className="text-center">
    {
      links.map((link)=>

      <div className='  mt-5'>
      <a className=" icons cc-facebook btn btn-link btn-lg" href={link.facebook} data-aos="zoom-in-up" data-aos-duration="600">
        <FaFacebook className="fa-2x" />
      </a>
    
      <a className=" icons cc-twitter btn btn-link btn-lg" href={link.tweeter}  data-aos="zoom-in-up" data-aos-duration="900">
        <FaTwitter className="fa-2x" />
      </a>
    
      <a className=" icons cc-google-plus btn btn-link btn-lg" href={link.linkedin} data-aos="zoom-in-up" data-aos-duration="1100">
        <FaLinkedin className="fa-2x" />
      </a>
    
      <a className=" icons cc-instagram btn btn-link btn-lg" href={link.instagram} data-aos="zoom-in-up" data-aos-duration="1400">
        <FaInstagram className="fa-2x" />
      </a>
      
      </div>
 
      )
    }

      <Row>
        <Col>
          <div className=" description h4 title">Nahom Hirigo</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-muted">
            <p>&copy; @nebaw. All rights reserved.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>




  );
}

export default Footer;