let hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};

// function findsBeer() {
//     beerSearchForm.addEventListener("submit", event => {
//         event.preventDefault()
//         alert(beerInput.value)
//         searchForm.reset()
//     })
// }