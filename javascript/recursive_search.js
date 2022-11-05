let array = [1,2,3,4,5,6,7,8,9,10]

function recursiveSearch(arr, target) {
   let evens = []
   let odds = []
  arr.forEach(eachOne => {
    eachOne % 2 == 0 ? 
    evens.push(eachOne)
    : odds.push(eachOne)
  })
  if(target %2 == 0){
    evens.forEach(each => each === target? console.log("Number was found!") : console.log("Number was not found!"))
  } else if (target %2 != 0){
      odds.forEach(each => each === target? console.log("Number was found!") : console.log("Number was not found!"))
    } 
}
console.log(recursiveSearch(array, 10))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
