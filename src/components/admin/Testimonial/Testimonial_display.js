import { Link } from 'react-router-dom';
import React, {useState, useEffect}from 'react';
import axios from 'axios';

function Testimonial_display() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/displayTestimonial');
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
      const result = await axios.delete(`http://localhost:8000/api/deleteTestimonial/${id}`);
      
      // Handle the result or perform any necessary actions
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    getData();
  }
  
  async function getData(){
    let response = await axios.post("http://localhost:8000/api/displayTestimonial");
    
    const result = response.data;
    setData(result);
   }




    return (

        <>
        <div className="text-center">
        <div className="d-inline-block mx-3">
          <Link to={"/testimonial_add"} className="btn btn-primary">Add</Link>
        </div>
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
      </div>

        <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Testimonial Image</th>
            <th>Testimonial description</th>
            <th>Testimonial description</th>
          
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((tes)=>

          
          <tr>
            <td>{tes.image}</td>
            <td>{tes.description}</td>
            <td>{tes.name}</td>

            <td ><span onClick={()=>deleteOperation(tes.id)} className="btn btn-danger">Delete</span> </td>

            <td >
            <Link to={"/testimonial_edit/" + tes.id}>
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
  
  export default Testimonial_display;