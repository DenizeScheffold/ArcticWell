import Head from "next/head";
import { memo, useState, useEffect, useRef, useCallback } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import markerData from "../db/markers.json";
import Image from "next/image";
import Location from "../components/Location";

// @TODO: containerStyle should be moved elsewhere, this is a hacky solution

const containerStyle = {
  width: "100%",
  height: "80%",
};

const Map = () => {
  <Head>
    <title>Find your Arctic Well</title>
  </Head>;
  
  const [pos, setPos] = useState({
    lat: 59.3095651,
    lng: 18.0194099,
  });

  const { isLoaded } = useJsApiLoader({
    id: process.env.ID,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  // @TODO: to complete https://github.com/DenizeScheffold/ArcticWell/issues/16 LatLngBounds could be used
  // the idea would be to use LatLngBounds.extends to increase the size of the viewport to include the marker closest to the user
  // the code that has been commented out below can be used as a base template for this
  // see also https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds
  // be careful to not re-introduce the zoom-in bug when implementing
  const onLoad = useCallback(function callback(map) {
    // bounds seem to be what's causing the zoom bug
    // most likely fitBounds should be called differently
    // const bounds = new window.google.maps.LatLngBounds(pos);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);



  // Super hacky way of tying geolocation to a user action
  // Works by centering the map on the user when/if they left click the map
  // @TODO: tie this to a button instead
  const centerMap = useCallback(function callback(map) {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setPos({ lat, lng });
        console.log("geoSuccess, lat=" + lat + ", lng=" + lng);
      },
      geoError,
      geoOptions
    );
  }, []);

  const geoError = (error) => {
    console.log("Error code=" + error.code);
  };
  // Theoretically this cuts down on API requests by using cached values, provided they exist and are younger than maximumAge
  // @TODO: test if it actually works as intended
  const geoOptions = {
    maximumAge: 5 * 60 * 1000,
  };

  // The first Marker is the user's (geolocated) position, the 2nd loads the values in markers.json
  // @TODO: make the infoWindow only pop up for boxes the user has clicked on
  return isLoaded ? (
    <GoogleMap
      id={"arctic-map"}
      mapContainerStyle={containerStyle}
      center={pos}
      zoom={15}
      onLoad={onLoad}
      onClick={centerMap}
      onUnmount={onUnmount}
    >
      <Location />
      <Marker position={pos} />
      {markerData.map((arcticWellMarker) => (
        <Marker
          key={arcticWellMarker.name}
          position={{ lat: arcticWellMarker.lat, lng: arcticWellMarker.lng }}
          icon={arcticWellMarker.icon}
        >
          <InfoWindow anchor={arcticWellMarker}>
            <div>{arcticWellMarker.name}</div>
          </InfoWindow>
        </Marker>
         
      ))}
      {/* Child components, such as markers and info windows go here */}
      <></>
    </GoogleMap>
    
  ) : (
    <></>
  );
};

export default memo(Map);
