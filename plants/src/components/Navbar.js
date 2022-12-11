import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';
import AuthService from '../services/auth.service';
import largeLogo from './../images/full_logo.png';
import { useNavigate } from 'react-router-dom';


function Navbar () {
  const [ state, dispatch ] = useGlobalState();
  let navigate = useNavigate();

  function Logout() {
    navigate("/");
    AuthService.logout();
    window.location.reload();
  }
  
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark fixed-top p-0">
        <div className="container">
            <img className="navbar-brand" src={largeLogo} alt width="100" height="80"></img>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  {
                    !state.currentUser && (
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">Sign In</Link>
                      </li>
                    )
                  }
                  {
                    !state.currentUser && (
                      <li className="nav-item">
                        <Link to="/register" className="nav-link">Sign Up</Link>
                      </li>
                    )
                  }
                  {
                    state.currentUser && (
                      <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                      </li>
                    )
                  }
                  {
                    state.currentUser && (
                      <li className="nav-item">
                        <a href="#" className="nav-link" 
                          onClick={Logout}>Log Out</a>
                      </li>
                    )
                  }
                  {
                    !state.currentUser && (
                        <li className="nav-item">
                            <Link to="/help" className="nav-link">Help</Link>
                        </li>
                    )
                  }
              </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar