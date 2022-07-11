document.addEventListener("DOMContentLoaded", () => {
    fetch("abc.com")
    .then(resp => resp.json())
    .then(data => document.body.append(data))
})