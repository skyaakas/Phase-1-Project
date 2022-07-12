// function handleForm() {
//     ramenForm.addEventListener("submit", (e) => {
//         e.preventDefault()
//         const newObj = {
//             name: ramenForm["new-name"].value,
//             restaurant: ramenForm["new-restaurant"].value,
//             image: ramenForm["new-image"].value,
//             rating: ramenForm["new-rating"].value,
//             comment: ramenForm["new-comment"].value
//         }
//         renderRamen(newObj)
//         renderForm.reset()
//     })
// }

const subscribeForm = document.querySelector("#subscribe-form")
function handleForm() {
    subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const newUser = {
            name: subscribeForm["name"].value,
            email: subscribeForm["email"].value}
        createsNewUser(newUser)
        subscribeForm.reset()
    })}

function createsNewUser(newUser) {
    fetch("http://localhost:3000/users",  {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(user => console.log(user))
}