//<!-- https://softauthor.com/show-user-location-on-google-maps-using-javascript/ -->

navigator.geolocation.getCurrentPosition(
  function (position) {
    initMap(position.coords.latitude, position.coords.longitude);
  },
  function errorCallback(error) {
    console.log(error);
  }
);

function initMap(lat, lng) {
  var myLatLng = {
    lat,
    lng,
  };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
    mapTypeControl: false,
  });

   var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
   });
  
  const iconSnowflake = "../images/SNOWFLAKE.png";

   var markerA = new google.maps.Marker({
    position: {lat: 59.31659359085035, lng: 18.041815542691243},
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });
 
  var markerB = new google.maps.Marker({
    position: {lat: 59.31686639105647, lng: 18.033475947597925},
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  var a =  new google.maps.LatLng(59.31659359085035, 18.041815542691243);
  var b = new google.maps.LatLng(59.31686639105647, 18.033475947597925);
  
//returns distance between
  console.log(google.maps.geometry.spherical.computeDistanceBetween(a, b) + " meters");
  

}