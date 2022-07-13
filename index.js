const contentContainer = document.getElementById("contentContainer")
const popUpMenu = document.createElement("div")
const searchForm = document.getElementById("searchform")
const searchInput = document.getElementById("searchinput")
const beerSearchForm = document.getElementById("beer-search")
const beerInput = document.getElementById("beer-input")

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


function findsBeer() {
    beerSearchForm.addEventListener("submit", event => {
        event.preventDefault()
        alert(beerInput.value)
        searchForm.reset()
    })
}

// Search Page

function handleRenderSearch(){
    document.querySelector('#contentContainer').innerHTML = `
    <form id="beer-search">
        <label>Find Your Beer <label>
        <input id="beer-input" type="text" name="search"></input>
        <input type="submit"></input>
    </form>
    `

    document.querySelector('#beer-search').addEventListener('submit', findsBeer )
}

//Invoking Search Function

document.querySelector('#search').addEventListener('click', handleRenderSearch)

// document.querySelector("#home").addEventListener("click", window.location.reload())


const beerInfo = document.createElement("div")

document.addEventListener("click", event => {
    beerInfo.className = "beerInfo"
    if(event.target.className === "entry") {
        contentContainer.append(beerInfo)
        beerInfo.style.left = event.target.getBoundingClientRect().left + window.scrollX + "px"
        beerInfo.style.top = event.target.getBoundingClientRect().top + window.scrollY + "px"

        console.log("Target: ", event.target)
        console.log("pos.x: ", event.target.getBoundingClientRect().left + window.scrollX)
        console.log("pos.y: ", event.target.getBoundingClientRect().top + window.scrollY)
        
    } else {
        beerInfo.remove()
        console.log("Removed")
    }
})