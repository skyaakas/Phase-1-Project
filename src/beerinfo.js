const beerInfo = document.createElement("div")
const entryArry = document.getElementsByClassName("entry")

document.addEventListener("click", event => {
    beerInfo.className = "beerInfo"

    if(event.target.className === "entry") {
        while(beerInfo.firstChild) {
            beerInfo.removeChild(beerInfo.firstChild)
        }

        console.log(`x.pos ${event.target.getBoundingClientRect().left + window.scrollX}`)
        console.log(`y.pos ${event.target.getBoundingClientRect().top + window.scrollY}`)

        const xRange = event.target.getBoundingClientRect().left + window.scrollX

        const screenWidth = document.body.clientWidth
        console.log(`Window: ${screenWidth}px`)

        if(xRange <= screenWidth/2) {

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
        beerTabTitle.append(beerInfoList)

        const brewDate = document.createElement("p")
        brewDate.textContent = "First brewed " + beerData[event.target.id - 1].first_brewed
        brewDate.className = "brewDate"
        beerInfoList.append(brewDate)

        const beerTagline = document.createElement("p")
        beerTagline.textContent = beerData[event.target.id - 1].tagline
        beerTagline.className = "beerTagline"
        beerInfoList.append(beerTagline)

        const beerABV = document.createElement("p")
        beerABV.textContent = "ABV: " + beerData[event.target.id - 1].abv + "%"
        beerABV.className = "beerABV"
        beerInfoList.append(beerABV)

        const beerDescription = document.createElement("p")
        beerDescription.textContent = beerData[event.target.id - 1].description
        beerDescription.className = "beerDescription"
        beerInfo.append(beerDescription)

        const beerFoodPair = document.createElement("p")
        beerFoodPair.textContent = "Pairs well with " + beerData[event.target.id - 1].food_pairing
        beerFoodPair.className = "beerFoodPair"
        beerInfo.append(beerFoodPair)

        const recipeHeader = document.createElement("h2")
        recipeHeader.textContent = "Recipe:"
        recipeHeader.className = "recipeHeader"
        beerInfo.append(recipeHeader)

        }

        if(xRange > screenWidth/2) {

            contentContainer.append(beerInfo)
            beerInfo.style.left = event.target.getBoundingClientRect().left + window.scrollX - beerInfo.clientWidth + event.target.offsetWidth + "px"
            beerInfo.style.top = event.target.getBoundingClientRect().top + window.scrollY + "px"

            const beerTabTitle = document.createElement("h1")
            beerTabTitle.className = "beerTabTitle"
            beerTabTitle.textContent = beerData[event.target.id - 1].name
            beerInfo.append(beerTabTitle)
            beerTabTitle.style.float = "left"
            beerTabTitle.style.marginLeft = "13%"
           //beerTabTitle.style.
    
            const beerPic = document.createElement("img")
            beerPic.src = beerData[event.target.id - 1].image_url
            beerPic.className = "beerPic"
            beerInfo.append(beerPic)
            beerPic.style.float = "right"
            beerPic.style.marginRight = "10%"
            beerPic.style.marginLeft = "0%"
    
            const beerInfoList = document.createElement("ul")
            beerInfoList.className = "beerInfoList"
            beerTabTitle.append(beerInfoList)
    
            const brewDate = document.createElement("p")
            brewDate.textContent = beerData[event.target.id - 1].first_brewed
            brewDate.className = "brewDate"
            beerInfoList.append(brewDate)
    
            const beerTagline = document.createElement("p")
            beerTagline.textContent = beerData[event.target.id - 1].tagline
            beerTagline.className = "beerTagline"
            beerInfoList.append(beerTagline)
    
            const beerABV = document.createElement("p")
            beerABV.textContent = beerData[event.target.id - 1].abv
            beerABV.className = "beerABV"
            beerInfoList.append(beerABV)
    
            const beerDescription = document.createElement("p")
            beerDescription.textContent = beerData[event.target.id - 1].description
            beerDescription.className = "beerDescription"
            beerInfo.append(beerDescription)
            beerDescription.style.marginLeft = "5%"
    
            const beerFoodPair = document.createElement("p")
            beerFoodPair.textContent = beerData[event.target.id - 1].food_pairing
            beerFoodPair.className = "beerFoodPair"
            beerInfo.append(beerFoodPair)
            beerFoodPair.style.marginLeft = "5%"
    
            }
        
    } else {

        beerInfo.remove()

    }
})