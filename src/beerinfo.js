const beerInfo = document.createElement("div")
const entryArry = document.getElementsByClassName("entry")

document.addEventListener("click", event => {
    beerInfo.className = "beerInfo"

    console.log("Target:")
    console.log(event.target)
    console.log("Child:")
    console.log(event.target.children[0])

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

        const beerType = document.createElement("li")
        beerType.textContent = beerData[event.target.id - 1].type
        beerType.className = "beerType"
        beerInfo.append(beerType)

        const brewDate = document.createElement("li")
        brewDate.textContent = beerData[event.target.id - 1].first_brewed
        brewDate.className = "brewDate"
        beerInfo.append(brewDate)

        const beerTagline = document.createElement("li")
        beerTagline.textContent = beerData[event.target.id - 1].tagline
        beerTagline.className = "beerTagline"
        beerInfo.append(beerTagline)

        const beerABV = document.createElement("li")
        beerABV.textContent = beerData[event.target.id - 1].abv
        beerABV.className = "beerABV"
        beerInfo.append(beerABV)

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