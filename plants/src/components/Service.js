import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';

const Service = (props) => {
    const baseURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us77.gitpod.io/config/services/"

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
                <p>{item.name}</p>
                <p>{item.description}</p>
            </>
        )
    }
    return (
        <>
        <Header searchData={data} />

        <div id="serviceContainer" className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12'>
                    <h1 className='service'>Services Offered</h1>
                    {items}
                </div>
            </div>
        </div>
        </>
    )
}
    
export default Service;