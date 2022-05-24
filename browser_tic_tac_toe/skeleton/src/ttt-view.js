class View {
  constructor(game, el) {}

  setupBoard() {}
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}
View.prototype.setupboard = function () {
  const grid = new Array(3);
  grid.fill(1);
  for(let i in grid){

    grid[i]= new Array(3);

  
  }
 
}
View.prototype.handleClick = function(){


}

View.prototype.bindEvents = function(){

  
}

module.exports = View;
