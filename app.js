
const board = document.querySelector('#board');
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'brown', 'light blue', 'gold', 'lightyellow'];
const SQUARES_NUMBER = 900;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  })

  square.addEventListener('mouseleave', () => {
    //removeColor(square);
  })

  board.append(square);
}

function setColor(square) {
    const color = getRandomColor();
    square.style.backgroundColor= color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(square) {
    square.style.backgroundColor='#1d1d1d';
    square.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function myClear() {
    let squares = document.querySelectorAll('.square');
    console.log(squares);
    squares.forEach( function(item){
        item.style.backgroundColor='#1d1d1d';
        item.style.boxShadow = `0 0 2px #000`;
    })
    /*
    square.style.backgroundColor='#1d1d1d';
    square.style.boxShadow = `0 0 2px #000`;
    */
}