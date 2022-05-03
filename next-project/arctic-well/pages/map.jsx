import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// @TODO: make geolocation work
// See https://developers.google.com/maps/documentation/javascript/react-map

const Map = () => {
  const googlemap = useRef(null);
  // dummy values that point to STI in Liljeholmen
  const [pos, setPos] = useState({
    lat: 59.3095651,
    lng: 18.0194099,
  });

  // Amusingly enough, this implementation "works" if this file is updated while on localhost:3000/map
  // The issue is getting useEffect to automatically run again when pos is updated
  // Attempts to use setPos or to change [pos] at the end of useEffect to [pos.lat] have so far not yielded any results
  useEffect(() => {
    console.log("start of useEffect");
    console.log("pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
    navigator.geolocation.getCurrentPosition(function (position) {
      pos.lat = position.coords.latitude;
      pos.lng = position.coords.longitude;
    }); //
    console.log("after call to getCurrentPosition");
    console.log("pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
    const loader = new Loader({
      apiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac",
      version: "weekly",
    });
    loader.load().then(() => {
      const google = window.google;
      let map;
      map = new google.maps.Map(googlemap.current, {
        center: pos,
        zoom: 15,
      });
    });
  }, [pos]);

  return <div id="map" ref={googlemap} />;
};

export default Map;
