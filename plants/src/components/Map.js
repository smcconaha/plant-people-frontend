import React, {useRef, useState} from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import usZips from 'us-zips';



export default function Map(props) {
  let [defaultCenter, setDefaultCenter] = useState({lat: 38.0593, lng: -84.4921});
  const inputRef = useRef(null);
  function  handleClick() {
    let zipInput = inputRef.current.value;
    let longInput = (usZips[zipInput].longitude);
    let latInput = (usZips[zipInput].latitude);
    setDefaultCenter({lat: latInput, lng: longInput});
    console.log(`lat: ${latInput}, lng: ${longInput}`)
  }
  const options = {
    disableDefaultUI: true,
    scaleControl: true,
    mapTypeId: "roadmap",
    labels: true
  };
  const key = process.env.REACT_APP_MAP_API;
  
  const { setMap, children } = props;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBIyaeTQs5G9nBD2rTzyZafihxXw-KP7K0"
  });

  const renderMap = () => {
    const loadHandler = (map) => {
      setMap(map);
    };

    return (
      <>
        <div className="input-group mb-1" style={{width: '24rem'}}>
          <input ref={inputRef} type="text" id="zipInput" className="form-control mt-0 mb-0" placeholder="Enter Zip Code" aria-label="Enter Zip Code" aria-describedby="button-addon2"/>
          <button onClick={handleClick} className="btn btn-success" type="button" id="submitBtn">Search</button>
        </div>
        <GoogleMap
          mapContainerStyle={{
            height: "46rem",
            width: "24rem",
            overflow: "hidden"
          }}
          zoom={1}
          center={defaultCenter}
          options={options}
          onLoad={loadHandler}
        >
          <MarkerF position={defaultCenter} />
          {children}
        </GoogleMap>
      </>
    );
  };

  if (loadError) {
    return <div>We are sorry, the map cannot load at this time.</div>;
  }

  return isLoaded ? renderMap() : <div>Loading...</div>;
}