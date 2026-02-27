const container = document.getElementById("container");

const palette = document.getElementById("palette");

const create = document.getElementById("create");

const reset = document.getElementById("reset");

create.addEventListener("click", () => {
    const gridSize = +prompt("Enter grid size (1-100)");
    if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        alert("Please enter a valid grid size!");
        return;
    }

    container.innerHTML = "";

    for (let i = 0; i < gridSize ** 2; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.flex = `0 0 ${100 / gridSize}%`;
        gridSquare.style.height = `${100 / gridSize}%`;
        gridSquare.addEventListener("mousedown", () => {
            gridSquare.style.backgroundColor = palette.value;
        });
        gridSquare.addEventListener("mouseover", (e) => {
            if (e.buttons === 1) {
                gridSquare.style.backgroundColor = palette.value;
            }
        });
        container.appendChild(gridSquare);
    }})

reset.addEventListener("click", () => {
    const gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(gridSquare => gridSquare.style.backgroundColor = "");
})