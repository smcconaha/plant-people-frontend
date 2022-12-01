import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';


function Navbar () {
  const [ state, dispatch ] = useGlobalState();
  
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">Add Logo?</a>
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
                  <li className="nav-item">
                    <Link to="#" className="nav-link">Help</Link>
                  </li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar