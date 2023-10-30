const gameBoard = {
  board: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "],
  ],
  displayBoard: function () {
    let background = document.querySelector('#gameboard');
    let crankDat = 0;
    let coords;

    for (let i of this.board) {
      let row = document.createElement('div');
      row.setAttribute('class', 'row');
      row.setAttribute('id', `row${this.board.indexOf(i)}`);
      background.appendChild(row);

      for (let j in i) {
        let piece = document.createElement('div');
        piece.classList.add('piece');
        piece.setAttribute('id', `piece${crankDat}`);
        piece.addEventListener('click', (e) => {
          coords = e.target.id + ' ' + e.target.className;
          locator(coords);
        });
        crankDat++;
        piece.textContent = i[j];
        row.appendChild(piece);
      }
    }

    const locator = function () {
      let p1Name = playerObj.players[0].name;
      let p2Name = playerObj.players[1].name;
      let p1Marker = playerObj.players[0].marker;
      let p2Marker = playerObj.players[1].marker;

      if (coords.includes('piece0') && gameBoard.board[0][0] === ' ') {
        let square0 = document.getElementById('piece0');
        myvar = gameFlow.change();
        if (myvar === p2Name) {
          gameBoard.board[0][0] = p2Marker;
          square0.textContent = p2Marker;
          gameFlow.checkWinner();
        } else if (myvar === p1Name) {
          gameBoard.board[0][0] = p1Marker;
          square0.textContent = p1Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece1') && gameBoard.board[0][1] === ' ') {
        console.log('1');
        let square1 = document.getElementById('piece1');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[0][1] = p1Marker;
          square1.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[0][1] = p2Marker;
          square1.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece2') && gameBoard.board[0][2] === ' ') {
        console.log('2');
        let square2 = document.getElementById('piece2');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[0][2] = p1Marker;
          square2.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[0][2] = p2Marker;
          square2.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece3') && gameBoard.board[1][0] === ' ') {
        console.log('3');
        let square3 = document.getElementById('piece3');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[1][0] = p1Marker;
          square3.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[1][0] = p2Marker;
          square3.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece4') && gameBoard.board[1][1] === ' ') {
        console.log('4');
        let square4 = document.getElementById('piece4');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[1][1] = p1Marker;
          square4.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[1][1] = p2Marker;
          square4.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece5') && gameBoard.board[1][2] === ' ') {
        console.log('5');
        let square5 = document.getElementById('piece5');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[1][2] = p1Marker;
          square5.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[1][2] = p2Marker;
          square5.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece6') && gameBoard.board[2][0] === ' ') {
        console.log('6');
        let square6 = document.getElementById('piece6');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[2][0] = p1Marker;
          square6.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[2][0] = p2Marker;
          square6.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece7') && gameBoard.board[2][1] === ' ') {
        console.log('7');
        let square7 = document.getElementById('piece7');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[2][1] = p1Marker;
          square7.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[2][1] = p2Marker;
          square7.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      } else if (coords.includes('piece8') && gameBoard.board[2][2] === ' ') {
        console.log('8');
        let square8 = document.getElementById('piece8');
        myvar = gameFlow.change();
        if (myvar === p1Name) {
          gameBoard.board[2][2] = p1Marker;
          square8.textContent = p1Marker;
          gameFlow.checkWinner();
        } else if (myvar === p2Name) {
          gameBoard.board[2][2] = p2Marker;
          square8.textContent = p2Marker;
          gameFlow.checkWinner();
        }
      }
    }
  },
};

const playerObj = {
  players: [],
  newPlayer: function (name, marker) {
    return {
      name: name,
      marker: marker,
    };
  },
  addPlayer: () => {
    const player1 = playerObj.newPlayer(prompt('name pls', 'Player1'), prompt('markerpls', 'X'));
    const player2 = playerObj.newPlayer(prompt('namepls', 'Player2'), prompt('markerpls', 'O'));
    playerObj.players.push(player1, player2);
  },
};

