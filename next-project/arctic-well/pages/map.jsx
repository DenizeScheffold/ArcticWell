import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Map = () => {
  const googlemap = useRef(null);
  let map;
  // dummy values that point to STI in Liljeholmen
  const [pos, setPos] = useState({
    lat: 59.3095651,
    lng: 18.0194099,
  });

  // Amusingly enough, this implementation "works" if this file is updated while on localhost:3000/map
  // The issue is getting useEffect to automatically run again when pos is updated
  // Attempts to use setPos or to change [pos] at the end of useEffect to [pos.lat] have so far not yielded any results
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac",
      version: "weekly",
    });
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: pos,
        zoom: 15,
      });
    });
  }, []);

  return <div id="map" ref={googlemap} />;
};

export default Map;
