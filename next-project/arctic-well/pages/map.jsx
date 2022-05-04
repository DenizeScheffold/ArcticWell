import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {
  const googlemap = useRef(null);
  let map;
  // dummy values that point to STI in Liljeholmen
  const [pos, setPos] = useState({
    lat: 0,
    lng: 0,
  });

  // Initialize the map with dummy coordinates
  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac",
      version: "weekly",
    });
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 59.3095651, lng: 18.0194099 },
        zoom: 15,
      });
      console.log("map initialized");
    });
  }, []);

  // Geolocate the user via getCurrentPosition
  // Functional, but likely needs expanding to cover all our needs
  useEffect(() => {
    if("geolocation" in navigator){
      console.log("geolocation available");
      navigator.geolocation.getCurrentPosition(function (position) {
        setPos({lat: position.coords.latitude, lng: position.coords.longitude})
      });
    }
    else{
      console.log("geolocation unavailable");
    }
    // @TODO: Currently only set to run once; in the future it should maybe run continuously (possibly via watchCurrentPosition???)
  }, []);

  // Functional for now, but likely won't work properly if we want to add markers to the map at runtime
  useEffect(() => {
    console.log("entered useEffect #3 -- pos.lat or pos.lng updated");
    // Enter this block if pos.lat or pos.lng still have the initial value of 0
    if(!pos.lat || !pos.lng){
      // We don't need to do anything here for now
      // console.log("inside if(!pos.lat || !pos.lng)");
      // console.log("pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
    }
    else{
      // This is where we re-center the map on the user's coordinates
      console.log("inside else-block");
      console.log("!pos.lat=" + !pos.lat + ", !pos.lng=" + !pos.lng);
      console.log("pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
      // @TODO: this should update the existing map rather than create a new one
      // it's proving to be very difficult to access the initialized one though
      map = new google.maps.Map(googlemap.current, {
        center: {lat: pos.lat, lng: pos.lng},
        zoom: 15,
      });
      console.log("map re-centered");
    } 
  }, [pos.lat, pos.lng]);

  return <div id="map" ref={googlemap} />;
};

export default Map;
