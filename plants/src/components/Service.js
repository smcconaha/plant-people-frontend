import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import "./../App.css"

const Service = (props) => {
    const baseURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us78.gitpod.io/config/services/"

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);


    let items = []
    for (const item of data) {
        items.push(
            <>
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