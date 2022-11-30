import React from 'react';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Find Plant Care Near You</h1>
                <h2>Search Form Placeholder</h2>
                <div className="card" style={{ width : '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn-main-offer">Go somewhere</a>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                            <label className="form-check-label" for="exampleRadios1">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                            <label className="form-check-label" for="exampleRadios2">
                                Second default radio
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header