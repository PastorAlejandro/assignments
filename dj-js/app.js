// The square's color will change as follows:

// done- Blue when the mouse hovers over the square
// done- Red when the mouse button is held down over the square
// done- Yellow when the mouse button is let go over the square
// done- Green when the mouse is double clicked in the square
// done- Orange when the mouse scroll is used somewhere in the window (not just over the square).
    
//     You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check out the key and keyCode property of `e.target`

let btnBox = document.getElementById("box")

btnBox.addEventListener('mouseover',function(){
    btnBox.style.backgroundColor = "blue"
})

btnBox.addEventListener('mousedown', function () {
    btnBox.style.backgroundColor = "red"
})

btnBox.addEventListener('mouseup', function () {
    btnBox.style.backgroundColor = "yellow"
})

btnBox.addEventListener('dblclick', function () {
    btnBox.style.backgroundColor = "green"
})

document.addEventListener('wheel', function () {
    btnBox.style.backgroundColor = "orange"
})

document.addEventListener('keyup',function(event){
    if(event.code == 'KeyB'){
        document.getElementById("box").style.backgroundColor="blue"
    } else if (event.code == 'KeyR'){
        document.getElementById("box").style.backgroundColor="red"
    } else if (event.code == 'KeyY'){
        document.getElementById("box").style.backgroundColor="yellow"
    } else if (event.code == 'KeyG'){
        document.getElementById("box").style.backgroundColor="green"
    } else if (event.code == 'KeyO'){
        document.getElementById("box").style.backgroundColor="orange"
    }
})
