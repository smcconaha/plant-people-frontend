import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";
import React, {useEffect, useState} from "react";
import usZips from 'us-zips';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "./../context/GlobalState";
import _ from "lodash";

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

const Results = () => {    
    const listingURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us78.gitpod.io/config/all/";
    const [listingData, setListingData] = useState([]);
    let navigate = useNavigate()

    const [search, ] = useGlobalState()
    
    useEffect(() => {
        axios.get(listingURL).then((response) => {
            setListingData(response.data);
        });
    }, []);

    let listingList = [];

    let listingCount = 0;
    
    let filteredListings = listingData.length > 0 && search.service.length > 0 ? listingData.filter((l) => {
        return l.listings[0] && l.listings[0].service.some(r=> search.service.includes(r))
    }) : listingData

    for (const item of filteredListings) {
        if (item.listings.length !==0) {
            listingList.push(
                <div className="card mb-.5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.images[0].profile_image} className="img-fluid rounded-start" alt=''/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="fw-bold"> {listingCount += 1} </div>
                                {console.log(`this is item ${item.listings[0].service}`)}
                                <h5 className="card-title">{item.first_name}</h5>
                                <h5 className="card-title">{item.listings[0].heading}</h5>
                                {/* {console.log(item.reviews[0])} */}
                                <p className="card-text">{item.listings[0].zip_code}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
    }
    return (
        <div className="container pt-5 mt-5">
            {filteredListings.length > 0 ? (
                listingList
                ) : (
                    <div className="row text-center">
                        <h2>Sorry! There are no results matching that criteria</h2>
                        <button
                            onClick={() => navigate('/')}
                            className="btn btn-lg btn-primary"
                        >
                            Return to Search
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Results