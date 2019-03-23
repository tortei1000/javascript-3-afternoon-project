/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructiring to save the property values from the object carDetails into new variables. 
*/

let {color, make, model, year} = carDetails



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  let {firstName, lastName, title} = obj
  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/
let obj = {
  utah: 1,
  california: 22,
  texas: 2,
  arizona: 3
}
function totalPopulation({utah, california, texas, arizona}){
  console.log(utah, california)
  let totPop = utah + california +texas + arizona
  return totPop
}
totalPopulation(obj)


////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

foods = {
  carb:'good',
  fat:'bad',
  protein:'ugly'
}

function ingredients({carb, fat, protein}){
  let words = [carb, fat, protein]
  console.log(words)
  return words
}
ingredients(foods)


////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

let nums = {}
function largeNumbers({first, second, third}={nums})
  {
    nums.first = 1
    nums.second = 3
    nums.third = 6
    console.log(nums, nums.first, nums.second, nums.third)
    var arr = Object.keys( nums ).map(function ( key ) { return nums[key]; });
    var min = Math.min.apply( null, arr );
    
    return min
  }
    



////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

let nums = {}
function numberGroups({a, b, c} = {nums}){
nums.a = [1,2],
nums.b = [1,2,3,4,5],
nums.c = [1,2,3]
if(nums.a.length > nums.b.length && nums.a.length > nums.c.length){
  return nums.a
  } else if(nums.b.length > nums.a.length && nums.b.length > nums.c.length){
   return nums.b
  } else return nums.c
    
}



