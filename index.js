const contentContainer = document.getElementById("contentContainer")
const popUpMenu = document.createElement("div")

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(resp => resp.json())
    .then(data => renderData(data))
})

function renderData (data) {
    console.log(data)
    data.forEach((element, index, array) => {

        const imgContainer = document.createElement("div")
        imgContainer.className = "entry"
        contentContainer.append(imgContainer)

        const image = document.createElement("img")
        image.className = "image"
        image.src = array[index].image_url
        imgContainer.append(image)
    })
}

document.body.addEventListener("click", event => {
    if (event.target.className === "entry" || event.target.className === "image") {
        console.log("iht")
    }
})