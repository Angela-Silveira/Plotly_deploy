console.log(cityGrowths);

//sort by population increase
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities);

// slice top five cities by popultion growth
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// select city name and population growth from array elements
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths)

// create bar graph of top 5 cities for population growth
var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// sort by population
var sortedCitiesPop = cityGrowths.sort((a,b) => a.population - b.population).reverse();
console.log(sortedCitiesPop);

// slice top seven cities by population
var topSevenCities = sortedCitiesPop.slice(0,7);
console.log(topSevenCities);

//select city name and population from each array element
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPops = topSevenCities.map(city => parseInt(city.population));
console.log(topSevenCityPops)

//create bar chart
var trace = {
  x: topSevenCityNames,
  y: topSevenCityPops,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Populated Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population"}
};
Plotly.newPlot("bar-plot", data, layout);