document.addEventListener("click", event => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(resp => resp.json())
    .then(data => populateData(data))
})

function populateData(data) {

    console.log("...Populated")

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[1])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[3])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[4])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[5])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[6])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[7])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[8])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[9])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[11])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[12])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[13])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[14])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[15])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[16])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[17])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[18])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[21])
    // })

    // fetch("http://localhost:3000/beers", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data[22])
    // })

    fetch("https://api.punkapi.com/v2/beers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data[24])
    })
}