function initialize() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(40.741992, -73.927947)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var myLatlng= {lat: 40.741992, lng: -73.927947};
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Queens Vocational High School"
    });
    marker.setMap(map);
}
var brooklynNames = ["Academy of Innovative Technology", "All City Leadership", "Brooklyn School for Law and Technology", "Brooklyn Institute for Liberal Art", 
"Brooklyn International High School", "City Polytechnic High School" ];
var brooklynLatLng = {lat: 40.6928500, lng: -73.8689910, lat: 40.6975910, lng: -73.9130970, lat: 40.6884530, lng: -73.9207640, lat: 40.6586120, lng: -73.9430920, lat: 40.6973450, lng: -73.9844960, lat: 40.6956550, lng: -73.9858310};

for  (i=0; i<brooklynSchools.length; i++ ) {
    var school = brooklynSchools[i];
 
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(school.lat, school.lng)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var myLatlng= {lat: school.lat, lng: school.lng};
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: school.title
    });
    marker.setMap(map);
}
 





var brooklynSchools = [
    
    {
        title:"Academy of Innovative Technology" ,
        lat:40.6928500,
        lng:-73.8689910
    },
    
    {
        title:"All City Leadership",
        lat:40.6975910,
        lng:-73.9130970
    }
    
    {
        title:
        lat:
        lng:
    }
    
    {
        title:
        lat:
        lng:
    }
    
    {
        title:
        lat:
        lng:
    }
    
    ]