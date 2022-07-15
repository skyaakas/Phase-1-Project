const searchForm = document.getElementById("searchform")
const searchInput = document.getElementById("searchinput")
const beerSearchForm = document.querySelector("#beer")
const beerInput = document.getElementById("beer-input")
const searchContainer = document.getElementById("searchContainer")
const test = document.getElementById("test")
const newContainer = document.getElementById("newContainer")

function app(data){
    fetch("https://api.punkapi.com/v2/beers")
    .then(resp => resp.json())
    .then(data => searchData(data))
    
}
function searchData (data) {
    // while(newContainer.firstChild) {
    //     beerInfo.removeChild(newContainer.firstChild)
    // }
    data.forEach((element, index, array) => {

        const imgContainer = document.createElement("div")
        imgContainer.className = "entry"
        newContainer.append(imgContainer)
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

function findsBeer(e) {
        e.preventDefault()
        let search = e.target.search.value.toUpperCase();
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(beerArr => {
            let result = beerArr.find(beer =>beer.name.toUpperCase()==search);
            searchData([result]);
        })
        beer.reset()
}

function handleRenderSearch(){
    
    document.querySelector('#contentContainer').innerHTML = `
    <form id="beer">
        <label>Find Your Beer <label>
        <input id="beer-input" type="text" name="search"></input>
        <input id= "beer-submit" type="submit"></input>
        <div class = "autocom-box">
            <li></li>
        </div>
    </form>
    <div id="searchContainer"></div>
    `

    beer.addEventListener('keyup', (e)=>{
        const box = document.querySelector("#autocom-box")
        const searchString = e.target.value.toLocaleLowerCase();

        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(allData => {
             let filterData = allData.filter(characters=> characters.name.toLocaleLowerCase().includes(searchString))
             filterData = filterData.map((characters)=>{
                return characters.name = '<li>'+characters.name+'</li>';
                
            })
             console.log(filterData);
             
             showSuggestion(filterData);
             let allList =  document.querySelector(".autocom-box").querySelectorAll("li"); 
        console.log(allList);
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)") 
        }      
        })

        beer.classList.add("active");

     })

    document.querySelector('#beer').addEventListener('submit', findsBeer )
}

//Invoking Search Function

document.querySelector('#search').addEventListener('click', handleRenderSearch)

function showSuggestion(list){
    let listData;
    if(!list.length){
        userValue = document.querySelector("#beer-input").value;
        listData ='<li>' +userValue + '</li>';
    }else{
        listData = list.join('  ');
    }
    document.querySelector(".autocom-box").innerHTML = listData;
}

function select(element){
    let selectUserData = element.textContent;
    document.querySelector("#beer-input").value = selectUserData;
}