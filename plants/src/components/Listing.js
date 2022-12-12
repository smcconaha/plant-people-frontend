import React from 'react';
import { useState } from 'react';
import request from '../services/api.request'

const Listing = () => {
    
    const [listing, setListing] = useState({
        heading: "",
        body: "",
        service: [],
        address_line_one: "",
        address_line_two: "",
        city: "",
        state: "",
        zip_code: "",
        country: "",
        status: "",
    })

//Service array functionality
    function handleService (e, service) {
        if (e.target.checked) {
            listing.service.push(e.target.value)
        } else {
            let deleteIndex = listing.service.indexOf(e.target.value)
            listing.service.splice(deleteIndex, 1)
        }
        setListing(listing)
    }

    const handleChange = (key, value) => {
        setListing({
            ...listing,
            [key]: value
        })
        console.log(listing)
    }

    async function handleListingCreate (e) {
        e.preventDefault()
        let options = {
            data: {...listing},
            url: `/listings/`,
            method: 'POST',
        } 
        let resp = await request(options)
        console.log(resp.data)
        setListing(resp.data)
    }


    const plant_service_list = [
        "Plant Boarding",
        "Plant Drop In",
        "Watering",
        "Relocation",
        "Pesticide Application",
        "Fungicide Application",
        "Fertilizer Application",
        "Pruning",
        "Herbicide Application",
    ]

    let services = []

    for (const service of plant_service_list) {
        services.push(
            <>
            <div className="form-check">
                <input
                    key={service.id}
                    id='flexCheckChecked'
                    value={service}
                    type='checkbox'
                    className='form-check-input'
                    placeholder={service}
                    name='service'
                    onChange={(e) => handleService(e, {service})}
                />
                <label className="form-check-label" for="flexCheckDefault">
                    {service}
                </label>
                <div className='line'></div>
            </div>
            </>
            )
        }

    const listing_status = [
        {
            "id": 0,
            "title": "Invisible",
        },
        {
            "id": 1,
            "title": "Draft",
        },
        {
            "id": 2,
            "title": "Published",
        },
        {
            "id": 3,
            "title": "Promoted",
        }
    ]

    let status_options = []

    for (const item of listing_status) {
        status_options.push(
            <>
            <div className="form-check-inline">
                <input
                    key={item.id}
                    id='flexCheckChecked'
                    value={item.id}
                    type='radio'
                    className='form-check-input'
                    placeholder={item.title}
                    name='status'
                    onChange={(e) => handleChange('status', e.target.value)}
                />
                <label className="form-check-label" for="flexCheckDefault">
                    {item.title}
                </label>
                <div className='line'></div>
            </div>
            </>
            )
        }

    return (
    <div id="listing" className='listing'>
        <div className='listing-container pt-3 m-2'>
            <form onSubmit={handleListingCreate}>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <h2>Location Details</h2>
                        <input
                            id='address_line_one'
                            type='text'
                            className='form-control'
                            placeholder='Address Line One'
                            name='user_address'
                            onChange={(e) => handleChange('address_line_one', e.target.value)}
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='address_line_two'
                            type='text'
                            className='form-control'
                            placeholder='Optional Address Line Two'
                            onChange={(e) => handleChange('address_line_two', e.target.value)}
                            name='user_address_opt'
                        />
                        <div className='line'></div>
                        <input
                            id='city'
                            type='text'
                            className='form-control'
                            placeholder='City'
                            name='user_city'
                            onChange={(e) => handleChange('city', e.target.value)}
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='state'
                            type='text'
                            className='form-control'
                            placeholder='State'
                            name='user_state'
                            onChange={(e) => handleChange('state', e.target.value)}
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='country'
                            type='text'
                            className='form-control'
                            placeholder='Country'
                            name='user_country'
                            onChange={(e) => handleChange('country', e.target.value)}
                            required
                        />
                        <div className='line'></div>
                        <input
                            id='zip_code'
                            type='text'
                            className='form-control'
                            placeholder='Zip-code'
                            name='user_zip_code'
                            onChange={(e) => handleChange('zip_code', e.target.value)}
                            required
                        /> 
                        <div className='line'></div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <h2>Services Offered</h2>
                            </div>
                        </div>
                        <div className='line'></div>
                        {services}
                        <div className='line'></div>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <h2>Listing Status</h2>
                            </div>
                        </div>
                        <div className='line'></div>
                        {status_options}
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <input
                            id='heading'
                            type='text'
                            className='form-control'
                            placeholder='Heading'
                            name='user_heading'
                            onChange={(e) => handleChange('heading', e.target.value)}
                            required
                        /> 
                        <div className='line'></div>
                        <textarea
                            id='body'
                            type="text"
                            className='form-control'
                            placeholder='Please enter your listing description here.'
                            name='body'
                            onChange={(e) => handleChange('body', e.target.value)}
                            required
                        ></textarea>
                        <div className='line'></div>
                        <button 
                            className='listing-create-btn btn btn-success' 
                            type='submit'>
                            Create Listing
                        </button>
                    </div>
                </div>
            </form>  
        </div>
    </div>
  )
}

export default Listing