import React from 'react';
import { useRef , useState} from 'react';
import { useGlobalState } from '../context/GlobalState';

const Listing = () => {
    // const [ state, dispatch ] = useGlobalState();
    // const form = useRef();
    const [service, setService] = useState('');

    const handleChange = event => {
        setService(event.target.value);
    
        console.log('value is:', event.target.value);
      }; 

    const plant_service_list = [
        "Plant Boarding",
        "Plant Drop In",
        "Watering",
        "Relocation",
        "Pesticide Application",
        "Fungicide Application",
        "Fertilizer Application",
        "Pruning",
        "Herbicide Application"
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
                    name='listing_status'
                    onChange={handleChange}
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
            <div className="form-check">
                <input
                    key={item.id}
                    id='flexCheckChecked'
                    value={item.id}
                    type='checkbox'
                    className='form-check-input'
                    placeholder={item.title}
                    name='listing_status'
                    onChange={handleChange}
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
        <div className='text-center'>
            <h1>Contact Me</h1>
            <p>Please fill out the form if you are hiring or would like to contact me for project collaboration.</p>
        </div>
        <div className='container'>
            <form>
            {/* <form onSubmit={handleListingCreate}> */}
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <h2>Location Details</h2>
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
                        <div className='line'></div>
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
                        <div className='line'></div>
                        <input
                            id='country'
                            type='text'
                            className='form-control'
                            placeholder='Country'
                            name='user_country'
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
                                <h2>Services Offered</h2>
                            </div>
                        </div>
                        <div className='line'></div>
                        {status_options}
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
                        <button className='listing-create-btn btn btn-success' type='submit'>Create Listing</button>
                    </div>
                </div>
            </form>  
        </div>
    </div>
  )
}

export default Listing