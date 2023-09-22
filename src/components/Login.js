import '../style/login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { APP_URL } from '../config';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${APP_URL}/api/login`, { name, password })
      .then((response) => {
        if (response.status === 200) {
          // Store the token in local storage
          localStorage.setItem('token', response.data.token);
          window.location.href = '/dashboard';
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setErrors({ message: 'Invalid credentials' }); // Set the error message in state
      });
  };

  return (
    <>
      <body className="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-key">
                <i className="fa fa-key" aria-hidden="true"></i>
              </div>
              <div className="col-lg-12 login-title">ADMIN PANEL</div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form>
                    <div className="form-group">
                      <label className="form-control-label">USERNAME</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    {errors.message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {errors.message}
                        </div>
                      </div>
                    )}

                    <div className="col-lg-12 loginbttm">
                      <div className="col-lg-6 login-btm login-text"></div>
                      <div className="col-lg-6 login-btm login-button">
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                          onClick={handleSubmit}
                        >
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;