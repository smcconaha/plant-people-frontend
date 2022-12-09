import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { useGlobalState } from "./../context/GlobalState";

const Header = (props) => {    
    const [search, setSearch] = useGlobalState({
        service: [],
        zip_code: '',
    }); 

//Service array functionality
    function handleChange (e, service) {

        let arr_service = []

        if (search.service) {

            arr_service = [...search.service]
        }


        if (e.target.checked) {
            console.log(e.target.value)
            arr_service.push(e.target.value)
        } else {
            let deleteIndex = arr_service.indexOf(e.target.value)
            arr_service.splice(deleteIndex, 1)
        }
        setSearch({
            "service": arr_service,
            "zipcode": '',
        })
        console.log(search)
    }

    const handleInput = (key, value) => {
        setSearch({
            ...search,
            [key]: value
        })
        console.log(search)
    }

    // const handleSearch = () => {
    //     setSearch({
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
                        <label  key={entry.name.id} className="form-check-label" for="flexCheckDefault">
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
                        <label  key={entry.name.id}  className="form-check-label" for="flexCheckDefault">
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
                        <label  key={entry.name.id} className="form-check-label" for="flexCheckDefault">
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
                        <form>
                        {/* <form onSubmit={handleSearch}> */}
                            <h5 className="card-title">What customized car do your plants need?</h5>
                            <p className="card-text">Do you need boarding or drop-in service?</p>
                                {location}
                            <p className="card-text">What standard services do you need?</p>
                                {standard}
                            <p className="card-text">What specialized services do you need?</p>
                                {specialized}
                            <input
                                id='zip_code'
                                type='text'
                                className='form-control'
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
    )
}

export default Header