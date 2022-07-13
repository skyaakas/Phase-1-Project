const beerInfo = document.createElement("div")
const entryArry = document.getElementsByClassName("entry")

document.addEventListener("click", event => {
    beerInfo.className = "beerInfo"

    if(event.target.className === "entry") {
        contentContainer.append(beerInfo)
        beerInfo.style.left = event.target.getBoundingClientRect().left + window.scrollX + "px"
        beerInfo.style.top = event.target.getBoundingClientRect().top + window.scrollY + "px"

        console.log(entryArry)

        entryArry.forEach(element => element.style.zIndex = -1)

        event.target.style.zIndex = 3
        event.target.style.backgroundColor = "white"

        console.log("Target: ", event.target)
        console.log("pos.x: ", event.target.getBoundingClientRect().left + window.scrollX)
        console.log("pos.y: ", event.target.getBoundingClientRect().top + window.scrollY)
        
    } else {
        beerInfo.remove()
    }
})