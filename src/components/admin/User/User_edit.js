import Header from "../../Header";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { APP_URL } from '../../../config';

function User_edit(){ 
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState([]);
    const { id } = useParams(); 

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);


      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(`${APP_URL}/api/displaySpecificUser/${id}`);
            const result = response.data;
            setData(result);
            setLoading(false);
    
            // Set initial values of topic_name and description
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
          const response = await axios.put(`${APP_URL}/api/updateUser/${id}`, {
            name,
            password,
          
          });
    
          if (response.status === 200) {
            // Registration successful
            window.location.href = "/user_display";
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
<div>
<h2 className="text-center"> Admin Edit</h2>

<div className="text-center">
<div className="d-inline-block mx-3">
  <Link to={"/User_display"} className="btn btn-primary">List</Link>
</div>
<div className="d-inline-block mx-3">
  <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
</div>
</div>

<Container>
<Row className="justify-content-center">
  <Col xs={12} sm={8} md={6}>
    <Form >
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
        
          value={name}
          onChange={(e) =>setName (e.target.value)}
          
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
         
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick = {handleSubmit} >
        Update Admin
      </Button>
    </Form>
  </Col>
</Row>
</Container>

</div>

      
    );
  }

  export default User_edit
  ;