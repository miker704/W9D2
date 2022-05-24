const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const something = document.getElementsByClassName("ttt");
  const gridArray  = document.querySelector('#grid');
  
  const game = new Game(); 
  const newGridArray = new View(game,gridArray);

  newGridArray.setupBoard();
  gridArray.addEventListener('click',newGridArray.handleClick);

});
