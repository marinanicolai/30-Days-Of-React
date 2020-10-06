//Declare an empty array;
const arr = Array();
//Declare an array with more than 5 number of elements
const sixElements = Array(6).fill(X);
//Find the length of your array
console.log(sixElements.length);
//Get the first item, the middle item and the last item of the array
sixElements.indexOf(0);
sixElements.indexOf((sixElements.length - 1) / 2);
sixElements.indexOf(sixElements.length - 1);
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, big, 2, small, large, 3, 5, 7];
console.log(mixedDataTypes.length);
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon];
//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
console.log(itCompanies.indexOf(0));
console.log(itCompanies.indexOf((itCompanies.length - 1) / 2));
console.log(itCompanies.indexOf(itCompanies.length - 1));
//Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
//Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const endOfsentence = ["and Amazon are big IT companies"];
const companNOamazon = itCompanies.slice(0, 6).toString;
const sentence = companNOamazon.concat(endOfsentence);
console.log(sentence);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("Amazon");
if (index != -1) {
  console.log(Amazon);
} else {
  console.log("Company not found");
}

//Filter out companies which have more than one 'o' without the filter method
for (var i = 0; i++; i = itCompanies.length - 1) {
  let item = itCompanies[i];
  for (var j = 0; j++; j = length.itCompanies[i]) {
    if (item[j] == "o" && itCompanies[j + 1] == "o") console.log(item);
  }
}

//Sort the array using sort() method
itCompanies.sort();
//Reverse the array using reverse() method
itCompanies.reverse();
//Slice out the first 3 companies from the array
itCompanies.slice(0, 3);
//Slice out the last 3 companies from the array
itCompanies.slice(4, itCompanies.length);
//Slice out the middle IT company or companies from the array
itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1);
//Remove the first IT company from the array
itCompanies.splice(0, 1);
//Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length / 2 - 1, itCompanies.length / 2);
//Remove the last IT company from the array
itCompanies.splice(itCompanies.length - 1);
//Remove all IT companies
itCompanies.splice();
