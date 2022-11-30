import React from 'react';

const Service = (props) => {
    {props.map((id) => {
        return (
            <div id="service" className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6 col-xm-12'>
                        <h1 className='service'>Services Offered</h1>
                        <p>{id.name}</p>
                        <p>{id.description}</p>
                    </div>
                </div>
            </div>
        )
    })}
}
    
export default Service;