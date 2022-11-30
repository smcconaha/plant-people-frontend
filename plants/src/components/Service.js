import React from 'react';

const Service = (props) => {

    let data = [...props.serviceData]

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