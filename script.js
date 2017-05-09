function initialize() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(40.741992, -73.927947)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    // var myLatlng = {
    //     lat: 40.741992,
    //     lng: -73.927947
    // };
    // var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     title: "Queens Vocational High School"
    // });
    // marker.setMap(map);
    
    addMarkers(map);
}
var brooklynNames = ["Academy of Innovative Technology", "All City Leadership", "Brooklyn School for Law and Technology", "Brooklyn Institute for Liberal Art",
    "Brooklyn International High School", "City Polytechnic High School"
];
var brooklynLatLng = {
    lat: 40.6928500,
    lng: -73.8689910,
    lat: 40.6975910,
    lng: -73.9130970,
    lat: 40.6884530,
    lng: -73.9207640,
    lat: 40.6586120,
    lng: -73.9430920,
    lat: 40.6973450,
    lng: -73.9844960,
    lat: 40.6956550,
    lng: -73.9858310
};








var brooklynSchools = [

    {
        title: "Academy of Innovative Technology",
        lat: 40.6928500,
        lng: -73.8689910
    },

    {
        title: "All City Leadership",
        lat: 40.6975910,
        lng: -73.9130970
    },

    {
        title: "Brooklyn School for Law and Technology",
        lat: 40.688453,
        lng: -73.920764
    },

    {
        title: "Brooklyn Institute for Liberal Art",
        lat: 40.658612,
        lng: -73.943092
    },

    {
        title: "Brooklyn International High School",
        lat: 40.697345,
        lng: -73.984496
    },

    {
        title: "City Polytechnic High School",
        lat: 40.695655,
        lng: -73.985831
    },

    {
        title: "Clara Barton High School",
        lat: 40.669119,
        lng: -73.961743
    },

    {
        title: "George Westinghouse High School",
        lat: 40.695863,
        lng: -73.985586

    }, {
        title: "The Green School",
        lat: 39.324285,
        lng: -76.571795

    }, {

        title: "Greenpoint Art & Technology HS",
        lat: 40.722445,
        lng: -73.953223

    },

    {

        title: "High School for Global Citizenship",
        lat: 40.669956,
        lng: -73.961120

    },

    {

        title: "HS for Youth & Community Development",
        lat: 40.649500,
        lng: -73.958162

    },

    {

        title: "International School at Prospect Heights",
        lat: 40.669949,
        lng: -73.961702

    },

    {

        title: "Lyons Community School",
        lat: 40.709765,
        lng: -73.944519

    },

    {

        title: "P-TECH High School",
        lat: 40.709765,
        lng: -73.944519

    },

    {

        title: "Science Skills Center High School",
        lat: 40.697519,
        lng: -73.984778

    },

    {

        title: "Uncommon Charter High School",
        lat: 40.677516,
        lng: -73.942071

    },

    {

        title: "Uncommon COLLEGIATE Charter HS",
        lat: 40.684677,
        lng: -73.947837

    },

    {

        title: "Williamsburg Charter High School",
        lat: 40.703511,
        lng: -73.935806

    }

];


function addMarkers(map) {
    for (i = 0; i < brooklynSchools.length; i++) {
        var school = brooklynSchools[i];

        var myLatlng = {
            lat: school.lat,
            lng: school.lng
        };
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: school.title,
            map: map
        });
    }
}

var manhattanSchools = [
    
    
    
    
    
    
    ]
