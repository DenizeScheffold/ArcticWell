import { memo, useState, useEffect, useRef, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// @TODO: containerStyle sucks and should be moved elsewhere

const containerStyle = {
  width: "100%",
  height: "82%"
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
    // bounds seem to be what's causing the zoom bug -- unclear whether we need it's functionality either way
    // const bounds = new window.google.maps.LatLngBounds(pos);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map){
    setMap(null);
  }, []);

  // Geolocate the user via getCurrentPosition
  // Working, but might need additional functionality to cover all our needs
  useEffect(() => {
    if("geolocation" in navigator){
      console.log("geolocation available");
      navigator.geolocation.getCurrentPosition(function (position) {
        setPos({lat: position.coords.latitude, lng: position.coords.longitude})
        console.log("setPos called");
      });
    }
    else{
      console.log("geolocation unavailable");
    }
    // @TODO: Currently only set to run once; in the future it should probably run continuously (possibly via watchCurrentPosition???)
  }, []);

  // @TODO: figure out why the initial zoom is so ridiculous
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={pos}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >{ /* Child components, such as markers and info windows go here */ }
    <></></GoogleMap>
  ) : <></>
};

export default memo(Map);
