import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import axios from "axios";
import React, {useEffect, useState} from "react";
import usZips from 'us-zips';
import { Link } from 'react-router-dom';
import { useGlobalState } from "./../context/GlobalState";

const Results = () => {    
    const listingURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us78.gitpod.io/config/all/";
    const [listingData, setListingData] = useState([]);
    
    useEffect(() => {
        axios.get(listingURL).then((response) => {
            setListingData(response.data);
        });
    }, []);

    let listingList = [];

    for (const item of listingData) {
        listingList.push(
            <>
                <p>{item.first_name}</p>
            </>
        )
    }
    return (
        <>
            <div>
                <h1>Names</h1>
                {listingList}
            </div>
        </>
    )
}

export default Results