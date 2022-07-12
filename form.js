
const subscribeForm = document.getElementById("subscribe-form")
const emailInput = document.getElementById("emailinput")
const nameInput = document.getElementById("nameinput")

console.log(emailInput.value)
console.log(nameInput.value)



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
        debugger
        console.log(data)})
    .catch(error => console.log(error))
}
