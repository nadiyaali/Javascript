
// take input from user in form , then prevent form from submitting
// then add this input as a list item to a list
const form = document.querySelector("#myform")
const catList = document.querySelector("#catList")


form.addEventListener("submit",function(evt){
    evt.preventDefault()
    console.log("Form Submitted")
    const newCat = document.querySelector("#catName")
    const cName = newCat.value
    const newItem = document.createElement("li")
    newItem.innerText =cName
    catList.append(newItem)
    newCat.value = ""

})

//event on list item bubbles to list

catList.addEventListener('click',function(evt){
    evt.stopPropagation()
    console.log("list clicked!")
    if(evt.target.nodeName ==='LI')
       evt.target.remove();

    // to stop bubbling use
    //evt.stopPropagation()

    })






    
//form event : input
const inputText = document.querySelector("#inputText")
inputText.addEventListener("input",function(){
    const text = inputText.value
    const heading = document.querySelector("#hText")
    heading.innerText = text
})


