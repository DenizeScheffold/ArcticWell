
  export default function getLocation() {
    (navigator.geolocation) 
 navigator?.geolocation.getCurrentPosition(
   ({ coords: { latitude: lat, longitude: lng } }) => {
     setPos({ lat, lng });
     console.log("geoSuccess, lat=" + lat + ", lng=" + lng);
   }
   )
  return {coords: { latitude: lat, longitude: lng }}}


// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }