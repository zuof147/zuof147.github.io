//question 14
const coloredElement = document.querySelector("#colored-element")
coloredElement.style.color = "red"

//question 15
const parentElement = document.querySelector("#parent-element")
const htmlElement = document.createElement('p')
htmlElement.innerHTML = "It is a new element!"
parentElement.appendChild(htmlElement)

//question 16
const forLoopArray = ["Item One", "Item Two", "Item Three", "Item Four"]
for (let index = 0; index < forLoopArray.length; index++) {
    const item = forLoopArray[index];
    console.log(item);
}
//question 17
// Dom References
const clickEventElement = document.querySelector('#event-listener-button')
const clickEventFeedbackElement = document.querySelector('#click-feedback')

//click event
clickEventElement.addEventListener('click', (event) => {
    console.log('click event', event)
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "You clicked it"
    // Add Feedback Element to Page
    clickEventFeedbackElement.appendChild(feedbackElement)
})
