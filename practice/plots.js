var numbers = [1,2,3,4];
//square each element of array
var squared = numbers.map(number => number*number);
console.log(squared);

var nums = [0,2,4,6,8];
// add five to each element of array
var plusFive = nums.map(function(fived) {
    return fived + 5;
});
console.log(plusFive)

cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];
//generate list of all elements in 'population' category (array of same length)
cityPop = cities.map(function(pops){
    return pops.population;
});
console.log(cityPop);

var numbers = [1,2,3,4,5];
//filter numbers greater than 1
var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
//filter by words starting with the letter 's'
var startss = words.filter((word) => word.startsWith("s"));
// slice first three animals
var firstThree = words.slice(0,3);
//slice last two elements
var lastTwo = words.slice(3, );
console.log(startss);
console.log(firstThree);
console.log(lastTwo);

var familyAge = [3,2,39,37,9];
//sort by ascending age
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
//sort by descending age
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);