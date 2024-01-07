let color = "black";
let click = true;

function newDiv(size) {
  const board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => {
    div.remove();
  });
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorize);
    square.style.backgroundColor = "white";
    board.appendChild(square);
  }
}

newDiv(16);

function changeSize(input) {
  if (input > 100) {
    input = 100;
  }
  if (input < 5) {
    input = 5;
  }
  newDiv(input);
}

function colorize() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  const board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = `Mode: Coloring`;
    } else {
      document.querySelector(".mode").textContent = `Mode: Not Coloring`;
    }
  }
});
