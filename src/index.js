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

        const imgContainer = document.createElement("div")
        imgContainer.id = "plusEntry"
        contentContainer.append(imgContainer)

        const plusIcon = document.createElement("img")
        plusIcon.src = "Images/PlusIcon.png"
        plusIcon.id = "plusIcon"
        imgContainer.append(plusIcon)
}





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
