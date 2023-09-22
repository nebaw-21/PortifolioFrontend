import { Link } from 'react-router-dom';
import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { APP_URL } from '../../../config';

function LinkDisplay() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${APP_URL}/api/displayLink`);
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
          <Link to={"/link_add"} className="btn btn-primary">Add</Link>
        </div>
        <div className="d-inline-block mx-3">
          <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
        </div>
      </div>


        <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>facebook</th>
            <th>tweeter</th>
            <th>instagram</th>
            <th>linkedin</th>
           
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((link)=>
          <tr>
            <td>{link.facebook}</td>
            <td>{link.tweeter}</td>
            <td>{link.instagram}</td>
            <td>{link.linkedin}</td>
     
            <td >
            <Link to={"/link_edit/"+ link.id}>
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
  
  export default LinkDisplay;