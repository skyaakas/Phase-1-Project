// function filter(collection, cb) {
//     const newCollection = [];
  
//     for (const beer of collection) {
//       if (cb(beer)) {
//         newCollection.push(beer);
//       }
//     }
  
//     return newCollection;
//   }

// const filterTypeCb = filter(collection,function (input) {
//     return beer.type === input;
// });

// const filterAbvCb = filter(collection,function (input) {
//     return beer.abv === input;
// });
const filterContainer = document.getElementById("filter-content-container")
function filterData (data) {
    console.log(data)
    beerData = data

    data.forEach((element, index, array) => {

        const imgContainer = document.createElement("div")
        imgContainer.className = "entry"
        filterContainer.append(imgContainer)
        imgContainer.id = element.id

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

function grabCategory(event) {
    const alcohol = event.target.textContent
    console.log(alcohol)
    filterCategory(alcohol)
    contentContainer.style.display = "none"
    while(filterContainer) {
        filterContainer.removeChild(filterContainer.firstChild)
    }
    // filterContainer.removeChild(filterContainer)
    // 
    

}


function filterCategory(alcohol) {
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => {
        const result = beers.filter(beer => beer.type == alcohol)
        filterData(result)
        // console.log(result)
    }
)}






