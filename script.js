const container = document.querySelector("#container");

const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    let gridSize = prompt("Enter grid size (max 100)");
    if (gridSize <= 0 || gridSize > 100) {
    alert("Please enter a valid grid size");
    return;
    }

    container.innerHTML = "";

    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    
    for (let i = 0; i < gridSize ** 2; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.style.width = `${600/gridSize}px`;
    gridSquare.style.height = `${600/gridSize}px`;
    gridSquare.addEventListener('mouseenter', () => gridSquare.style.backgroundColor = getRandomColor());
    container.appendChild(gridSquare);
}});

/* 
The goal is to make the squares divs appear as grids in the 
container using Flexbox. 
My current idea is for the dimensions of the square divs to
adjust dynamically, so that it wraps nicely to fill in the 
container of a fixed dimension. 
*/