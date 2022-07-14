const searchForm = document.getElementById("searchform")
const searchInput = document.getElementById("searchinput")
const beerSearchForm = document.querySelector("#beer")
const beerInput = document.getElementById("beer-input")
const searchContainer = document.getElementById("searchContainer")
const test = document.getElementById("test")

// let data =[]


// document.addEventListener("DOMContentLoaded", () => {
//     fetch("https://api.punkapi.com/v2/beers")
//     .then(resp => resp.json())
//     .then(data => renderData(data))
// })

// function renderData (data) {
//     console.log(data)
//     data.forEach((element, index, array) => {

//         const imgContainer = document.createElement("div")
//         imgContainer.className = "entry"
//         contentContainer.append(imgContainer)

//         const image = document.createElement("img")
//         image.className = "image"
//         image.src = array[index].image_url
//         imgContainer.append(image)

//         const title = document.createElement("h2")
//         title.className = "title"
//         title.textContent = array[index].name
//         imgContainer.append(title)
//     })
// }

// document.body.addEventListener("click", event => {
//     if (event.target.className === "entry" || event.target.className === "image") {
//         console.log("iht")

//     }
// })

// const button = document.querySelector(".modal-btn")
// const newsletter = document.querySelector(".modal-bg")
// const modalClose = document.querySelector(".modal-close")

// button.addEventListener("click", function() {
//     newsletter.classList.add("bg-active")
// })

// modalClose.addEventListener("click", function() {  
//     newsletter.classList.remove("bg-active")
// })

//For animation purposes
// var hotbod = document.querySelector("body");

// function doStuff() {
//     hotbod.className += " animate";
// }

// window.onload = function() {
//     doStuff();
// };

//Making new function for displaying Search results

// document.addEventListener("DOMContentLoaded", () => {
//     fetch("https://api.punkapi.com/v2/beers")
//     .then(resp => resp.json())
//     .then(data => searchData(data))
    
// })


function app(data){
    fetch("https://api.punkapi.com/v2/beers")
    .then(resp => resp.json())
    .then(data => searchData(data))
    
}
function searchData (data) {
    // console.log(data)
    
    // newData = data;
    
    data.forEach((element, index, array) => {

        const imgContainer = document.createElement("div")
        imgContainer.className = "entry"
        contentContainer.append(imgContainer)
        imgContainer.id = element.id

        const image = document.createElement("img")
        image.className = "image"
        image.src = array[index].image_url
        imgContainer.append(image)

        const title = document.createElement("h2")
        title.className = "title"
        title.textContent = array[index].name
        contentContainer.append(title)
    })

        // const imgContainer = document.createElement("div")
        // imgContainer.id = "plusEntry"
        // contentContainer.append(imgContainer)

}
// console.log(searchData(data))
// function filterData (data) {
//     // console.log(data)
    
//     newData = data;
    
//     data.forEach((element, index, array) => {

//         const imgContainer = document.createElement("div")
//         imgContainer.className = "entry"
//         test.append(imgContainer)
//         imgContainer.id = element.id

//         const image = document.createElement("img")
//         image.className = "image"
//         image.src = array[index].image_url
//         imgContainer.append(image)

//         const title = document.createElement("h2")
//         title.className = "title"
//         title.textContent = array[index].name
//         imgContainer.append(title)
//     })

//         // const imgContainer = document.createElement("div")
//         // imgContainer.id = "plusEntry"
//         // contentContainer.append(imgContainer)

// }
function findsBeer() {
    beer.addEventListener("submit", (e) => {
        e.preventDefault()
        let search = e.target.search.value.toUpperCase();
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(beerArr => {
            let result = beerArr.find(beer =>beer.name.toUpperCase()==search);
            searchData([result]);
        })
        beer.reset()
        
        // let searchInput = beerInput.value.toUpperCase();
        // alert(beerInput.value)
        // fetchSearches(searchInput);
        // searchForm.reset()
    })
//     beer.addEventListener('keyup', (e)=>{
//         console.log(e.target.value )
//         const searchString = e.target.value;
//         const filteredData = beerData.filter(characters=>{
//             return(
//            characters.name.contains(searchString))
//         })
//         console.log(filteredData);

// })
}

// function fetchSearches(searchInput) {
//     fetch("https://api.punkapi.com/v2/beers")
//     .then(response => response.json())
//     .then(beerArr => {
//         const result= beerArr.find(beer => beer.name.toUpperCase()==searchInput)
//         renderData(result);
//     })
// }

// function displayBeers(result) {
//     contentContainer.append(result)
// }

// Search Page

function handleRenderSearch(){
    
    document.querySelector('#contentContainer').innerHTML = `
    <form id="beer">
        <label>Find Your Beer <label>
        <input id="beer-input" type="text" name="search"></input>
        <input type="submit"></input>
    </form>
    <div id="searchContainer"></div>
    `
    
    // renderData(beerData);
    // const beerSearchForm = document.querySelector("#beer")
    // const beerInput = document.getElementById("beer-input")
    // beer.addEventListener('keyup', (e)=>{
    //     //console.log(e.target.value )
    //     const searchString = e.target.value.toLowerCase();
    //     fetch("https://api.punkapi.com/v2/beers")
    //     .then(res => res.json())
    //     .then(allData => {
    //         let filteredData = allData.filter(characters=> characters.name.toLowerCase().includes(searchString))
    //         // console.log(filteredData);
    //         // filterData(filteredData)
            
    // })
    // contentContainer.style.display="none";
        
        // })
    
        


    document.querySelector('#beer').addEventListener('submit', findsBeer )
}

//Invoking Search Function

document.querySelector('#search').addEventListener('click', handleRenderSearch)

// document.querySelector("#home").addEventListener("click", window.location.reload())

// beer.addEventListener("keyup", (e)=>{
//     const searchString = e.target.value;
//     const filteredData = data.filter(characters=>{
//         return(
//        characters.name.contain(searchString))
//     })
//     console.log(filteredData);
// })