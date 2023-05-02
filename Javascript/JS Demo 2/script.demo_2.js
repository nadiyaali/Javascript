let highnum = parseInt(prompt("Enter highest number: "))
while(!highnum){
    highnum = parseInt(prompt("Enter a valid number: "))
}

randnum = Math.floor(Math.random()*highnum)+1
console.log("random number is ${randnum}")
num = parseInt(prompt("Enter your guess: "))
let attempts=1
while(num !== randnum)
{
    attempts++
    if(num > randnum)
    {
        num= parseInt(prompt("Enter a smaller number"))
    }
    else
    {
        num=parseInt(prompt("Enter a bigger number"))
    }
}   
    
prompt(`Yes, its ${num}, your guess is correct! attempts :${attempts++}`)




 