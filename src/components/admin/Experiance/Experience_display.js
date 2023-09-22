import { Link } from 'react-router-dom';
import React, {useState, useEffect}from 'react';
import axios from 'axios';

function Experience_display() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/displayExperience');
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
      const result = await axios.delete(`http://localhost:8000/api/deleteExperience/${id}`);
      
      // Handle the result or perform any necessary actions
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    getData();
  }
  
  async function getData(){
    let response = await axios.post("http://localhost:8000/api/displayExperience");
    
    const result = response.data;
    setData(result);
   }


    return (
        <>
        <div className="text-center">
        <div className="d-inline-block mx-3">
          <Link to={"/experience_add"} className="btn btn-primary">Add</Link>
        </div>
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
      </div>


        <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Company name and Position</th>
            <th>Work Start Date and Completion Date</th>
            <th>Work Experience Description</th>
          
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((exe)=>
          <tr>
            <td>{exe.experience}</td>
            <td>{exe.date}</td>
            <td>{exe.description}</td>

            <td ><span onClick={()=>deleteOperation(exe.id)} className="btn btn-danger">Delete</span> </td>

            <td >
            <Link to={"/experience_edit/" + exe.id}>
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
  
  export default Experience_display;