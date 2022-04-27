export default function Map({}) {
  return (
    <div class="container">
      <div class="col-sm col-sm-12">
        <p class="header-map">Find your Arctic Well</p>

        <p id="location"></p>
        <div class="flex-container">
          <div class="frame">
            <div id="map"></div>

            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAX7mdZbBYLkHDuDERyWCxBju2EpZGJ3Ac&libraries=geometry&callback=initMap"></script>

            <script src="./src/js/map.js"></script>

            <div id="nearest"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
