import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import leafImg from './../../images/leafimg.png';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user)
    .catch((error) => toast.error("Please re-enter your registration information"));
    toast.success("Thank you for registering!")
    navigate('/login');
  }

  return (
    <div className="container pt-5 mt-5 pb-5">
      <div className="row g-0 justify-content-center">
        <div className="col-md-4">
          <img src={leafImg} className="img-fluid rounded-start" width="300" height="300"/>
        </div>
        <div className="col-md-8">
            <div className="card-body mt-4 mb-2">
              <div className="form">
                <form onSubmit={handleRegister}>
                    <div>
                      <label htmlFor="username">Username:</label>
                      <input
                        className="mt-2 mb-2"
                        type="text"
                        id="username"
                        name="username"
                        onChange={(e) => handleChange('username', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email:</label>
                      <input
                        className="mt-2 mb-2"
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="pass">Password (8 characters minimum):</label>
                      <input
                        className="mt-2 mb-2"
                        type="password"
                        id="pass"
                        name="password"
                        minLength="8"
                        required
                        onChange={(e) => handleChange('password', e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="passConf">Confirm Password:</label>
                      <input
                        className="mt-2 mb-2"
                        type="password"
                        id="passConf"
                        name="password"
                        minLength="8"
                        required
                        onChange={(e) => handleChange('passwordConf', e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        className="mt-2 mb-2"
                        type="text"
                        id="firstName"
                        name="fname"
                        required
                        onChange={(e) => handleChange('firstName', e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        className="mt-2 mb-2"
                        type="text"
                        id="lastName"
                        name="lname"
                        required
                        onChange={(e) => handleChange('lastName', e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="birthday">Birthday:</label>
                      <input
                        className="mt-2 mb-2"
                        type="date"
                        id="birthday"
                        name="birthday"
                        required
                        onChange={(e) => handleChange('birthday', e.target.value)} />
                    </div>
                  <div className="row">
                    <input
                      type="submit"
                      className="btn btn-success mt-2 mb-2"
                      value="Register"
                      disabled={
                        user.password &&
                        user.password.length >= 8 &&
                        user.password === user.passwordConf &&
                        user.firstName &&
                        user.lastName &&
                        user.email &&
                        user.birthday
                        ? false : true}
                    />
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Register;