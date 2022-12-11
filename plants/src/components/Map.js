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
  const key = "";
  const { setMap, children } = props;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key
  });

  const renderMap = () => {
    const loadHandler = (map) => {
      setMap(map);
    };

    return (
      <>
        <div className="input-group mb-3">
          <input ref={inputRef} type="text" id="zipInput" className="form-control" placeholder="Zip Code" aria-label="Enter Zip Code" aria-describedby="button-addon2"/>
          <button onClick={handleClick} className="btn btn-outline-secondary" type="button" id="submitBtn">Search</button>
        </div>
        <GoogleMap
          mapContainerStyle={{
            height: "350px",
            width: "550px"
          }}
          zoom={1}
          center={defaultCenter}
          options={options}
          onLoad={loadHandler}
          mapContainerClassName = 'map-container'
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