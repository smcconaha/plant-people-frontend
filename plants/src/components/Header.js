import React from 'react';

const Header = (props) => {
    let data = [...props.searchData]
    let location = []
    let standard = []
    let specialized = []
    for (const entry of data) {
        if (entry.service_type == 'location') {
            location.push(
                <>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label className="form-check-label" for="flexCheckDefault">
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
        if (entry.service_type == 'standard') {
            standard.push(
                <>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label className="form-check-label" for="flexCheckDefault">
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
        if (entry.service_type == 'specialized') {
            specialized.push(
                <>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label className="form-check-label" for="flexCheckDefault">
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
    }
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Find Plant Care Near You</h1>
                <h2>Search Form Placeholder</h2>
                <div className="card" style={{ width : '50rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">What customized car do your plants need?</h5>
                        <p className="card-text">Do you need boarding or drop-in service?</p>
                            {location}
                        <p className="card-text">What standard services do you need?</p>
                            {standard}
                        <p className="card-text">What specialized services do you need?</p>
                            {specialized}
                        <a href="#" className="searchBtn">Search</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header