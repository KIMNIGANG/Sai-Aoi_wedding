let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.101327, lng: 121.5455816 },
    zoom: 13,
  });
}
