import React from "react";
import { Link } from 'react-router-dom';
import { useGlobalState } from "../../context/GlobalState";
import smallLogo from './../../images/small_logo.png';

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div id="profile" className='container py-5'>
        <div className='row justify-content-center'>
            <div className="col-6 text-center">
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img'src={smallLogo} alt='profile picture of user'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='profile-heading fs-2'>Welcome {state.currentUser.first_name}</h1>
                    <p>Username: {state.currentUser.username}</p>
                    <p>First Name: {state.currentUser.first_name}</p>
                    <p>Last Name: {state.currentUser.last_name}</p>
                    <p>Email Address: {state.currentUser.email}</p>
                    <h1 className='listing-offer fs-2'>Do you want to become a caregiver?</h1>
                    <Link to="/listing" className="listingBtn w-100 btn btn-lg btn-success">Create Listing</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile