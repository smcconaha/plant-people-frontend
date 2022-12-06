import React from "react"
import { useGlobalState } from "../../context/GlobalState";
import smallLogo from './../../images/small_logo.png';

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();

  return (
    <div id="profile" className='container py-5'>
        <div className='row justify-content-center'>
            <div className="col-6">
                <div className='col-lg-6 col-xm-12'>
                    <div className='photo-wrap mb-5'>
                        <img className='profile-img'src={smallLogo} alt='profile picture of user'/>
                    </div>
                </div>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='profile-heading'>User Information</h1>
                    <p>Username: {state.currentUser.username}</p>
                    <p>First Name: {state.currentUser.first_name}</p>
                    <p>Last Name: {state.currentUser.last_name}</p>
                    <p>Email Address: {state.currentUser.email}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile