var headerOne = document.getElementById("header")
headerOne.style.textAlign = "center"

var newHeaderGreeting = document.createElement("p")
newHeaderGreeting.textContent = "JavaScript Made This!!"
newHeaderGreeting.style.fontSize = "40px"
newHeaderGreeting.style.fontWeight = "bold"
newHeaderGreeting.style.marginBottom = "10px"

var newHeader = document.getElementById("header")
newHeader.prepend(newHeaderGreeting)

var newHeaderGreetingSecondLineA = document.createElement("span")
newHeaderGreetingSecondLineA.textContent = "Alejandro Pastor"
newHeaderGreetingSecondLineA.style.color = "blue"
newHeaderGreetingSecondLineA.style.fontSize = "20px"
newHeaderGreetingSecondLineA.style.fontWeight = "bold"

var newHeaderA = document.getElementById("header")
newHeaderA.append(newHeaderGreetingSecondLineA)


var newHeaderGreetingSecondLineB = document.createElement ("span")
newHeaderGreetingSecondLineB.textContent = "wrote with JavaScript"
newHeaderGreetingSecondLineB.style.fontSize = "20px"
newHeaderGreetingSecondLineB.style.fontWeight = "bold"
newHeaderGreetingSecondLineB.style.marginLeft = "5px"

var newHeaderB = document.getElementById ("header")
newHeaderB.append(newHeaderGreetingSecondLineB)

var messages = document.querySelector(".messages");
var messageText = messages.querySelectorAll("div.message");
messageText[0].textContent = "Something good";
messageText[1].textContent = "Something fun";
messageText[2].textContent = "I repeat something good";
messageText[3].textContent = "I repeat something fun";

var clearButton = document.getElementById("clear-button")
clearButton.addEventListener('click',function(){
    messages.innerHTML = ""
})

var dropDown = document.getElementById("theme-drop-down")
var messageLeft = document.getElementsByClassName("message left")
var messageRight = document.getElementsByClassName("message right")

dropDown.addEventListener("change", function () {
for (let i = 0; i < dropDown.length; i++){
    if (dropDown.value === "theme-two"){
        messageLeft[i].style.backgroundColor = "red";
        messageRight[i].style.backgroundColor = "black"
        messageRight[i].style.color = "white"
    } else if (dropDown.value === "theme-one"){
        messageLeft[i].style.backgroundColor = "burlywood";
        messageRight[i].style.backgroundColor = "lightblue"
    }
}})

var formButtonInput = document.getElementById("formButton")
formButtonInput.addEventListener('click',function(){
    const newInput = getElementById("input").value
    newInput.value = ""
    
    const h1 = document.createElement('h1')
    h1.textContent = newInput
    newHeaderA.append(newInput)
})
