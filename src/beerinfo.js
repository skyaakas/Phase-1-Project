const beerInfo = document.createElement("div")
const entryArry = document.getElementsByClassName("entry")
let lastEntry
let lastPosX
let lastPosY

document.addEventListener("click", event => {
    beerInfo.className = "beerInfo"

    const targetPosX = event.target.getBoundingClientRect().left + window.scrollX
    const targetPosY = event.target.getBoundingClientRect().top + window.scrollY
    const tabWidth = beerInfo.offsetWidth
    const cardWidth = event.target.offsetWidth
    
    const screenWidth = document.body.clientWidth

    if(event.target.className === "entry") {
        while(beerInfo.firstChild) {
            beerInfo.removeChild(beerInfo.firstChild)
        }

        let transformX = "-300px"
        
        if(lastEntry) {
            transformX = -(targetPosX - lastPosX) + "px"
            if(targetPosX > screenWidth/2) {
                transformX = -((targetPosX - lastPosX) - tabWidth + cardWidth) + "px"
            }
            if(lastPosX > screenWidth/2) {
                transformX = -((targetPosX - lastPosX) + tabWidth - cardWidth) + "px"
            }
            if((targetPosX > screenWidth/2) && (lastPosX > screenWidth/2)) {
                transformX = -((targetPosX - lastPosX)) + "px"
            }
        }

         // animation
         beerInfo.animate([
            {transform: `translateX(${transformX})`},
            {transform: "translateX(0px)"}
        ], {
            duration: 500,
            })


        if(targetPosX <= screenWidth/2) {

            // main div
            contentContainer.append(beerInfo)
            beerInfo.style.left = targetPosX + "px"
            beerInfo.style.top = targetPosY + "px"

            // header div
            const beerHeader = document.createElement("div")
            beerHeader.className = "beerHeader"
            beerInfo.append(beerHeader)

            // image
            const beerPic = document.createElement("img")
            beerPic.src = beerData[event.target.id - 1].image_url
            beerPic.className = "beerPic"
            beerHeader.append(beerPic)

            // minor info div
            const minorInfo = document.createElement("div")
            minorInfo.className = "minorInfo"
            beerHeader.append(minorInfo)

            // title
            const beerTabTitle = document.createElement("h1")
            beerTabTitle.className = "beerTabTitle"
            beerTabTitle.textContent = beerData[event.target.id - 1].name
            minorInfo.append(beerTabTitle)

            // info points
            const brewDate = document.createElement("p")
            brewDate.textContent = "First brewed " + beerData[event.target.id - 1].first_brewed
            brewDate.className = "infoPoint"
            minorInfo.append(brewDate)

            const beerTagline = document.createElement("p")
            beerTagline.textContent = beerData[event.target.id - 1].tagline
            beerTagline.className = "infoPoint"
            minorInfo.append(beerTagline)

            const beerABV = document.createElement("p")
            beerABV.textContent = "ABV: " + beerData[event.target.id - 1].abv + "%"
            beerABV.className = "infoPoint"
            minorInfo.append(beerABV)


            // major info
            const beerDescription = document.createElement("p")
            beerDescription.textContent = beerData[event.target.id - 1].description
            beerDescription.className = "beerDescription"
            beerInfo.append(beerDescription)

            const beerFoodPair = document.createElement("p")
            beerFoodPair.textContent = "Pairs well with " + beerData[event.target.id - 1].food_pairing
            beerFoodPair.className = "beerFoodPair"
            beerInfo.append(beerFoodPair)

            // recipe
            const recipeHeader = document.createElement("h2")
            recipeHeader.textContent = "Recipe:"
            recipeHeader.className = "recipeHeader"
            beerInfo.append(recipeHeader)

        }

        if(targetPosX > screenWidth/2) {

            // main div
            contentContainer.append(beerInfo)
            beerInfo.style.left = targetPosX - beerInfo.clientWidth + event.target.offsetWidth + "px"
            beerInfo.style.top = targetPosY + "px"

            // header div
            const beerHeader = document.createElement("div")
            beerHeader.className = "beerHeader"
            beerInfo.append(beerHeader)

            // minor info div
            const minorInfo = document.createElement("div")
            minorInfo.className = "minorInfo"
            beerHeader.append(minorInfo)

            // title
            const beerTabTitle = document.createElement("h1")
            beerTabTitle.className = "beerTabTitle"
            beerTabTitle.textContent = beerData[event.target.id - 1].name
            minorInfo.append(beerTabTitle)

            // info points
            const brewDate = document.createElement("p")
            brewDate.textContent = "First brewed " + beerData[event.target.id - 1].first_brewed
            brewDate.className = "infoPoint"
            minorInfo.append(brewDate)

            const beerTagline = document.createElement("p")
            beerTagline.textContent = beerData[event.target.id - 1].tagline
            beerTagline.className = "infoPoint"
            minorInfo.append(beerTagline)

            const beerABV = document.createElement("p")
            beerABV.textContent = "ABV: " + beerData[event.target.id - 1].abv + "%"
            beerABV.className = "infoPoint"
            minorInfo.append(beerABV)

            // image
            const beerPic = document.createElement("img")
            beerPic.src = beerData[event.target.id - 1].image_url
            beerPic.className = "beerPic"
            beerHeader.append(beerPic)

            // major info
            const beerDescription = document.createElement("p")
            beerDescription.textContent = beerData[event.target.id - 1].description
            beerDescription.className = "beerDescription"
            beerInfo.append(beerDescription)

            const beerFoodPair = document.createElement("p")
            beerFoodPair.textContent = "Pairs well with " + beerData[event.target.id - 1].food_pairing
            beerFoodPair.className = "beerFoodPair"
            beerInfo.append(beerFoodPair)

            // recipe
            const recipeHeader = document.createElement("h2")
            recipeHeader.textContent = "Recipe:"
            recipeHeader.className = "recipeHeader"
            beerInfo.append(recipeHeader)

            // styling
            beerPic.style.marginLeft = "auto"
            beerPic.style.float = "right"
            beerPic.style.marginRight = "17%"

            minorInfo.style.marginLeft = "10%"
            
            }
        
            lastEntry = event.target
            lastPosX = lastEntry.getBoundingClientRect().left + window.scrollX
            lastPosY = lastEntry.getBoundingClientRect().top + window.scrollY

            console.log(lastPosX)

    } else {

        beerInfo.remove()

    }
})