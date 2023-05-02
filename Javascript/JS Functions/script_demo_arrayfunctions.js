/////////////////////////////////////////////////////////
//foreach
// foreach is used for running a function on eachelement of an array
//function can be a seperate function or one that is defined inline

const arr=[1,2,3,4,5,6,7,8,9,10,11,12]

function printConsole(text)
{
    console.log(text)
}

arr.forEach(printConsole)

//usually inline functions are used
//now more commonly for of is used

arr.forEach(function (el){
    console.log(el)
})

for(let temp of arr){
    if(temp%2 === 0)
        console.log(temp)
}

// this is an array of objects
const movies=[
    {
        title:"Alien",
        score:90
    },

    {
        title:"Parasite",
        score:95
    },
    {
        title:"Mrs Harris",
        score:100
    }

]

movies.forEach(function(movie){
    console.log(`movie : ${movie.title} - ${movie.score}`)     
})

////////////////////////////////////////////////////////////////
//map
//map runs a function on each element of the array and reurns a new array
//the original array remains unchanged
const doubles = arr.map(function(num){
    return num*2
})
console.log("MAP")
console.log(doubles)

const movieNames = movies.map(function(movie){
    return movie.title.toUpperCase()
})
console.log(movieNames)

//practice
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(name){
    return name.first   
})
console.log(firstNames)


//////////////////////////////////////////////////////////
//Arrow Functions
// used to create inline function
//normal way

function add(x,y){
    return x+y;
}

//inline
const ans = function(x,y){
    return x+y;
}

//arrow syntax
const add2 = (x,y) => {
    return x+y;
}

console.log("Arrow function name is add2")
console.log(`${add2(6,9)}`)

//different syntax but works same
const square = (x) => {
    return x*x;
}
console.log("Arrow function name is square")
console.log(`${square(6)}`)

const square2 = x => {
    return x*x;
}
console.log("Arrow function name is square")
console.log(`${square2(7)}`)

//practice
const greet=(name) =>{
    return `Hey ${name}!`
}
console.log(greet("Hagrid")) //"Hey Hagrid!" 
console.log(greet("Luna")) //"Hey Luna!"

//arrow functions can be made even mnore short using implicit return
//implicit returns only work if there is only one line in the function

//arrow syntax
const square22 = (x) => {
    return x*x
}

//arrow syntax
const square3 = x => {
    return x*x
}

//arrow syntax, brackets change
const square4 = x => (
    x*x
)

const square5 = x => x*x


///////////////////////////////////////////////////////////////
// Time out
setTimeout(function(){
    console.log("Hello Nadia")
},2000)

//Arrow timeout
setTimeout(() => console.log("Hello Nadia"),2000)

//const id = setInterval(() => console.log(Math.random()),2000)
//console.log(id)
//clearInterval(id)


//////////////////////////////
// filter
arrfilter = arr.filter(num => num < 10 )
console.log(arrfilter)


////////////////////////////////////////
//every() works on every elemnt of the array
//it returns boolean, true or false
//if even one element returns false, whole every is false

const exams=[80,97,90,85,85,92,87]
const isExamPass = exams.every(score => score >=80)
console.log(`Exam Pass = ${isExamPass}`)

//////////////////////////////////////////////////////
//some() returns true if even only one element returns true 
const isContainLetter= movies.some(function(mName){
    return mName.title.indexOf('s') >-1
})
console.log(`Movie Name contains s : ${isContainLetter}`)


///////Practice
// this function checks if all ements in the array are even
// returns true or false accordingly
function allEvens(numbers)
{
    return numbers.every(num => num%2 === 0)
}


//////////////////////////////////////////////////////////
//reduce(accumulator, currentvalue)
// applies some function on the whole array to reduce it to a singlr value

const easyNums=[1,2,6,8,9,3,7,19,3]
const sumNums = easyNums.reduce(function(accumulator, currentvalue){
    return accumulator+currentvalue;
})

console.log(`The sum is : ${sumNums}`)

const bigNum = easyNums.reduce(function(tempNum, currentValue){
    if(currentValue<tempNum)
        return tempNum
    else 
        return currentValue
})
console.log(`The biggest number is : ${bigNum}`)

//////////////////////////////////////////////////////////////////
//  New Javascript Functions


////Default Parameters in a function
// if no value is passed to a parameter in function. set a default value

function rollDice(numSides = 6)
{
    return Math.floor(Math.random()*numSides)+1
}

//this gives numSide default value of 6
console.log(rollDice())
console.log(rollDice(20))
//////////////////////////////////////////////////////
// spread denoted by ...
const arrNums=[1,2,3,45,6,7,87,212,57,9,8]
// this will return not a number
console.log(Math.max(arrNums))
// Math.min and max accept unlimited parameters
//Math.max(1,2,3,45,6,7,87,212,57,9,8)
console.log(Math.max(...arrNums))
console.log(Math.min(...arrNums))
//array can be spread, strings can be spread
//console.log() works like this

console.log(arrNums)
console.log(...arrNums)
console.log(..."Hello")

const cats=["Gingin","Mao","Billa"]
const dogs=["kutta", "Tommy"]
//spread can be used to copy one array to another,join two arrays together
const pets = [...cats, ...dogs]
console.log(pets)

//can also work on objects, put properties of two objects into a new object
//can be also used to createcopy of an object

const catAnimal = {
    legs:4,
    family:"feline"
}

const dogAnimal = {
    isFurry:4,
    family:"canine"
}

console.log(catAnimal)
console.log(dogAnimal)
//canine will overwrite feline
const catDog = {...catAnimal, ...dogAnimal}
console.log(catDog)

////////////////////////////////////////////////
// arguments contains list of all parameters/arguments passed into a function 

function sumAll()
{ 
    //does not work because arguments is not an array
    //return arguments.reduce((acc, currentvalue) => acc+currentvalue )
    //arguments is array like but no push,pop fucntions
    let sum = 0
    for (const num of arguments) {
        sum = sum+ num
    }
    
    console.log(arguments)
    console.log(sum)
    return sum
}


console.log(sumAll(1,4,6,8,9,3,7,19,3))

/////////////Rest params also uses 3 dots ...
//it is used in function definition to specify that whatever
// arguments are sent, they become an actual array

function sumRest(...nums)
{ 
    // Does work because it is now an array
    return nums.reduce((acc, currentvalue) => acc+currentvalue )
    
}
console.log(sumRest(10,10,10,10,20,20))


//  Another example of rest params(collects the rest of parameters in an array)
function raceResult(gold, silver, ...everyone){
    console.log(`Gold medal goes to ${gold}`)
    console.log(`Silver medal goes to ${silver}`)
    console.log(`and thanks to everyone else ${everyone}`)
}

raceResult("Minaal", "Amna","Nadia","Omair","Sharif")

///////////////////////////////////////////////////////////
////Array and objects can be destructered into variables

const arrRace = [99999,888888,777777,666666,555555]

//to get first object
const highScore = arrRace[0]
const sechighScore = arrRace[1]
//create two variable gold an d silver from the arrar
const[gold,silver]=arrRace

/////Object can also be destructered
const person = {
    firstName:"Nadia",
    lastName :"Ali",
    email :"abc@email.com",
    phone : "367346372423"
}

//normal way
const fname = person.firstName
const lname=person.lastName

const {email} = person
const {phone} = person
// can also rename variables
const {name1:firstName, name2:lastName} =person