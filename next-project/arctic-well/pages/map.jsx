import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


// @TODO: make geolocation work
// See https://developers.google.com/maps/documentation/javascript/react-map

const Map = () => {
  const googlemap = useRef(null);

  // all calls to navigator.geolocation has to happen inside of useEffect
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac",
      version: "weekly",
    });
    //for testing purposes only
    if ("geolocation" in navigator) {
      // console.log("geolocation available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("geolocation unavailable");
    }
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 59.3095651, lng: 18.0194099 },
        zoom: 15,
      });
    });
  });

  return <div id="map" ref={googlemap} />;
};

export default Map;
