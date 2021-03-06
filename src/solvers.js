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
  console.log('starting the problem................');
  var board = new Board({n: n});
  // console.log(JSON.stringify(board.rows()));

  //this dfs function returns one solution when it finds one
  var findPositions = function(board, currRow) {
    if (currRow === n) {
      return board.rows();
    }

    for (var i = 0; i < n; i++) {
      //console.log(JSON.stringify(board.rows()));
      board.rows()[currRow][i] = 1;
      if (!board.hasAnyRooksConflicts()) {
        var solution = findPositions(board, currRow + 1);
        if (solution !== undefined) {
          return solution;
        }
      }
      board.rows()[currRow][i] = 0;
    }
  };

  var result = findPositions(board, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(result));
  return result;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  var factCount = function(n) {
    if (n === 0) {
      return 1;
    }
    return n * factCount(n - 1);
  };

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return factCount(n);
}; 

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});

  var findPositions = function(n, board, currRow) {
    if (currRow === n) {
      return board.rows(); 
    }

    for (var i = 0; i < n; i++) {
      //debugger;
      board.rows()[currRow][i] = 1;
      //console.log(JSON.stringify(board.rows()));
      if (!board.hasAnyQueensConflicts()) {
        var solution = findPositions(n, board, currRow + 1);
        if (solution !== undefined) {
          return solution;
        }
      }
      board.rows()[currRow][i] = 0;
    }
  };

  var result = findPositions(n, board, 0);
  if (result === undefined) {
    return board.rows();
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({n: n});

  var _findQueenSolutions = function(currentRow) {
    if (currentRow === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.rows()[currentRow][i] = 1;
      if (!board.hasAnyQueensConflicts()) {
        _findQueenSolutions(currentRow + 1);
      }
      board.rows()[currentRow][i] = 0;
    }
  };
  _findQueenSolutions(0);
  
  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
