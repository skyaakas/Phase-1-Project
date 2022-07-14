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

        const beerTabTitle = document.createElement("h2")
        beerTabTitle.textContent = beerData[event.target.id - 1].name
        beerTabTitle.style.color = "white"
        beerInfo.append(beerTabTitle)


        console.log(event.target.id)

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