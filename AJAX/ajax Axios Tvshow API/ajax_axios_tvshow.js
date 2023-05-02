const form = document.querySelector("#searchForm")
form.addEventListener("submit",async function(e) {
    e.preventDefault()
    console.log("Form submitted")
    // get search term
    const searchWord = form.elements.txt_searchWord.value
    console.log(searchWord)
    //const results = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchWord}`)
    const config = {params:{q:searchWord}, headers:{}}
    const results = await axios.get("https://api.tvmaze.com/search/shows", config)
   
    showResult(results.data) 
    //console.log(results.data[0].show.name)
    form.elements.txt_searchWord.value =""
    
})


function showResult(shows){
    const div = document.querySelector("#div_results")
   
    for(let sh of shows){
        
        const showName = document.createElement("h4")
        showName.innerText= sh.show.name
        div.append(showName)
    
        if(sh.show.image){
        const img = document.createElement("IMG")
        img.src = sh.show.image.medium
        div.append(img) 
        }
        
    }
}

