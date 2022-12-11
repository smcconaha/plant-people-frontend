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
import relocate from '../images/relocate.png';
import sun from '../images/sun.png';
import water from '../images/water.png';

const Service = (props) => {
    const baseURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us78.gitpod.io/config/services/"

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);

    const photoArray = [herbicide, prune, pesticide, fertilize, relocate, water, dropIn, boarding]

    let items = []
    for (const item of data) {
        console.log(item.service_image)
        items.push(
            <>
                <img className="service_img" src={item.service_image}></img>
                <p key={item.name.id} className="serviceTitle" style={{ fontFamily: 'Libre Baskerville', fontWeight: "700"}}>{item.name}</p>
                <p key={item.description.id} className="serviceDesc" style={{ fontFamily: 'Libre Baskerville', fontWeight: "500"}}>{item.description}</p>
            </>
        )
    }
    return (
        <>
        <Header searchData={data} />

        <div id="serviceContainer" className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='service' style={{ fontFamily: 'Raleway', fontWeight: "700"}}>Services Offered</h1>
                    {items}
                </div>
            </div>
        </div>
        </>
    )
}
    
export default Service;