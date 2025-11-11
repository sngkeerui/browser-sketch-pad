const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.style.width = "37.5px";
    gridSquare.style.height = "37.5px";
    container.appendChild(gridSquare);
} 
/* 
The goal is to make the squares divs appear as grids in the 
container using Flexbox. 
My current idea is for the dimensions of the square divs to
adjust dynamically, so that it wraps nicely to fill in the 
container of a fixed dimension. 
*/