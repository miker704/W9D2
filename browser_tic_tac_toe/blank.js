const grid = new Array(3);
// grid.fill(1);
// for(let i in grid){
  // console.log(i);
  // console.log(grid[i]);
//   grid[i]= new Array(3);
//   grid[i].fill("_");

// }
grid.fill(new Array(3).fill("_")); 

console.table(grid);
// for(let i of grid){
//   console.log(i);
//   // console.log(grid[i]);

// }
grid[1][1] = 1;

// console.log(Array.isArray(grid[0][0]));
console.table(grid);