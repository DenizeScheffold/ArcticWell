


//<!-- https://softauthor.com/show-user-location-on-google-maps-using-javascript/ -->

navigator.geolocation.getCurrentPosition(
   function (position) {
      initMap(position.coords.latitude, position.coords.longitude)
   },
   function errorCallback(error) {
      console.log(error)
   }
);

function initMap(lat, lng) {
var myLatLng = {
   lat,
   lng
};
 //  var marker = new google.maps.Marker({
  //     position: myLatLng,
  //     map: map,
  //  });
  


var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng,
      mapTypeControl: false
      
  });

  /*

  <!-- 
<script>
  function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(57.305998776,18.020166586),
    zoom:15,
  };
  var map = new google.maps.Map(document.getElementById("map"),mapProp);
  }
  </script> --> 
  */
}