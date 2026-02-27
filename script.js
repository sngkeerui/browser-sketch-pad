const container = document.getElementById("container");

const create = document.getElementById("create");

create.addEventListener("click", () => {
    const size = +prompt("Enter grid size (1-100)");
    if (size < 1 || size > 100 || isNaN(size)) {
        return alert("Please enter a valid grid size!");
    }
})
    