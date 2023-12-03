// initialize a leaflet map
let myMap=L.map("map",{
  center:[38,-94],
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
//Function to map magnitude to marker size
function getSize(magnitude) {
  const size = Math.sqrt(magnitude) * 4;
  return isNaN(size) ? 4 : size; // Use a default size (5 in this case) if NaN
}

function getColor(depth) {
  let color=""
  if (depth < -10) {
    return color= '#0008000';
  } else if (depth >= -10 && depth < 10) {
    return color= '#A3F600';
  } else if (depth >= 10 && depth < 30) {
    return color= '#DCF400';
  } else if (depth >= 30 && depth < 50) {
    return color= '#F7DB11';
  } else if (depth >= 50 && depth < 70) {
    return color= '#FDB72A';
  } else if (depth >= 70 && depth < 90) {
    return color='#FCA35D';
  } else {
    return color= '#FF5F65';
  }
}

d3.json(url).then(function(response) {
  let features = response.features;
  console.log(features);

  let marker_limit = features.length;

  for (let i = 0; i < marker_limit; i++) {
    let location = features[i].geometry;
    //let magnitude=features.properties.mag;
    if (location) {
      let depth= location.coordinates[2];
      let magnitude=features[i].properties.mag;
      let coordinates = [location.coordinates[1], location.coordinates[0]];
      L.circleMarker(coordinates,{
        radius:getSize(magnitude),
        color: getColor(depth),
        fillColor:getColor(depth),
        fillOpacity:0.75,
      }).addTo(myMap);
    }
  }
});
