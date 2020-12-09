let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25.101327, lng: 121.5455816 },
    zoom: 15,
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.BOUNCE,
    position: { lat: 25.101327, lng: 121.5455816 },
  });
  marker.addeveListner("click", toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 10) {
    counter = 1;
  }
}, 5000);
