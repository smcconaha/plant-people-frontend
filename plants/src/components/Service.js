import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import "./../App.css";
import boarding from '../images/boarding.png';
import dropIn from '../images/dropin.png';
import fertilize from '../images/fertilize.png';
import herbicide from '../images/herbicide.png';
import pesticide from '../images/pesticide.png';
import prune from '../images/prune.png';
import sun from '../images/sun.png';
import water from '../images/water.png';
import fungi from '../images/fungi.png';
import { API_URL } from '../services/auth.constants';

const Service = (props) => {
    const baseURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us78.gitpod.io/config/services/"

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL + 'services/').then((response) => {
            setData(response.data);
        });
    }, []);

    const photoArray = [herbicide, prune, fungi, pesticide, fertilize, sun, water, dropIn, boarding]

    let imgCount = 0
    let items = []
    for (const item of data) {
        items.push(
            <div className="row justify-content-center align-content-center">
                <div className="col-3">
                    <img className="service_img" src={photoArray[imgCount]}></img>
                </div>
                <div className="col-9">
                    <p key={item.name.id} className="serviceTitle" style={{ fontFamily: 'Libre Baskerville', fontWeight: "700"}}>{item.name}</p>
                    <p key={item.description.id} className="serviceDesc text-start" style={{ fontFamily: 'Libre Baskerville', fontWeight: "500"}}>{item.description}</p>
                </div>
            </div>
        )
        imgCount ++
    }
    return (
        <>
        <Header searchData={data} />

        <div id="serviceContainer" className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-xm-12 text-center'>
                    <h1 className='service' style={{ fontFamily: 'Raleway', fontWeight: "700"}}>Services Offered</h1>
                    {items}
                </div>
            </div>
        </div>
        </>
    )
}
    
export default Service;