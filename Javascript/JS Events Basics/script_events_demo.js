function changeColor(){
    console.log("its working")
    const r = Math.floor(Math.random()*255)+1
    const g = Math.floor(Math.random()*255)+1
    const b = Math.floor(Math.random()*255)+1
    //console.log(r)
    const color = `rgb(${r},${g},${b})`
    console.log(color)

    document.body.style.backgroundColor=color
    
    const label = document.querySelector("#lblColor")
    label.innerText = color


}

const button1 = document.querySelector("#btnColor")
button1.addEventListener("click",changeColor)