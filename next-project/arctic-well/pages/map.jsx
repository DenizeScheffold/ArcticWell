import Head from "next/head";
import { memo, useState, useEffect, useRef, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import * as markerData from "../db/markers.json";
import Image from "next/image";

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
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac",
  });

  const [map, setMap] = useState(null);

  // @TODO: to complete https://github.com/DenizeScheffold/ArcticWell/issues/16 LatLngBounds can be used
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
  // Does it work on mobile devices?? No idea. A better solution should be found
  // @TODO: make a non-hacky implementation of this, preferably tied to a button
  const onClick = useCallback(function callback(map) {
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
  const geoOptions = {
    maximumAge: 5 * 60 * 1000,
  };

  // @TODO: import and map the markers from markers.json instead of using hardcoded values
  // they may need to be parsed into arrays using JSON.parse() before map() can be used
  // The first Marker is the user's position, and should not be removed or changed for now
  return isLoaded ? (
    <GoogleMap
      id={"arctic-map"}
      mapContainerStyle={containerStyle}
      center={pos}
      zoom={15}
      onLoad={onLoad}
      onClick={onClick}
      onUnmount={onUnmount}
    >
      <Marker position={pos} />
      <Marker
        position={{ lat: 59.31659359085035, lng: 18.041815542691243 }}
        icon={"/boxMarker.png"}
      />
      <Marker
        position={{ lat: 59.31686639105647, lng: 18.033475947597925 }}
        icon={"/boxMarker.png"}
      />
      <Marker
        position={{ lat: 59.318299387018456, lng: 18.064070414021298 }}
        icon={"/boxMarker.png"}
      />
      <Marker
        position={{ lat: 59.32271988404267, lng: 18.072194830717475 }}
        icon={"/boxMarker.png"}
      />
      <Marker
        position={{ lat: 59.331531357954, lng: 18.070782428871436 }}
        icon={"/boxMarker.png"}
      />
      {/* Child components, such as markers and info windows go here */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
