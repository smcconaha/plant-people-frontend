import React, { useState } from "react";
import Map from "./Map";
import { MarkerClusterer } from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";
/*global google*/

//these are locations that will need to be dynamic
const locations1 = [
  { lat: 38.202434, lng: -84.556214 },
  { lat: 38.060754, lng: -84.520278},
  { lat: 38.031078, lng: -84.472420 },
  { lat: 38.033749, lng: -84.440389 }
];


export default function MapContainer() {
  const [map, setMap] = useState(null);

  function mapFitBounds() {
    // console.log("mapFitBounds:map> ", map);
    if (!map) return;

    const bounds = new google.maps.LatLngBounds();
    locations1.map((loc) => {
      bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
    });

    map.fitBounds(bounds);
  }

  React.useEffect(() => {
    if (map) {
      mapFitBounds();
    }
  }, [map]);

  return (
    <div className="text-center">
      <Map setMap={setMap}>
        <MarkerClusterer>
          {(clusterer) =>
            locations1.map((loc) => (
              <CustomMarker
                key={loc.lat}
                position={loc}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>
      </Map>
    </div>
  );
}