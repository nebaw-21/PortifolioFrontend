
import Header from '../../Header';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, {useState, useEffect}from 'react';
import axios from 'axios';

function User_display() {
  const [data, setData] = useState([]);

    const [user, setUser] = useState(null);



  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .post('http://localhost:8000/api/user', null, {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/displayUser');
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
      const result = await axios.delete(`http://localhost:8000/api/deleteUser/${id}`);
      
      // Handle the result or perform any necessary actions
    } catch (error) {
      console.error('Error deleting data:', error);
    }
    getData();
  }
  
  async function getData(){
    let response = await axios.post("http://localhost:8000/api/displayUser");
    
    const result = response.data;
    setData(result);
   }

  return (
    <div>

    <h2 className="text-center"> Admin List</h2>

    <div className="text-center">
    <div className="d-inline-block mx-3">
      <Link to={"/User_add"} className="btn btn-primary">Add Admin</Link>
    </div>
    <div className="d-inline-block mx-3">
      <Link to={"/dashboard"} className="btn btn-primary">Dashboard</Link>
    </div>
    </div>

      <Container>
      

        <h2 className="text-center page-title mt-4">Manage User</h2>

        <div className="container well">
          <div className="row">
            <div className="col-md-10">
              <nav aria-label="Page navigation"></nav>
            </div>
          </div>

          <div style={{ height: '600px', overflowY: 'auto' }}>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>N</th>
                  <th>name</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
              {
                data.map((user)=>
                 <tr>

                 <td>{user.id}</td>
                 <td>{user.name}</td> 

                 {user.name !== "Nahom" ? (
                    <td>
                      <span onClick={() => deleteOperation(user.id)} className="btn btn-danger">Delete</span>
                    </td>
                  ) : null}

                 <td>
                 <Link to={"/user_edit/"+user.id}>
                 <span  className="btn btn-primary">Update</span>
                 </Link>
                 </td>

                 </tr>
                
                )
                
                }
                          
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default User_display;