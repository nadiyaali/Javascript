const btn = document.querySelector("#btn_joke")
const jokes = document.querySelector("#ul_jokes")
   


const getDadJoke = async function(){
            try{
            const config={ headers:{Accept:'application/json'}}
            const res= await axios.get("https://icanhazdadjoke.com/",config)
            console.log(res.data)
            const li = document.createElement("LI")
            li.append(res.data.joke)
            jokes.append(li)
            }
            catch(err){
                console.log("Error : ", err)
            }
    

}
    

btn.addEventListener("click",getDadJoke)     
        

 


