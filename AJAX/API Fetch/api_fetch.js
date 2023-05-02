fetch("https://swapi.dev/api/people/1")
    .then(function (res) {
        console.log("Resolved, YAY!")
        //console.log(res.json())
        // console.log(res)
        return res.json()
            .then(function (data) {
                console.log("JSON done")
                console.log(data)
            })
    })
    .catch(function (e) {
        console.log("Error!!!")
        console.log(e)
    })

// for multiple requests
fetch("https://swapi.dev/api/people/5")
    .then(function (res) {
        console.log("Resolved 1st Request")
        return res.json()
            .then(function (data) {
                console.log("Data : ", data)
                return fetch("https://swapi.dev/api/people/6")
                    .then(function (res) {
                        console.log("Resolved 2nd Request")
                        return res.json()
                            .then(function (data) {
                                console.log("Data : ", data)
                            })
                    })
            })
    })
    .catch(function (err) {
        console.log("ERROR : ", err)
    })

///////////////////////////////////////////
// using async and await

const loadStarWarsPeople = async function () {
    try {
        const res = await fetch("https://swapi.dev/api/people/10")
        const data = await res.json()
        console.log("async function data 1st: ", data)

        const res2 = await fetch("https://swapi.dev/api/people/11")
        const data2 = await res2.json()
        console.log("async function data 2nd: ", data2)
    }
    catch (err) {
        console.log("ERROR in async function", err)
    }
}

loadStarWarsPeople()
