const beerInfo = document.createElement("div")
    beerInfo.className = "beerInfo"
const entryArry = document.getElementsByClassName("entry")
let lastEntry
let lastPosX
let lastPosY

document.addEventListener("click", event => {
    
    if(event.target.className === "entry") {
        while(beerInfo.firstChild) {
            beerInfo.removeChild(beerInfo.firstChild)
        }

        const targetPosX = event.target.getBoundingClientRect().left + window.scrollX
        const targetPosY = event.target.getBoundingClientRect().top + window.scrollY
        const cardWidth = event.target.offsetWidth
        const screenWidth = document.body.clientWidth
        let tabWidth = beerInfo.offsetWidth

        const apiEntry = beerData[event.target.id - 1]

        let transformX = "-300px"
        
        if(lastEntry) {
            //transformX = -(targetPosX - lastPosX) + "px"
            if((targetPosX < screenWidth/2) && (lastPosX < screenWidth/2)) {
                transformX = -((targetPosX - lastPosX) ) + "px"
            }
            if((targetPosX < screenWidth/2) && (lastPosX > screenWidth/2)) {
                transformX = -((targetPosX - lastPosX) + tabWidth - cardWidth) + "px"
            }
            if((targetPosX > screenWidth/2) && (lastPosX < screenWidth/2)) {
                transformX = -((targetPosX - lastPosX)) + tabWidth - cardWidth + "px"
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
            beerPic.src = apiEntry.image_url
            beerPic.className = "beerPic"
            beerHeader.append(beerPic)

            // minor info div
            const minorInfo = document.createElement("div")
            minorInfo.className = "minorInfo"
            beerHeader.append(minorInfo)

            // title
            const beerTabTitle = document.createElement("h1")
            beerTabTitle.className = "beerTabTitle"
            beerTabTitle.textContent = apiEntry.name
            minorInfo.append(beerTabTitle)

            // info points
            const brewDate = document.createElement("p")
            brewDate.textContent = "First brewed " + apiEntry.first_brewed
            brewDate.className = "infoPoint"
            minorInfo.append(brewDate)

            const beerTagline = document.createElement("p")
            beerTagline.textContent = apiEntry.tagline
            beerTagline.className = "infoPoint"
            minorInfo.append(beerTagline)

            const beerABV = document.createElement("p")
            beerABV.textContent = "ABV: " + apiEntry.abv + "%"
            beerABV.className = "infoPoint"
            minorInfo.append(beerABV)


            // major info
            const beerDescription = document.createElement("p")
            beerDescription.textContent = apiEntry.description
            beerDescription.className = "beerDescription"
            beerInfo.append(beerDescription)

            const beerFoodPair = document.createElement("p")
            beerFoodPair.textContent = "Pairs well with " + apiEntry.food_pairing
            beerFoodPair.className = "beerFoodPair"
            beerInfo.append(beerFoodPair)

            // recipe
            const recipeHeader = document.createElement("h2")
            recipeHeader.textContent = "Recipe:"
            recipeHeader.className = "recipeHeader"
            beerInfo.append(recipeHeader)

            const beerRecipe = document.createElement("p")
            beerRecipe.className = "beerRecipe"
            beerInfo.append(beerRecipe)
            beerRecipe.textContent = `Combine all of the hops and malt in ${apiEntry.boil_volume.value} liters of water and bring to a boil. Bring the temperature down to ${apiEntry.method.mash_temp[0].temp.value} degrees celsius and continue heating for ${apiEntry.method.mash_temp[0].duration} minutes. Allow to cool to approximately ${apiEntry.method.fermentation.temp.value} degrees celsius and add the yeast (${apiEntry.ingredients.yeast}). Keep the pH near ${apiEntry.ph}. ${apiEntry.brewers_tips} Good luck!`

        }

        if(targetPosX > screenWidth/2) {

            // main div
            contentContainer.append(beerInfo)

            // initialize variable 
            tabWidth = beerInfo.offsetWidth

            beerInfo.style.left = targetPosX - tabWidth + cardWidth + "px"
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
            beerTabTitle.textContent = apiEntry.name
            minorInfo.append(beerTabTitle)

            // info points
            const brewDate = document.createElement("p")
            brewDate.textContent = "First brewed " + apiEntry.first_brewed
            brewDate.className = "infoPoint"
            minorInfo.append(brewDate)

            const beerTagline = document.createElement("p")
            beerTagline.textContent = apiEntry.tagline
            beerTagline.className = "infoPoint"
            minorInfo.append(beerTagline)

            const beerABV = document.createElement("p")
            beerABV.textContent = "ABV: " + apiEntry.abv + "%"
            beerABV.className = "infoPoint"
            minorInfo.append(beerABV)

            // image
            const beerPic = document.createElement("img")
            beerPic.src = apiEntry.image_url
            beerPic.className = "beerPic"
            beerHeader.append(beerPic)

            // major info
            const beerDescription = document.createElement("p")
            beerDescription.textContent = apiEntry.description
            beerDescription.className = "beerDescription"
            beerInfo.append(beerDescription)

            const beerFoodPair = document.createElement("p")
            beerFoodPair.textContent = "Pairs well with " + apiEntry.food_pairing
            beerFoodPair.className = "beerFoodPair"
            beerInfo.append(beerFoodPair)

            // recipe
            const recipeHeader = document.createElement("h2")
            recipeHeader.textContent = "Recipe:"
            recipeHeader.className = "recipeHeader"
            beerInfo.append(recipeHeader)

            const beerRecipe = document.createElement("p")
            beerRecipe.className = "beerRecipe"
            beerInfo.append(beerRecipe)
            beerRecipe.textContent = `Combine all of the hops and malt in ${apiEntry.boil_volume.value} liters of water and bring to a boil. Bring the temperature down to ${apiEntry.method.mash_temp[0].temp.value} degrees celsius and continue heating for ${apiEntry.method.mash_temp[0].duration} minutes. Allow to cool to approximately ${apiEntry.method.fermentation.temp.value} degrees celsius and add the yeast (${apiEntry.ingredients.yeast}). Keep the pH near ${apiEntry.ph}. ${apiEntry.brewers_tips} Good luck!`


            // styling
            beerPic.style.marginLeft = "auto"
            beerPic.style.float = "right"
            beerPic.style.marginRight = "17%"

            minorInfo.style.marginLeft = "10%"
            
            }
        
            lastEntry = event.target
            lastPosX = lastEntry.getBoundingClientRect().left + window.scrollX
            lastPosY = lastEntry.getBoundingClientRect().top + window.scrollY

    } else {
        beerInfo.remove()

    }
})