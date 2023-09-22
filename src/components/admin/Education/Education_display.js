import { Link } from 'react-router-dom';
import React, {useState, useEffect}from 'react';
import axios from 'axios';

function Education_display() {

 const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/displayEducation');
        const result = response.data;
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const deleteOperation = async(id)=> {
    try {
      const result = await axios.delete(`http://localhost:8000/api/deleteEducation/${id}`);
      
      // Handle the result or perform any necessary actions
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    getData();
  }
  
  async function getData(){
    let response = await axios.post("http://localhost:8000/api/displayEducation");
    
    const result = response.data;
    setData(result);
   }

    return (
        <>
        <div className="text-center">
        <div className="d-inline-block mx-3">
          <Link to={"/education_add"} className="btn btn-primary">Add</Link>
        </div>
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
      </div>


        <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Academic achievement with school name</th>
            <th> Education Start Date and Completion Date</th>
            <th>Education Description</th>
         
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((edu)=>


          <tr>
            <td>{edu.education}</td>
            <td>{edu.date}</td>
            <td>{edu.description}</td>

            <td ><span onClick={()=>deleteOperation(edu.id)} className="btn btn-danger">Delete</span> </td>

            <td >
            <Link to={"/education_edit/" + edu.id}>
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
  
  export default Education_display;