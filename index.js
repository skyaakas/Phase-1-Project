const contentContainer = document.getElementById("contentContainer")

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(resp => resp.json())
    .then(data => renderData(data))
})

function renderData (data) {
    console.log(data)
    data.forEach((element, index, array) => {
        const entryContainer = document.createElement("div")
        entryContainer.style.display = "flex"
        entryContainer.style.flexDirection = "column"
        entryContainer.style.width = "300px"
        contentContainer.append(entryContainer)

        const title = document.createElement("h3")
        title.textContent = array[index].name
        title.style.margin = "auto"
        entryContainer.append(title)

        const image = document.createElement("img")
        image.src = array[index].image_url
        image.style.width = "100px"
        image.style.margin = "auto"
        entryContainer.append(image)

        const description = document.createElement("p")
        description.textContent = array[index].description
        description.style.width = "260px"
        description.style.margin = "auto"
        entryContainer.append(description)
    })
}

