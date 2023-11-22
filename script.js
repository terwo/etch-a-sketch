function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createFlexGrid(sides) {
    const container = document.querySelector('.grid-container');

    for (let i = 0; i < sides; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < sides; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = getRandomRGB();
            })
            row.appendChild(column);
        }
    }
}

createFlexGrid(16);

const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", () => {
    let sides = prompt("How many squares per side?");
    if (sides > 100) {
        alert("Please enter a number less than 100");
        return;
    }
    if (typeof Number(sides) !== "number") {
        alert("Please enter a number");
        return;
    }
    const parent = document.querySelector(".grid-container");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    createFlexGrid(sides);
})