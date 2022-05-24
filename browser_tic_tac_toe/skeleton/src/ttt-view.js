class View {
  constructor (game, el) { 
    this.game = game;
    this.el = el;


  }

  setupBoard () {
    const grid = new Array(3);
    grid.fill(1);
    for (let i in grid) {
      grid[i] = new Array(3);
    }
  }

  bindEvents () { }

  handleClick (e) { 
    // alert(`${data-}`);
  }

  makeMove (square) {

    this.game.playMove()

  }

}

module.exports = View;
