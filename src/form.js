
const subscribeForm = document.getElementById("subscribe-form")
const emailInput = document.getElementById("emailinput")
const nameInput = document.getElementById("nameinput")

const modalButton = document.querySelector(".modal-btn")
const newsletter = document.querySelector(".modal-bg")
const modalClose = document.querySelector(".modal-close")

let modalOpen = 0



modalButton.addEventListener("click", function() {
    newsletter.classList.add("bg-active")
    modalOpen = 1
    console.log(modalOpen)
})

modalClose.addEventListener("click", function() {  
    newsletter.classList.remove("bg-active")
    modalOpen = 0
    console.log(modalOpen)
})

subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault()

        let newUser = {
            email: emailInput.value,
            name: nameInput.value,
        }
        createsNewUser(newUser)
    })

function createsNewUser (postOBJ) {
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postOBJ)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)})
    .catch(error => {
        alert(`We're sorry! Our boss thinks that ${nameInput.value} is a stupid name. Goodbye.`)
        newsletter.classList.remove("bg-active")
        modalOpen = 0
        console.log(modalOpen)
        subscribeForm.reset()
    })
}

