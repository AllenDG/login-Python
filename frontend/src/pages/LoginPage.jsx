import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const logInUser = () => {
    if (email.length === 0) {
      alert("Email has been left blank!");
    } else if (password.length === 0) {
      alert("Password has been left blank!");
    } else {
      axios.post('http://127.0.0.1:5000/login', {
        email: email,
        password: password
      })
        .then(function (response) {
          console.log(response);
          alert("You have successfully logged in!");
          navigate("/home");
        })
        .catch(function (error) {
          console.log(error, 'error');
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        });
    }
  }

  let imgs = [
    'https://static.vecteezy.com/system/resources/previews/004/579/252/non_2x/enter-the-email-data-verification-code-free-vector.jpg',
  ];

  return (
    <div>
      <div className="container h-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={imgs[0]} className="img-fluid" alt="Login Image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <h2 className="fw-bolder">Login to continue</h2>
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-control" placeholder="Enter a valid email address" />
                </div>

                <div className="mb-4">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body text-decoration-none">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start">
                  <button type="button" className="btn btn-primary" onClick={logInUser}>Login</button>
                  <p className="mt-2 mb-0">Don't have an account? <a href="/register" className="link-primary">Register</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
