document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: [
    a ={
      row: 1,
      col: 1,
      isMine: true,
      hidden: true,
      surroundingMines: 0

    },
    b ={
      row: 1,
      col: 2,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    c ={
      row: 1,
      col: 3,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    d ={
      row: 2,
      col: 1,
      isMine: true,
      hidden: true,
      surroundingMines: 0
    },
    e ={
      row: 2,
      col: 2,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    f ={
      row: 2,
      col: 3,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    g ={
      row: 3,
      col: 1,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    h ={
      row: 3,
      col: 2,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    i ={
      row: 3,
      col: 3,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
  ],
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i=0; i<board.cells.length; i++) {
    board.cells[i].surroundingMines =  countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.




function countSurroundingMines (cell) {
  var count = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for (var i=0; i<surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++;
    }
  }
  return count;
}
