

var x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


   // const positionInput = document.getElementById("location").value;
const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac&callback=myMap"

const xhttp = new XMLHttpRequest();
xhttp.open("GET", url);
xhttp.onload = 
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(59.305998776,18.020166586),
  zoom:15,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

}