const gameFlow = {
  xTurn: false,
  currentPlayer: 'X',
  change: function changeGame() {
    if (this.xTurn) {
      this.xTurn = false;
      this.currentPlayer = playerObj.players[1].name;
    } else if (!this.xTurn) {
      this.currentPlayer = playerObj.players[0].name;
      this.xTurn = true;
    }
    return this.currentPlayer;
  },
  checkWinner: function checkEm() {
    let p1Name = playerObj.players[0].name;
    let p2Name = playerObj.players[1].name;
    let p1Marker = playerObj.players[0].marker;
    let p2Marker = playerObj.players[1].marker;
    let win1X = [p1Marker, p1Marker, p1Marker];
    let win1O = [p2Marker, p2Marker, p2Marker];
    let isTie = true;

    for (let i = 0; i < gameBoard.board[0].length; i++) {
      let w = 0;
      let z = 0;
      for (let j = 0; j < gameBoard.board[i].length; j++) {
        if (gameBoard.board[i][j] === win1X[j]) {
          w++;
        }
        if (gameBoard.board[i][j] === win1O[j]) {
          z++;
        }
        if (w === 3) {
          this.stopTheGame(p1Name, p2Name);
        }
        if (z === 3) {
          this.stopTheGame(p2Name, p1Name);
        }
      }
    }

    for (let i = 0; i < gameBoard.board[0].length; i++) {
      let w = 0;
      let z = 0;
      for (let j = 0; j < gameBoard.board[i].length; j++) {
        if (gameBoard.board[j][i] === win1X[j]) {
          w++;
        }
        if (gameBoard.board[j][i] === win1O[j]) {
          z++;
        }
        if (w === 3) {
          this.stopTheGame(p1Name, p2Name);
        }
        if (z === 3) {
          this.stopTheGame(p2Name, p1Name);
        }
      }
    }

    let w1 = 0;
    let z1 = 0;
    for (let i = 0; i < gameBoard.board[0].length; i++) {
      if (gameBoard.board[i][i] === win1X[i]) {
        w1++;
      }
      if (gameBoard.board[i][i] === win1O[i]) {
        z1++;
      }
      if (w1 === 3) {
        this.stopTheGame(p1Name, p2Name);
      }
      if (z1 === 3) {
        this.stopTheGame(p2Name, p1Name);
      }
    }

    let w2 = 0;
    let z2 = 0;
    for (let i = 0; i < gameBoard.board[0].length; i++) {
      if (gameBoard.board[i][gameBoard.board.length - 1 - i] === win1X[i]) {
        w2++;
      }
      if (gameBoard.board[i][gameBoard.board.length - 1 - i] === win1O[i]) {
        z2++;
      }
      if (w2 === 3) {
        this.stopTheGame(p1Name, p2Name);
      }
      if (z2 === 3) {
        this.stopTheGame(p2Name, p1Name);
      }
    }
    for (let i = 0; i < gameBoard.board[0].length; i++) {
      for (let j = 0; j < gameBoard.board[i].length; j++) {
        if (gameBoard.board[i][j] === ' ') {
          isTie = false;
          break;
        }
      }
    }
    if (isTie) {
      console.log("It's a tie! The game is over.");
      gameFlow.resetGame()
    }
  },
  stopTheGame: (winner, loser) => {

    console.log('Congratulations: ' + winner + "! You won! You beat: " + loser);
    gameFlow.resetGame()
  },
  resetGame:()=>{
    gameBoard.board=[[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
    let background = document.querySelector('#gameboard');
    let crankDat = 0;
    background.textContent=''
    gameBoard.displayBoard()
  }
};

let button = document.querySelector('.testbutton');
button.addEventListener('click', (e) => {
  gameBoard.displayBoard();
  playerObj.addPlayer();
  e.target.parentNode.remove()
});
