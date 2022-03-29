const contantVariable = "cannot be changed"
let dynamicVariable = "can be changed"

console.log(dynamicVariable)
dynamicVairable = "new content"

const thisIsAString = "Anything that is 'text' between quotes"
const thisIStheString = "Anything that is 'text' between quotes"
const integer = 1
const interger2 = -15
const float = 3.424252354324
const antoherFloat = 3.0
const boolean = true
const anotherBoolean = false 
const isItFriday = true
const array = [1, "helllo", 3.2, false]
const student = {
    name: "sophia",
    shoeSize: 6.5}

// +,-,/,%.*

const four = 4
const nine =9
const thirtySix = four * nine
console.log(thirtySix)

//  Conditionals 
// ==,===,<,>,>=, <=

const username = "Sophia"
if(username == "Sophia"){
    console.log("User is Sophia")
} else {
    console.log("username must be 'Sophia' to log in")
}

const smallNumber = 1234
const bigNumber = 5678

if(smallNumber > bigNumber) {
    console.log("small number is smaller than big number")
} else {
    console.log("small number is greater than big number")
}

// Functions

function multiplyByTwo(){

}


const multiplyByTwoDifferentSyntax = function(){}

const multiplyByTwoAnotherSyntax = () => {

}

const multiplyByTwo = function(input){
    return input * 2
}

// Methods

const lowercaseString = "this is a lowercase string"
const uppercaseString = lowercaseString.toUpperCase

//Loops

let str = '';

for (let index = 0; index < 9; index++) {
    str = str + index;
}

coneole.log(str)

const names = ["name one", "name two", "name three", "name four"]
for (let index =0; index < names.length; index++) {
    console.log(names[index])
}



const names = ["name one", "Sophia", "name three", "name four"]

const isUserSophia = function(input) {
    return input === "Sophia"
}

for (let index = 0; index < names.length; index++) {
    console.log(isUserSophia(names[index]))
}

const firstPerson = {
    name: "Trecor",
    favoriteColor = "blue"
}

const secondPerson  = {
    name: "brooke",
    favoriteColor = "red"
}

const people = [firstPerson, secondPerson]

for(let index=0; index < people.length; index = index + 1) {
    console.log("Username" + people[index].name)
}


const names = document.querySelectorAll("class")

