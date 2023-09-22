import { Link } from 'react-router-dom';
import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { APP_URL } from '../../../config';


function About_display() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displayInformation`);
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);


    return (
        <>
        <div className="text-center">
        <div className="d-inline-block mx-3">
          <Link to={"/about_add"} className="btn btn-primary">Add</Link>
        </div>
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
      </div>


        <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>DateOfBirth</th>
            <th>Location</th>
            <th>Occupation</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>AboutMe</th>
            <th>ContactDescription</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>

       {
        data.map((info)=>
        <tr>
          <td>{info.fname}</td>
          <td>{info.lname}</td>
          <td>{info.dateOfBirth}</td>
          <td>{info.location}</td>
          <td>{info.occupation}</td>
          <td>{info.email}</td>
          <td>{info.phone}</td>
          <td>{info.image}</td>
          <td>{info.aboutMeDescription.length > 10 ? `${info.aboutMeDescription.slice(0, 10)}...` : info.aboutMeDescription}</td>
          <td>{info.contactMeDescription.length > 10 ? `${info.contactMeDescription.slice(0, 10)}...` : info.contactMeDescription}</td>
        
   
          <td >
          <Link to={"/about_edit/"+ info.id}>
          <span  className="btn btn-warning">Edit</span>
          </Link>
          </td>

        </tr>
        
        
        )
       }
       
        </tbody>
      </table>

        </>
  
  
  
    );
  }
  
  export default About_display;