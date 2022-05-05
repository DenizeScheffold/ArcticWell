import { memo, useState, useEffect, useRef, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import * as markerData from "../db/markers.json";
import Image from 'next/image'

// @TODO: containerStyle should be moved elsewhere, this is a hacky solution

const containerStyle = {
  width: "100%",
  height: "80%"
};

const Map = () => {

  const [pos, setPos] = useState({
    lat: 59.3095651,
    lng: 18.0194099,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac"
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map){
    // @TODO: clean this up when functional
    // bounds seem to be what's causing the zoom bug -- unclear whether we need it's functionality either way
    // const bounds = new window.google.maps.LatLngBounds(pos);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map){
    setMap(null);
  }, []);

  // Super hacky way of tying geolocation to a user action
  // Works by centering the map on the user when/if they left click the map
  // Does it work on mobile devices?? No idea. A better solution should be found
  // @TODO: make a non-hacky implementation of this, preferably tied to a button 
  const onClick = useCallback(function callback(map){
    navigator?.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => 
    {setPos({lat, lng})});
  }, []);

  // @TODO: import and map the markers from markers.json instead of using hardcoded values
  // they may need to be parsed into arrays using JSON.parse() before map() can be used
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={pos}
      zoom={15}
      onLoad={onLoad}
      onClick={onClick}
      onUnmount={onUnmount}
    >
      <Marker
      position={{lat: 59.31659359085035, lng: 18.041815542691243}}
      icon={"/boxMarker.png"}
      />
      <Marker
      position={{lat: 59.31686639105647, lng: 18.033475947597925}}
      icon={"/boxMarker.png"}
      />
      <Marker
      position={{lat: 59.318299387018456, lng: 18.064070414021298}}
      icon={"/boxMarker.png"}
      />
      <Marker
      position={{lat: 59.32271988404267, lng: 18.072194830717475}}
      icon={"/boxMarker.png"}
      />
      <Marker
      position={{lat: 59.331531357954, lng: 18.070782428871436}}
      icon={"/boxMarker.png"}
      />
      { /* Child components, such as markers and info windows go here */ }
    <></></GoogleMap>
  ) : <></>
};

export default memo(Map);
