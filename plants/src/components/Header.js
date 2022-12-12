import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useGlobalState } from "./../context/GlobalState";
import "./../App.css"

const Header = (props) => {    
    const [state, dispatch] = useGlobalState(); 

    useEffect(() => {
        dispatch({
            ...state,
            service: [],
        })
    }, [])

//Service array functionality
    function handleChange (e) {        
        if (e.target.checked) {
            dispatch({
                ...state,
                service: [...state.service, e.target.value]
            })
        } else {
            let services = state.service.filter(s => s !== e.target.value)
            dispatch({
                ...state,
                service: services
            })
        }
    }

    const handleInput = (key, value) => {
        dispatch({
            ...state,
            [key]: value
        })
        console.log(state)
    }

    // const handleSearch = () => {
    //     dispatch({
    //         ...search,
    //         [key]: value
    //     })
    //     console.log(search)
    // }

    let data = [...props.searchData]
    let location = []
    let standard = []
    let specialized = []

    for (const entry of data) {
        if (entry.service_type === 'location') {
            location.push(
                <>
                    <div className="form-check">
                        <input key={entry.id} onChange={handleChange} className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label  key={entry.name.id} className="form-check-label" for="flexCheckDefault" style={{ fontFamily: 'Libre Baskerville'}}>
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
        if (entry.service_type === 'standard') {
            standard.push(
                <>
                    <div className="form-check">
                        <input  key={entry.id} onChange={handleChange} className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label  key={entry.name.id}  className="form-check-label" for="flexCheckDefault" style={{ fontFamily: 'Libre Baskerville'}}>
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
        if (entry.service_type === 'specialized') {
            specialized.push(
                <>
                    <div className="form-check">
                        <input  key={entry.id} onChange={handleChange} className="form-check-input" type="checkbox" id="flexCheckChecked" value={entry.name}/>
                        <label  key={entry.name.id} className="form-check-label" for="flexCheckDefault" style={{ fontFamily: 'Libre Baskerville'}}>
                            {entry.name}
                        </label>
                    </div>
                </>
            )
        }
    }
    return (
        <div className="header-wrapper pt-5 mt-5">
            <div className="row">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content center">
                            <div className="main-info pt-5 mt-5"> 
                                <div className="container-fluid main-greet p-2">
                                    <h1 className="main-greet mt-2">Find Plant Care Near You</h1>
                                </div>
                                <div className="card text-center mt-4">
                                    <div className="search-card-body">
                                        <form>
                                        {/* <form onSubmit={handleSearch}> */}
                                            <h5 className="search-card-title mt-1">What customized care do your plants need?</h5>
                                            <p className="search-card-text mt-3">Do you need boarding or drop-in service?</p>
                                                {location}
                                            <p className="search-card-text mt-2">What standard services do you need?</p>
                                                {standard}
                                            <p className="search-card-text mt-2">What specialized services do you need?</p>
                                                {specialized}
                                            <input
                                                id='zip_code'
                                                type='text'
                                                className='form-control mt-2'
                                                placeholder='Enter Zip Code'
                                                name='zip_code'
                                                onChange={(e) => handleInput('zip_code', e.target.value)}
                                                required
                                            />
                                            <Link
                                                to="/result"
                                                className="searchBtn"
                                                // onClick={(e) => handleSearch}
                                                type='submit'>
                                                Search Listings
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header