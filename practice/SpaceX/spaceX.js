const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

//?? Use map to print longitude/latitude
d3.json(url).then(function(data){
    latitude = data.map(location = location.latitude);
    console.log(latitude);
});
//d3.json(url).then(spaceXResults => console.log(spaceXResults.map(spaceXResults.latitude)));

