const getStarWarsPeople = async function(){
    try{
    const res= await axios.get("https://swapi.dev/api/people/20")
    console.log(res.data)
    }
    catch(err){
        console.log("Error : ", err)
    }

}
getStarWarsPeople()

const getStarWarsPeopleWithId = async function(id){
    try{
    const res= await axios.get(`https://swapi.dev/api/people/${id}`)
    console.log(`https://swapi.dev/api/people/${id}`)
    console.log(res.data)
    }
    catch(err){
        console.log("Error : ", err)
    }
}
getStarWarsPeopleWithId(25)
getStarWarsPeopleWithId(1)