let button = document.getElementById("btn");
let para = document.getElementById("para");
let randomColor = function () { 
    return Math.floor(Math.random() * 255);
}

function colorChanger() {
    para.style.color = `rgb( ${randomColor()}, ${randomColor()}, ${randomColor()} )`;
}

button.addEventListener("click", colorChanger);