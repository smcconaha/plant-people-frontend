import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "./../context/GlobalState";
import MapContainer from "./MapContainer"

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
                            <div className="card-body result">
                                <div className="fw-bold"> {listingCount += 1} </div>
                                {console.log(`this is item ${item.listings[0].service}`)}
                                <h5 className="card-title fw-bold">{item.first_name}</h5>
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
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            {listingList}
                        </div>
                        <div className="col-3">
                            <MapContainer />
                        </div>
                    </div>    
                </div>
                ) : (
                    <div className="row text-center">
                        <h2>Sorry! There are no results matching that criteria</h2>
                        <button
                            onClick={() => navigate('/')}
                            className="btn btn-lg btn-success"
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