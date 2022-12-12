import React from "react";
import { MarkerF } from "@react-google-maps/api";

export default function CustomMarker(props) {
  const { position, clusterer } = props;

  return <MarkerF position={position} clusterer={clusterer} />;
}