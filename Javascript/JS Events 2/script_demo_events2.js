//key events

function keydown(evt){
console.log("key down")
console.log(evt)
}

function keyup(evt){
    console.log("key up")
    console.log(evt)
    switch (evt.code){
        case 'ArrowUp':
            console.log("Up Arrow")
            break;
        case 'ArrowDown':
            console.log("Down Arrow")
            break;
        default:
            console.log(evt.code)

        }

}

const input1 = document.querySelector("#input1")
input1.addEventListener("keydown",keydown)

input1.addEventListener("keyup",keyup)
