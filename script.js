
    function initialize() {
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(40.741992, -73.927947)
        };
        var map = new google.maps.Map(
            document.getElementById('map-canvas'),
            mapOptions);
    }


