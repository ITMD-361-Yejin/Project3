function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.631431, lng: 127.494762 },
    zoom: 14,
  });
  var marker = new google.maps.Marker({
    position: { lat: 36.631431, lng: 127.494762 },
    map: map,
  });
  var addCircle = new google.maps.Circle({
    center: { lat: 36.631431, lng: 127.494762 },
   radius:100,
    strokeColor: "yellow",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "yellow",
    fillOpacity: 0.5,
   map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<p>Here is my hometown</p>"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
