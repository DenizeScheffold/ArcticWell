import { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

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
    navigator.geolocation.getCurrentPosition(function (position) {
      pos.lat = position.coords.latitude;
      pos.lng = position.coords.longitude;
    });
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
  }, [pos.lat, pos.lng]); // Unsure if this works; [pos] on it's own likely doesn't though

  return <div id="map" ref={googlemap} />;
};

export default Map;

// @TODO: remove this code after properly implementing the issues it attempts to solve

// Below is a hacky implementation of promises to handle loading the map AFTER receiving the user's location
// Using a hardcoded value of xxxx miliseconds is however not acceptable in the final product
// Leaving it here as an illustration for now. 

// const Map = () => {
//   const googlemap = useRef(null);
//   // dummy values that point to STI in Liljeholmen
//   const [pos, setPos] = useState({
//     lat: 59.3095651,
//     lng: 18.0194099,
//   });
//   function getUserPos() {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       pos.lat = position.coords.latitude;
//       pos.lng = position.coords.longitude;
//     });
//   };

//   // Amusingly enough, this implementation "works" if this file is updated while on localhost:3000/map
//   // The issue is getting useEffect to automatically run again when pos is updated
//   // Attempts to use setPos or to change [pos] at the end of useEffect to [pos.lat] have so far not yielded any results
//   useEffect(() => {
//     console.log("after call to getCurrentPosition");
//     console.log("pos.lat=" + pos.lat + ", pos.lng=" + pos.lng);
//     const loader = new Loader({
//       apiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac",
//       version: "weekly",
//     });
//     loader.load().then(() => {
//       const google = window.google;
//       let map;
//       let userLocationPromise = new Promise(function (myResolve, myReject) {
//         setTimeout(getUserPos(), 5000);
//         setTimeout(() => { 
//           if (pos.lat !== 59.3095651 || pos.lng !== 18.0194099) {
//             myResolve("User location acquired");
//           } else {
//             myReject("Geolocation not supported");
//           }
//         }, 3000);
//       });
//       userLocationPromise.then(() => {
//         map = new google.maps.Map(googlemap.current, {
//           center: pos,
//           zoom: 15,
//         });
//       });
//     });
//   }, [pos.lat, pos.lng]); // Unsure if this works; [pos] on it's own likely doesn't though

//   return <div id="map" ref={googlemap} />;
// };

// export default Map;