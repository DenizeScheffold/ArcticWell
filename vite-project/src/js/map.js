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
  
  const iconSnowflake = "../src/images/SNOWFLAKE.png";
  const biggestIconSnowflake = "../src/images/SNOWFLAKE@3x.png";

   var markerA = new google.maps.Marker({
    position: {lat: 59.31659359085035, lng: 18.041815542691243},
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  var markerB = new google.maps.Marker({
    position: { lat: 59.31686639105647, lng: 18.033475947597925 },
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  var markerC = new google.maps.Marker({
    position: { lat: 59.31828843784773, lng: 18.064145515875364 },
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  var markerD = new google.maps.Marker({
    position: { lat: 59.32271988404267, lng: 18.072194830717475 },
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  var markerE = new google.maps.Marker({
    position: { lat: 59.33153683040702, lng: 18.07071805585366 },
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  var markerF = new google.maps.Marker({
    position: { lat: 59.33501439604125, lng: 18.064538246389937 },
    map: map,
    title: "Artic Well",
    icon: iconSnowflake,
  });

  calculateNearestBooth(myLatLng);

}

function calculateNearestBooth(myLatLng){
  
  //calculate nearest marker
  const markers = [
    {
      name: "Hornsgatan 136",

      position: new google.maps.LatLng(59.31659359085035, 18.041815542691243),

      distance: google.maps.geometry.spherical.computeDistanceBetween(
        myLatLng,
        new google.maps.LatLng(59.31659359085035, 18.041815542691243)
      ),
    },

    {
      name: "Långholmsgatan 15E",

      position: new google.maps.LatLng(59.31686639105647, 18.033475947597925),

      distance: google.maps.geometry.spherical.computeDistanceBetween(
        myLatLng,
        new google.maps.LatLng(59.31686639105647, 18.033475947597925)
      ),
    },

    {
      name: "Mariatorget 3",

      position: new google.maps.LatLng(59.318299387018456, 18.064070414021298),

      distance: google.maps.geometry.spherical.computeDistanceBetween(
        myLatLng,
        new google.maps.LatLng(59.31832128534937, 18.064091871693886)
      ),
    },

    {
    name: "Kornhamnstorg 59",

    position: new google.maps.LatLng(59.32271988404267, 18.072194830717475),

    distance: google.maps.geometry.spherical.computeDistanceBetween(
      myLatLng,
      new google.maps.LatLng(59.32271988404267, 18.072194830717475)
    ),
  },

  {
    name: "Jussi Björlings allé",

    position: new google.maps.LatLng(59.331531357954, 18.070782428871436),

    distance: google.maps.geometry.spherical.computeDistanceBetween(
      myLatLng,
      new google.maps.LatLng(59.331531357954, 18.070782428871436)
    ),
  },

  {
    name: "Sergels torg",

    position: new google.maps.LatLng(  59.33501439604125, 18.064538246389937),

    distance: google.maps.geometry.spherical.computeDistanceBetween(
      myLatLng,
      new google.maps.LatLng(  59.33501439604125, 18.064538246389937)
    ),
  },
  ];

  console.log(markers);

  const markersWithDistance = markers.map((marker) => {
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      myLatLng,
      marker.position
    );

    return { marker, distance: distance};
  });

  console.log(markersWithDistance);

  const markersByDistance = markersWithDistance.sort((a, b) => {
    return a.distance - b.distance;
  });

  console.log(markersByDistance[0]);

  const closestMarker = markersByDistance[0];

  console.log("closest marker is: ", closestMarker, "the name of the marker is: ", closestMarker.marker.name);

  //document.write(closestMarker.marker.name);

 //   //not working - should place new icon for closest marker...:
   var setIcon = new google.maps.Marker({
     position: closestMarker,
     map: map,
     title: "Nearest Artic Well",
     icon: biggestIconSnowflake,
   });
   setIcon.setMap(map);

}