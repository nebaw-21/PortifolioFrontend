
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { APP_URL } from '../../../config';

function UserAdd()
{  
const[name , setName]= useState("");
const[password , setPassword]= useState("");


 const handleSubmit=async (e)=>
{
  e.preventDefault();

  try {
    const response = await axios.post(`${APP_URL}/api/addUser`, {
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
     // setErrors(errorResponse.errors);
      const errorMessages = Object.values(errorResponse.errors).join("\n");
      alert("Validation errors:\n" + errorMessages);

    } else {
      // Other error occurred, handle it accordingly
      console.log("Registration failed");
    }
  }
  
  
}
    return (
<div>
<h2 className="text-center">Add Admin</h2>

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
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>setName (e.target.value)}
          
        />
      </Form.Group>



      <Form.Group controlId="password">
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
      </Form.Group>


      <Button variant="primary" type="submit" onClick = {handleSubmit} >
        Add Admin
      </Button>
    </Form>
  </Col>
</Row>
</Container>


</div>

      
    );
  }

  export default UserAdd;