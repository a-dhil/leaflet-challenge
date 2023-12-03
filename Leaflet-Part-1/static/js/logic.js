// initialize a leaflet map
let myMap=L.map("map",{
  center:[38,97],
  zoom:4
})

//create the title layer that will be the background of the map using OpenTopoMap tile.
// let basemap = L.tileLayer(
//   "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'",
//   {
//     attribution:
//       'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
//   }).addTo(myMap);
let basemap=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// fetch the geo json data with D3
let url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// d3.json(url).then(function(response){
//   features=response.features;
//   console.log(features);
//   let marker_limit=features.length;
//   for(let i=0; i<marker_limit; i++){
//     let location=features[i].geometry;
//     //console.log(location)
//     if(location){
//       L.marker(location.coordinates[1],location.coordinates[0]).addTo(myMap);
//     }
//   }
// });

d3.json(url).then(function(response) {
  let features = response.features;
  console.log(features);

  let marker_limit = features.length;

  for (let i = 0; i < marker_limit; i++) {
    let location = features[i].geometry;

    if (location) {
      let coordinates = [location.coordinates[1], location.coordinates[0]];
      L.circleMarker(coordinates).addTo(myMap);
    }
  }
});
