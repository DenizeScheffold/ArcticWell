import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// @TODO: make geolocation work

const Map = () => {
  const googlemap = useRef(null);

  useEffect(() => {
    // all calls to navigator.geolocation has to happen inside of useEffect
    const loader = new Loader({
      apiKey: "AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac",
      version: "weekly",
    });
    if ("geolocation" in navigator) {
      //for testing purposes only
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

// ***********************************
// Old code that doesn't work anymore
// ***********************************

// const Map = () => {
//   return (
//     <div class="container">
//       <div class="col-sm col-sm-12">
//         <p class="header-map">Find your Arctic Well</p>

//         <p id="location"></p>
//         <div class="flex-container">
//           <div class="frame">
//             <div id="map"></div>

//             <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac&libraries=geometry&callback=initMap"></script>

//             <script src="./src/js/map.js"></script>

//             <div id="nearest"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;
