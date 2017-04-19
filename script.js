$(document).ready(function(){
     function initialize() {
  var mapOptions = {
     voom: 8,
     center: new google.maps.LatLng
            (40.741992,-73.927947)
    };
  var map = new google.maps.map(
      document.get.ElementById('map-canvas'),
      mapOptions);
    }
     function loadScript() {
 var script = document.createElement('script')
     script.type = 'text/javascript';
     script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 
                  'callback=initialize';
     script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBUBbDo50tZlJK9s_ODHVGGNjodukds0OQ'
    document.body.appendChild(script);
    }
window.onload = loadScript;
    });