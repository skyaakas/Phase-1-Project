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
            
            //transformX = -300 * (event.target.id - lastEntry.id)/(Math.abs(event.target.id - lastEntry.id)) + "px"
        }
         // animation
         beerInfo.animate([
            {transform: `translateX(${transformX})`},
            {transform: "translateX(0px)"}
        ], {
            duration: 500,
            })

        if(targetPosX <= screenWidth/2) {

        contentContainer.append(beerInfo)
        beerInfo.style.left = targetPosX + "px"
        beerInfo.style.top = targetPosY + "px"

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
        beerInfoList.style.float = "40%"

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

        if(targetPosX > screenWidth/2) {

            contentContainer.append(beerInfo)
            beerInfo.style.left = targetPosX - beerInfo.clientWidth + event.target.offsetWidth + "px"
            beerInfo.style.top = targetPosY + "px"

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
        
            lastEntry = event.target
            lastPosX = lastEntry.getBoundingClientRect().left
            lastPosY = lastEntry.getBoundingClientRect().top

            console.log(lastPosX)

    } else {

        beerInfo.remove()

    }
})