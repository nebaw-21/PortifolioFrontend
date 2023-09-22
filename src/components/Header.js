import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Nav, Navbar,NavDropdown} from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { APP_URL } from '../config';

  
function Header() {

  const [user, setUser] = useState(null);
  const [information, setInformation] = useState([]);
  const [links, setLinks] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displayInformation`);
        const result = response.data;
        setInformation(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .post(`${APP_URL}/api/user`, null, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data.user);
          } else {
            throw new Error('User data fetch failed');
          }
        })
        .catch((error) => {
          console.error('User data fetch error:', error);
        });
    }
  }, []);

  const logout = () => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .post(
          `${APP_URL}/api/logout`,
          null,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data.message);
          localStorage.removeItem('token');
          setUser(null);
          window.location.href = '/home';
        })
        .catch((error) => console.error('Logout error:', error));
    }
  };


  return (
    <section  className='background-image  border-bottom '>

    <Navbar  expand="lg" className=" .bg-secondary.bg-gradient">
      <Container className="hstack gap-3 ">

      {
        information.map((info) => (
          <Navbar.Brand className="Nahom_name p-2 text-light" href="/home">
            {info.fname}
          </Navbar.Brand>
        ))
      }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="p-2 ms-auto">
            <Nav.Link className=' link text-light' href="/home">Home</Nav.Link>
            <Nav.Link className='link text-light' href="#about">About</Nav.Link>
            <Nav.Link className='link text-light' href="#education">Education</Nav.Link>
            <Nav.Link className=' link text-light' href="#experience">Experience</Nav.Link>
            <Nav.Link className='link text-light' href="#reference">References</Nav.Link>
            <Nav.Link className='link text-light' href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="p-2">
          {!user ? (

            <NavDropdown className='text-light' title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
       
            </NavDropdown>
            
            ) :null}
          </Nav>

          {user ? (
            <NavDropdown title={user.name} id="basic-nav-dropdown" className="text-white">

              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              
                <Link to="/dashboard" className="nav-link" >
                  Admin
                </Link>
              
            </NavDropdown>
          ) : null}



        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <div className="text-center mt-5">

    {
      information.map((item) => (
        <div key={item.id}>

   
          <img
            className="Nahome_photo rounded-circle"
            src={`${APP_URL}/` + item.image}
            alt="Nahom"
          />
        
        <div
        className="description mt-4 text-light"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h1>
          <span>{item.fname}</span>
          {' '}
          <span>{item.lname}</span>
        </h1>
        <h3>I Am {item.occupation}</h3>
      </div>
        </div>
      ))
    }

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

    </div>
 
<br/><br/>
  </section>
    


  );
}

export default Header;