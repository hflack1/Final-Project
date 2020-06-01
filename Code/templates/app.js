// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.full_name === inputValue);

  console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var Model_Ranks2020 = filteredData.map(person => person.Model_Ranks2020);
  var PPR_Rank2019 = filteredData.map(person => person.PPR_Rank2019);
  var Rank_Differential = filteredData.map(person => person.Rank_Differential);
  var PlayerName = filteredData.map(person => person.full_name);
  
  console.log(Model_Ranks2020)
  console.log(PPR_Rank2019)
  console.log(Rank_Differential)

// Then, select the unordered list element by class name
    var list = d3.select(".summary");

// remove any children from the list to
    list.html("");

  list.append("li").text(`Player: ${PlayerName}`) 
  list.append("li").text(`2020 Model Ranking: ${Model_Ranks2020}`) 
  list.append("li").text(`2019 PPR Ranking: ${PPR_Rank2019}`)
  list.append("li").text(`Difference: ${Rank_Differential}`)
  

});
