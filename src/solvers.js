/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var matrix = [...Array(n).keys()].map(i => Array(n));
  var board = new Board(matrix);

  //console.log('starting ' + board.rows().length + '.....................'); 
  //console.log('check if board is created correctly' + JSON.stringify(board.rows()));

  var findPositions = function(n, board, currRow) {
    if (currRow === n) {
      return; 
    }

    for (var i = 0; i < n; i++) {
      //debugger;
      board.rows()[currRow][i] = 1;
      //console.log(JSON.stringify(board.rows()));
      if (board.hasAnyRooksConflicts()) {
        board.rows()[currRow][i] = 0;
        continue;
      }
      findPositions(n, board, currRow + 1);
      //board.rows()[currRow][i] = 0;
    }
  };


  findPositions(n, board, 0);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var matrix = [...Array(n).keys()].map(i => Array(n));
  var board = new Board(matrix);

  //console.log('starting ' + board.rows().length + '.....................'); 
  //console.log('check if board is created correctly' + JSON.stringify(board.rows()));

  // var findPositions = function(n, board, currRow) {
  //   if (currRow === n) {
  //     solutionCount++;
  //     console.log('current count is ' + solutionCount);
  //     return;
  //   }

  //   for (var i = 0; i < n; i++) {
  //     //debugger;
  //     board.rows()[currRow][i] = 1;
  //     //console.log(JSON.stringify(board.rows()));
  //     if (board.hasAnyRooksConflicts()) {
  //       board.rows()[currRow][i] = 0;
  //       continue;
  //     }
  //     findPositions(n, board, currRow + 1);
  //     //board.rows()[currRow][i] = 0;
  //   }
  // };


  // findPositions(n, board, 0);
  var factCount = function(n) {
    if (n === 0) {
      return 1;
    }
    return n * factCount(n - 1);
  };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return factCount(n);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
