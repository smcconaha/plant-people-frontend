import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";
import React, {useEffect, useState} from "react";
import usZips from 'us-zips';

// function Map() {
//     let [center, setCenter] = useState({lat: 38.0593, lng: -84.4921});
//     const inputRef = useRef(null);
//     function  handleClick() {
//         let zipInput = inputRef.current.value;
//         let longInput = (usZips[zipInput].longitude);
//         let latInput = (usZips[zipInput].latitude);
//         setCenter({lat: latInput, lng: longInput});
//         console.log(`lat: ${latInput}, lng: ${longInput}`)
//     }
//     return (
//     <>
//         <div className="input-group mb-3">
//         <input ref={inputRef} type="text" id="zipInput" className="form-control" placeholder="Zip Code" aria-label="Enter Zip Code" aria-describedby="button-addon2"/>
//         <button onClick={handleClick} className="btn btn-outline-secondary" type="button" id="submitBtn">Search</button>
//         </div>
//         <GoogleMap zoom = {18} center = {center} mapContainerClassName = 'map-container'>
//         <MarkerF position={center} />
//         </GoogleMap>
//     </>
//     ) 
// }


const Header = (props) => {
    const [message, setMessage] = useState('');
    const [search, setSearch] = useState({
        search: '', //this is the zip code entered by user
        listings: [], //this is the listings coming back
    });

    useEffect(() => {
        axios.get(search + '/' + window.location.search).then((res) => {
			const allListings = res.data;
			setSearch({ listings: allListings });
			console.log(res.data);
        });
    }, [setSearch]);    
    
    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log('value is:', event.target.value);
      }; 
    
    let data = [...props.searchData]
    let location = []
    let standard = []
    let specialized = []
    for (const entry of data) {
        if (entry.service_type === 'location') {
            location.push(
                <>
                    <div className="form-check">
                        <input key={entry.id} onChange={handleChange} className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label  key={entry.name.id} className="form-check-label" for="flexCheckDefault">
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
        if (entry.service_type === 'standard') {
            standard.push(
                <>
                    <div className="form-check">
                        <input  key={entry.id} onChange={handleChange} className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label  key={entry.name.id}  className="form-check-label" for="flexCheckDefault">
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
        if (entry.service_type === 'specialized') {
            specialized.push(
                <>
                    <div className="form-check">
                        <input  key={entry.id} onChange={handleChange} className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label  key={entry.name.id} className="form-check-label" for="flexCheckDefault">
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
    }
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Find Plant Care Near You</h1>
                <h2>Search Form Placeholder</h2>
                <div className="card" style={{ width : '50rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">What customized car do your plants need?</h5>
                        <p className="card-text">Do you need boarding or drop-in service?</p>
                            {location}
                        <p className="card-text">What standard services do you need?</p>
                            {standard}
                        <p className="card-text">What specialized services do you need?</p>
                            {specialized}
                        <form>
                        {/* <form onSubmit={handleSearch}> */}
                        <input
                            id='zip_code'
                            type='text'
                            className='form-control'
                            placeholder='Enter Zip Code'
                            name='zip_code'
                            onChange={(e) => handleChange('searchListings', e.target.value)}
                            required
                        />
                        </form>
                        <a href="#" className="searchBtn">Search</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header