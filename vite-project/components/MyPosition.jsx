//<!-- https://softauthor.com/show-user-location-on-google-maps-using-javascript/ -->

export default function MyPosition() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      initMap(position.coords.latitude, position.coords.longitude);
    },
    function errorCallback(error) {
      console.log(error);
    }
  );
  return function initMap(lat, lng) {
    var myLatLng = {
      lat,
      lng,
    };
  };
}
