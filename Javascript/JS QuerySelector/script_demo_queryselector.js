const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}


//////////////////////////////////////////////////////////////////////////
//use console.d ir(document) to get all properties of the document object

// Queryselector returns only the first element 
const heading1= document.querySelector("h1")
console.log("First H1 Element")
console.dir(heading1)

const anchor1= document.querySelector("a")
console.log("First Anchor Element")
console.dir(anchor1)

// to select using css class
const banner1= document.querySelector("#banner")
console.log("First banner class Element")
console.log(banner1)

// select by id
//.tocnumber
const toc1= document.querySelector(".tocnumber")
console.log("First toc ID Element")
console.log(toc1)

// to get the second image
// use nth of type
const img2= document.querySelector("img:nth-of-type(2)")
console.log("Second Img Element")
console.dir(img2)


// anchor a tag can have a title which is displayed on mouse over
// to find an anchor tag using title attribute
const a_title= document.querySelector('a[title="Java"]')
console.log("Anchor tag with attribute title = Java")
console.dir(a_title)

////////////////////////////////////////////////////////////
//querySelectorAll
// Select all p tage
const allParas = document.querySelectorAll("p")
console.log("All p tags")
console.dir(allParas)


// Select all a tags
const allAnchors = document.querySelectorAll("a")
console.log("All anchor tags")
console.dir(allAnchors)


//Select all a tags inside p tags
const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href)
}
/////////////////////////////////////////////////////////////
// Your code goes in here!
// to select all elemnts with class of done
//const doneTodos = document.querySelectorAll(".done")
//to select one element of tag input and  attribute type=checkbox
//const checkbox = document.querySelector('input[type="checkbox"]')

//DOM manipulation Methods
//will return only text content
//document.querySelector("p").innerText="Nadia"

//innerHTML is used for adding html with tags 
//will return all content including markup
document.querySelector('h1').innerHTML="<i>Love SILKIE!</i>"
//this will append to the existing markup
document.querySelector('h1').innerHTML+="<sup>SILKIE</sup>"

// YOUR CODE GOES IN HERE:
// get the first span element
//document.querySelector("span").innerText = "Disgusting"


// attributes of HTML element can be accessed
firstLink = document.querySelector("a")
console.log("First anchor Tag : ")
console.log(firstLink.href)
// or use
console.log("First Anchor tag using getAttribute() method")
const flink = document.querySelector("a").getAttribute("href")
console.log(flink)

// use setAttribute to set an attribute value
document.querySelector("a").setAttribute("href", "http://www.google.com")

// get the first textbox and change its attributes
const input1 = document.querySelector("input[type=text]")
input1.setAttribute("type", "color")



const image1 = document.querySelector("img")
image1.setAttribute("src", "https://devsprouthosting.com/images/chicken.jpg")
image1.setAttribute("alt", "chicken")

// CSS styles can also be changes
// but not recommened since this create inline style in HTML code

const firstHeading = document.querySelector("h1")
firstHeading.style.color = "green"

// change color of all links on the page
const linkList = document.querySelectorAll("a")
for(let l of linkList){
    l.style.color = "hotpink"
    l.style.textDecorationColor="magenta"
    l.style.textDecorationStyle="wavy"
}


// to get current style, use window.getComputedStyle("h1").color
//Practice
//const div1 = document.querySelector("div[id='container']")
//div1.style.textAlign= "center"

//const img1 = document.querySelector("img")
//img1.style.width = "150px"
//img1.style.borderRadius = "50%"


///Set style using classlist
const h2 = document.querySelector("h2")
h2.classList.add("purple")
h2.classList.add("textDecor")

//remove a class
h2.classList.remove("purple")

//toggle a class,if its there-remove it, if its not there-add it
h2.classList.toggle("purple")

// They also work but it can add only 1 class
//h2.setAttribute("class","purple")
//h2.getAttribute("class")


//parentElement gets the parent of an HTML element
// get the first bold element
const firstBold = document.querySelector("b")
//get its parent element
console.log("parent of firstbold")
const para = firstBold.parentElement
console.dir(para)
//firstBold.parentElement.parentElement.parentElement
console.log("children of Para element   ")
console.log(para.children)

// use nextElementSibling() and previousElementSibling() 
//nextSibling and previousSibling just return the node element
//node element in html can be return character or empt space. not much useful


//Creat a new element and add it to page
const imgNew = document.createElement("img")
imgNew.src = "https://images.unsplash.com/photo-1546272989-40c92939c6c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80"
document.body.appendChild(imgNew)
//make it smaller by adding a class
imgNew.classList.add("square")

// add a heading elemment
const h3New = document.createElement("h3")
h3New.innerText ="All about Chicks!"
document.body.append(h3New)

//aooend can also be used to add text to the end of a paragraph
const p = document.querySelector("p")
p.append("................This is new text added by the append method")

// prepend
p.prepend("This hasbeen added using prepend method...................")
const newH = document.createElement("h3")
newH.innerText = "CHICKENS"
p.prepend(newH)

//
const h2New = document.createElement("h2")
h2New.innerText = "Who comes first"
const h1 = document.querySelector("h1")
h1.insertAdjacentElement("afterend", h2New)


// For creating 100 buttons
//const div = document.querySelector("div")
//for(let i=0; i < 100; i++){
//   let btn = document.createElement("button")
//    btn.innerText = `Button ${i+1}`
//    div.appendChild(btn)
//}

//remove an element
const firstImg = document.querySelector("img")
//firstImg.remove()