const container = document.querySelector('#container');
const button = document.querySelector('.reset');

const makeRows = (rows, cols) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', () => {
      cell.setAttribute('style', 'background-color: black;');
    });
  };
};

button.addEventListener('click', () => {
  const reset = document.querySelectorAll('.grid-item');
  reset.forEach(paint => {
    paint.remove('.grid-item');
  });
  userInput = prompt('How many rows/columns would you like?');
  makeRows(userInput, userInput);
});

makeRows(100, 100);

