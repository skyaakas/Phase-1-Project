document.body.addEventListener("click", event => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(resp => resp.json())
    .then(data => populateJSON(data[0]))
})

function populateJSON(JSON) {
    fetch("http://localhost:3000/beers", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(JSON)
})
}

// document.body.addEventListener("click", event => {
//     let beerData = {
//         name: "Summer Ale",
//         abv: "7.0%"
//     }
//     fetch("http://localhost:3000/beers", {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(beerData)
// })
// })
