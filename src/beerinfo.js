const beerInfo = document.createElement("div")

document.addEventListener("click", event => {
    beerInfo.className = "beerInfo"

    if(event.target.className === "entry") {
        contentContainer.append(beerInfo)
        beerInfo.style.left = event.target.getBoundingClientRect().left + window.scrollX + "px"
        beerInfo.style.top = event.target.getBoundingClientRect().top + window.scrollY + "px"

        console.log("Target: ", event.target)
        console.log("pos.x: ", event.target.getBoundingClientRect().left + window.scrollX)
        console.log("pos.y: ", event.target.getBoundingClientRect().top + window.scrollY)
        
    } else {
        beerInfo.remove()
    }
})