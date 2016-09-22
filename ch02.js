/* Looping a triangle */

function printTriangle() {
  for (var i = 0; i <= 7; i++) {
  	for (var j = 0, row = ''; j < i; j++)
      row += '#';
  	console.log(row);
  }
}

printTriangle();

// → #
//   ##
//   ###
//   ####
//   #####
//   ######
//   #######


/* FizzBuzz */

// :P

/* Chess board */

function chessBoard() {
  	var board = '';
	for (var row = 0; row < 8; row++) {
      	for (var col = 0; col < 8; col++) {
          	if (row % 2 == 0)	board += (col % 2 == 0) ? ' ': '#';
          	else	board += (col % 2 == 0) ? '#': ' ';
      	}
      	board += '\n';
    }
    return board;
}

console.log(chessBoard());
// →  # # # #
//	 # # # # 
//	  # # # #
//	 # # # # 
//	  # # # #
//	 # # # # 
//	  # # # #
//	 # # # #