import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "./../context/GlobalState";
import MapContainer from "./MapContainer";
import _ from "lodash";

const Results = () => {
    const listingURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us78.gitpod.io/config/all/";
    const [listingData, setListingData] = useState([]);
    let navigate = useNavigate()

    const [search,] = useGlobalState()
    useEffect(() => {
        axios.get(listingURL).then((response) => {
            setListingData(response.data);
        });
    }, []);

    let listingList = [];

    let listingCount = 0;

    let filteredListings = listingData.length > 0 && search.service.length > 0 ? listingData.filter((l) => {
        return l.listings[0] && l.listings[0].service.some(r => search.service.includes(r))
    }) : listingData

    for (const item of filteredListings) {
        if (item.listings.length !== 0) {
            listingList.push(
                <div className="card mb-3 shadow">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.images[0].profile_image} className="img-fluid rounded-start" alt='' />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body result">
                                <div className="fw-bold"> {listingCount += 1}. </div>
                                <h5 className="card-title fw-bold">{item.first_name}</h5>
                                <p className="card-text"><strong>Location: </strong> {item.listings[0].zip_code}</p>
                                <p className="card-title">{item.listings[0].heading}</p>
                                {/* <p className="card-title">{item.listings[0].body}</p> */}
                                <p className="card-review"><strong>Latest Review: </strong> {item.reviews[0].title}</p>
                                <button className="btn btn-lg btn-success fs-6">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="result-cont">

            <div className="container pt-5 ml-.3">
                {filteredListings.length > 0 ? (
                    <div className="row text-center justify-content-center">
                        <div className="col-sm-12 col-md-8 text-start">
                            {listingList}
                        </div>
                        <div className="col-md-4 col-sm-8 text-center rounded mb-2">
                            <MapContainer />
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
        </div>
    )
}

export default Results