import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

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
        console.log("inside getCurrentPosition, pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
      });
      console.log("outside getCurrentPosition, pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
    }
    // Currently only set to run once; in the future it should run continuously (possibly via watchCurrentPosition???)
  },[]);

  // Not functional (yet)
  useEffect(() => {
    if(!pos.lat || !pos.lng){
      // console.log("!pos=" + !pos);
      console.log("pos.lat or pos.lng updated");
      console.log("!pos.lat=" + !pos.lat + ", !pos.lng=" + !pos.lng);
      console.log("pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
      // map = google.maps.Map(googlemap.current, {
      //   center: { lat: pos.lat, lng: pos.lng },
      // });
      // console.log("map re-centered");
    }
  }, [pos.lat, pos.lng]);

  return <div id="map" ref={googlemap} />;
};

export default Map;
