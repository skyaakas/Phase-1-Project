const contentContainer = document.getElementById("contentContainer")
const popUpMenu = document.createElement("div")
const searchForm = document.getElementById("searchform")
const searchInput = document.getElementById("searchinput")

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

        const title = document.createElement("h2")
        title.className = "title"
        title.textContent = array[index].name
        imgContainer.append(title)
    })
}

// document.body.addEventListener("click", event => {
//     if (event.target.className === "entry" || event.target.className === "image") {
//         console.log("iht")

//     }
// })

const button = document.querySelector(".modal-btn")
const newsletter = document.querySelector(".modal-bg")
const modalClose = document.querySelector(".modal-close")

button.addEventListener("click", function() {
    newsletter.classList.add("bg-active")
})

modalClose.addEventListener("click", function() {  
    newsletter.classList.remove("bg-active")
})

//For animation purposes
var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};

searchForm.addEventListener("submit", event => {
    event.preventDefault()
    alert(searchInput.value)
    searchForm.reset()
})
