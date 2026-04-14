// Create a query selector for the form
let button = document.querySelector("button")
// Attach an event listener that is triggered when the form is submitted. 
button.addEventListener("submit", async(e) =>{
    e.preventDefault()

    const bookData = FormData(createForm)
    const reqBody = Object.fromEntries(bookData)

    await fetch("/new/book"),{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    }

})

window.location.href="/"
// Make sure to do the following in the event listener:
// Stop the page from reloading when submitting
// Access the form data 
// Build a request body
// Console log the request body
