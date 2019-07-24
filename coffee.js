const bean = "Colombian"
const style = "Espresso"
const size = "Medium"
const customer = {
    firstName: "Johann",
    lastName: "Abramovitz"
}


const finalMessage = `${size} ${bean} ${style} is ready for ${customer.firstName} ${customer.lastName}!!`

document.querySelector("#completeOrders")
.innerHTML = finalMessage

// Use a string template that uses interpolation to generate the following string
"Medium Colombian Espresso is ready for Johann Abramovitz!!"

//. Create a `<div>` element in HTML and give it an id attribute value of `completedOrders`
//2. Update the `innerHTML` property of `div` with the message that you created above.