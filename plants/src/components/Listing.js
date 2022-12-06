import React from 'react';
import { useRef } from 'react';
import { useGlobalState } from '../context/GlobalState';

const Listing = () => {
    // const [ state, dispatch ] = useGlobalState();
    // const form = useRef();

    return (
    <div id="listing" className='listing'>
        <div className='text-center'>
            <h1>Contact Me</h1>
            <p>Please fill out the form if you are hiring or would like to contact me for project collaboration.</p>
        </div>
        <div className='container'>
            <form>
            {/* <form onSubmit={handleListingCreate}> */}
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <input
                            id='service'
                            type='text'
                            className='form-control'
                            placeholder='Select Services Offered'
                            name='user_service'
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='address_line_one'
                            type='text'
                            className='form-control'
                            placeholder='Address Line One'
                            name='user_address'
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='address_line_two'
                            type='text'
                            className='form-control'
                            placeholder='Optional Address Line Two'
                            name='user_address_opt'
                        />
                        <input
                            id='city'
                            type='text'
                            className='form-control'
                            placeholder='City'
                            name='user_city'
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='state'
                            type='text'
                            className='form-control'
                            placeholder='State'
                            name='user_state'
                            required
                        />
                        <input
                            id='country'
                            type='text'
                            className='form-control'
                            placeholder='Country'
                            name='user_country'
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='status'
                            type='text'
                            className='form-control'
                            placeholder='Select Listing Status'
                            name='listing_status'
                            required
                        />
                        <div className='line'></div>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <textarea
                            id='body'
                            type="text"
                            className='form-control'
                            placeholder='Please enter your listing description here.'
                            name='body'
                            required
                        ></textarea>
                        <div className='line'></div>
                        <button className='btn-main-offer listing-create-btn' type='submit'>Create Listing</button>
                    </div>
                </div>
            </form>  
        </div>
    </div>
  )
}

export default Listing