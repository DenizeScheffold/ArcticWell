
  export default function getLocation() {
    (navigator.geolocation) 
 navigator?.geolocation.getCurrentPosition(
   ({ coords: { latitude: lat, longitude: lng } }) => {
     setPos({ lat, lng });
     console.log("geoSuccess, lat=" + lat + ", lng=" + lng);
   }
   )
  return {coords: { latitude: lat, longitude: lng }}}

