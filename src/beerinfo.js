const beerInfo = document.createElement("div")
const entryArry = document.getElementsByClassName("entry")

document.addEventListener("click", event => {
    beerInfo.className = "beerInfo"

    if(event.target.className === "entry") {
        while(beerInfo.firstChild) {
            beerInfo.removeChild(beerInfo.firstChild)
        }

        contentContainer.append(beerInfo)
        beerInfo.style.left = event.target.getBoundingClientRect().left + window.scrollX + "px"
        beerInfo.style.top = event.target.getBoundingClientRect().top + window.scrollY + "px"

        const beerTabTitle = document.createElement("h1")
        beerTabTitle.className = "beerTabTitle"
        beerTabTitle.textContent = beerData[event.target.id - 1].name
        beerInfo.append(beerTabTitle)

        const beerPic = document.createElement("img")
        beerPic.src = beerData[event.target.id - 1].image_url
        beerPic.className = "beerPic"
        beerInfo.append(beerPic)

        const beerInfoList = document.createElement("ul")
        beerInfo.append(beerInfoList)


        const brewDate = document.createElement("li")
        brewDate.textContent = beerData[event.target.id - 1].first_brewed
        brewDate.className = "brewDate"
        beerInfoList.append(brewDate)

        const beerTagline = document.createElement("li")
        beerTagline.textContent = beerData[event.target.id - 1].tagline
        beerTagline.className = "beerTagline"
        beerInfoList.append(beerTagline)

        const beerABV = document.createElement("li")
        beerABV.textContent = beerData[event.target.id - 1].abv
        beerABV.className = "beerABV"
        beerInfoList.append(beerABV)

        const beerDescription = document.createElement("p")
        beerDescription.textContent = beerData[event.target.id - 1].description
        beerDescription.className = "beerDescription"
        beerInfo.append(beerDescription)

        const beerFoodPair = document.createElement("p")
        beerFoodPair.textContent = beerData[event.target.id - 1].food_pairing
        beerFoodPair.className = "beerFoodPair"
        beerInfo.append(beerFoodPair)



        // beerData[event.target.id].name



        // for(let element of entryArry){
        //     element.style.zIndex = 0
        // }

        // event.target.style.zIndex = 3
        // event.target.style.backgroundColor = "lightgrey"

        // event.target.style.zIndex = 3
        // event.target.style.backgroundColor = "white"
        
    } else {
        beerInfo.remove()
        // for(let element of entryArry){
        //     element.style.zIndex = 1
        //     element.style.backgroundColor = "white"
        //     element.children[0].style.zIndex = -1
        // }
    }
})