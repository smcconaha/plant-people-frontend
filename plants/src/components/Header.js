import React from 'react';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Find Plant Care Near You</h1>
                <h2>Search Form Placeholder</h2>
                <div className="card" style={{ width : '50rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">What customized car do your plants need?</h5>
                        <p className="card-text">Do you need boarding or drop-in service?</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" value="Plant Boarding"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Plant Boarding
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Plant Drop In"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Plant Drop In
                            </label>
                        <p className="card-text">What standard services do you need?</p>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Watering"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Watering
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Relocation"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Relocation
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Fertilization"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Fertilization
                            </label>
                        <p className="card-text">What standard services do you need?</p>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Pesticide Application"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Pesticide Application
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" value="Fungicide Application"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Fungicide Application
                            </label>
                        </div>
                        <a href="#" className="searchBtn">Search</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header