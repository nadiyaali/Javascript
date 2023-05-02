const btn1 = document.querySelector("#btn_player1")
const btn2 = document.querySelector("#btn_player2")
const btn_reset = document.querySelector("#btn_reset")

const score1 = document.querySelector("#score_player1")
const score2 = document.querySelector("#score_player2")
let sc1 = 0
let sc2 = 0



btn1.addEventListener("click", function()
{
    
    console.log("button 1 clicked")
    //let currScore = parseInt(score1.innerText)
    //currScore = currScore+1
    sc1 = sc1+1
    //score1.innerText = currScore
    if(!checkWinner())
        score1.innerText = sc1
       
})

btn2.addEventListener("click", function()
{
    console.log("button 2 clicked")
    //let currScore = parseInt(score2.innerText)
    //currScore = currScore+1
    sc2 = sc2+1
    //score2.innerText = currScore
    if(!checkWinner())
        score2.innerText = sc2   
        
})


btn_reset.addEventListener("click", function()
{
    console.log("reset button clicked")
    resetGame()
})


function checkWinner(){
    //console.log(document.querySelector("#game_number").value)
    const gameNumber = parseInt(document.querySelector("#game_number").value)
    //const currScore1 = parseInt(score1.innerText)
    //const currScore2 = parseInt(score2.innerText)
    
    //const games = parseInt(gameNumber)
    //const totalScore = currScore1 +currScore2
    const totalScore = sc1 + sc2
    console.log(`player 1 + player2 = ${totalScore}`)
    console.log(`Number of games = ${gameNumber}`)

    if(gameNumber === totalScore){
        //change colors
        if(sc1 > sc2)
        {
            score1.style.color = "rgb(0,255,0)"
            score2.style.color = "rgb(255,0,0)"
        }
        else
        {
            score2.style.color = "rgb(0,255,0)"
            score1.style.color = "rgb(255,0,0)"
        }
        
        //disable btn1 and btn2
        return true
    }
    else
        return false
}

const gameSelect = document.querySelector("#game_number")
gameSelect.addEventListener('input', function(){
    console.log("Number of  games changed")
    resetGame()
})


function resetGame(){
    score1.innerText = "0"
    score2.innerText = "0"
    score1.style.color = "rgb(0,0,0)"
    score2.style.color = "rgb(0,0,0)"
    sc1 = 0
    sc2 = 0
}
