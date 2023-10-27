const gameBoard = {
  board: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
  displayBoard: function() {

    let background = document.querySelector('#gameboard')

    let crankDat = 0
    let coords;

    const locator = function() {
      if (coords.includes('row0')) {

        if (coords.includes('piece0')) {
          console.log('0')
          gameFlow.change()

        }
        else if (coords.includes('piece1')) {
          console.log('1')
          gameFlow.change()
        }
        else if (coords.includes('piece2')) {
          console.log('2')
          gameFlow.change()
        }
      }
      else if (coords.includes('row1')) {

        if (coords.includes('piece0')) {
          console.log('3')
          gameFlow.change()
        }
        else if (coords.includes('piece1')) {
          console.log('4')
          gameFlow.change()
        }
        else if (coords.includes('piece2')) {
          console.log('5')

          gameFlow.change()
        }
      }
      else if (coords.includes('row2')) {

        if (coords.includes('piece0')) {
          console.log('6')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
        else if (coords.includes('piece1')) {
          console.log('7')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
        else if (coords.includes('piece2')) {
          console.log('8')
          
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
      }
    }
    for (let i of this.board) // Loops through each row of the game board,in this    case, each subarray 
    {
      let row = document.createElement('div')
      row.setAttribute('class', 'row')
      row.setAttribute('id', `row${this.board.indexOf(i)}`)
      background.appendChild(row)


      for (let j in i)// Goes into each of the rows and grabs each piece on the row
      {

        let piece = document.createElement('div');
        piece.classList.add(`row${crankDat}`, 'piece')
        piece.setAttribute('id', `piece${j}`)
        piece.addEventListener('click', (e) => {
          coords = e.target.id + ' ' + e.target.className
          locator(coords)
        })
        piece.textContent = i[j];
        row.appendChild(piece)
      }
      crankDat++
      

    }

  }


}
let button = document.querySelector('.testbutton')
button.addEventListener('click', () => {
  gameBoard.displayBoard();
})

const player = {


  newPlayer: function(name) {
    this.name = name;
    return name
  }


}

const gameFlow = {
  xTurn: true,
  currentPlayer: 'X',
  change: function changeGame() {
  

    if (this.xTurn) {
      this.xTurn = false
      
      this.currentPlayer = 'O'
      
       
      //console.log(currentPlayer)
    }
    else if (!this.xTurn) {
      
      this.currentPlayer = 'X'
      
      this.xTurn = true
      // console.log(currentPlayer)
    }
    console.log(this.currentPlayer)
    return this.currentPlayer
  }

}
