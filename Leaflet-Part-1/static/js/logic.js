// Create the tile layer that will be the background of our map.
//let streetmap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//    attribution: 'map data:&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

//});

//{
//    attribution:
//      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
//  });

// We create the tile layer that will be the background of our map.
console.log("Step 1 working");

// We create the tile layer that will be the background of our map.
let basemap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'",
  {
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  });
let myMap=L.map("map",{
    center:[11,224],
    zoom:4
});
basemap.addTo(map);

let url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function(response){
 
});