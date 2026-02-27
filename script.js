const container = document.getElementById("container");

const create = document.getElementById("create");

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
        container.appendChild(gridSquare);
}})