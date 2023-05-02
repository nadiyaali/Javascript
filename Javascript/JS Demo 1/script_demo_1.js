//New Jacascript concepts
console.log("Hello from JS file")

// Template literals is backtick` with ${}
// used for embedding number or string inside a string
let product = "lipstick"
let price = 30 
console.log(`The ${product} is ${price + 10}`)

//** is used to add power to a number */
// 3**2 mean 3 to the power 2 and answer is 3*3=9

//use console in chrome to run code
//it uses REPL, read, evaluate, print loop

// == and === are different, called double equals
// == does not enforce type. converts one type tp another when comparing
// '1'==1 is true
// != not equal

//=== enforces type. use this one, calls triple equals
// '1'===1 false since both are different types
// !== 

//Every variable has a truthy or falsy in JS
// all are truthy, except 0, "",null, NaN. undefined, boolean false


// In JS, you can also add an item to the end of an array,
let colors=["red","yellow","green"]
colors[3]="orange"
console.log(colors)

// Arrays have push and pop function
//push adds to end of array, pop removes from the end of array
//Last In First Out
colors.push("purple")
console.log(colors)
let firstcolor=colors.pop()
console.log("first color is " + firstcolor)
console.log(colors)

//Shift and unshift add and remove item from the START of the aaray

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
//Remove the first item
planets.shift()
console.log(planets)
// Add  saturn to the end
planets.push("Saturn")
console.log(planets)
//add to the start
planets.unshift("Mercury")
console.log(planets)


//splice is used to insert items to the middle of the array


//const used woth array make the reference contant, you can change contents of array
//the array cannot be reassigned
const rainbow=["red","yellow","blue"]
rainbow.push("purple")
//this cannot be done
//rainbow=["ec","rd"]


// Nested array
const gameboard=[['X','O','X'],['X','Y','O'],['O','O','X']]
console.log(gameboard)
// to get the Y in the middle of the array
console.log(gameboard[1][1])

//JS object
const fitbitData={
    steps:6000,
    calories:2000,
    sleep:30,
    name:"Nadia"
}

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
//YOUR CODE GOES DOWN HERE:
let fullAddress=restaurant.address+ restaurant.city+restaurant.state+restaurant.zipcode
console.log(fullAddress)


//FOR loop
// Print out "Da ba dee da ba daa" 6 times, using a for loop
for(let i=0;i<6;i++){
    
    console.log("Da ba dee da ba daa")
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for(let i=0; i< people.length; i ++){
    console.log(people[i].toUpperCase())
}

//To generate random number
//random number from 1 to 10
let num= Math.floor(Math.random()*10)+1
console.log("Random number : " +num)

let num2= Math.floor(Math.random()*100)+1
console.log("Random number : " +num2)

//---------------------------------------------------
// FOR OF loop
// is used for arrays
const books=["abc","cde","efg","hij","klm","nop"]
for(let book of books)
    console.log(book)

for(let char of "Hello World")
    console.log(char)


const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
 for(let num of numbers)
    console.log(num*num)

//-----------------------------------------------------
// FOR IN loop
// is used for iterating properties in an object
let englishResult={
    nadia:100,
    amna:50,
    omair:75
}
for(let person in englishResult)
    console.log(`${person} scored : ${englishResult[person]}`)


//for objects, Object.values[englishResult]can also be used for iterating values
//Object.keys[englishResult] for iterating over keys in the object
// These are new objects
 console.log(Object.keys(englishResult))
 console.log(Object.values(englishResult))
 

 //type of returns type of variable
 console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"


// DEFINE YOUR FUNCTION BELOW:
function capitalize(word)
{
    let temp = word[0]
    let temp2= temp.toUpperCase()
    let temp3 = temp2+word.slice(1,word.length)
    return temp3
}

console.log(capitalize("nadia"))

// DEFINE YOUR FUNCTION BELOW:
function returnDay(numday)
{
    let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    if(numday <1 || numday>7)
        return null
    else
        return days[numday-1] 
    
}

console.log(returnDay(0))


const creature = "Common Sea Dragon";
 
function scubaDive(){
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}
 
scubaDive();

//a variable made using "var" is not scoped
// let and const are scoped

//function are values in javascript
// you can store them, pass them around
//A function can have a parameter of function, a return value of function

// to execute this square(4)
const square = function(num){
    return(num*num)
}


//// Javascript object with methods
const square2={
    
    area(side){
        return side*side
    },
    
    perimeter(side){
        return side*4
    }
        
}

console.log(square2.area(4))
console.log(square2.perimeter(4))


////////////////////////////////
const hen={
    name:'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount = this.eggCount+1
        console.log("EGG")
        
    }

}

console.log(hen.name)
console.log(hen.eggCount)
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
console.log(hen.eggCount)


//try catch also exist in javascript
function yell(msg){
    console.log(msg.toUpperCase().repeat(3))
}

try{
    yell("nadia ")
    //this will give error
    yell(12)
}
catch(e){
    console.log(e)
}