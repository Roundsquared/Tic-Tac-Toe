const gameBoard = {
  board: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
  displayBoard: function() {

    let background = document.querySelector('#gameboard')

    let crankDat = 0
    let coords;

    const locator = function() {
      

        if (coords.includes('piece0')) {
          
          console.log('0')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
            }

        else if (coords.includes('piece1')) {
          console.log('1')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
        else if (coords.includes('piece2')) {
          console.log('2')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }

        else if (coords.includes('piece3')) {
          console.log('3')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
        else if (coords.includes('piece4')) {
          console.log('4')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
        else if (coords.includes('piece5')) {
          console.log('5')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
      
        else if (coords.includes('piece6')) {
          console.log('6')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
        else if (coords.includes('piece7')) {
          console.log('7')
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
        }
        else if (coords.includes('piece8')) {
          console.log('8')
          
          myvar=(gameFlow.change())
          if (myvar==='O'){
             console.log("It's now X's turn because we're putting down an O marker")
            }
            else if (myvar==='X'){
              console.log("It's now O's turn because we're putting down an X marker")}
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
        piece.classList.add('piece')
        piece.setAttribute('id', `piece${crankDat}`)
        piece.addEventListener('click', (e) => {
          coords = e.target.id + ' ' + e.target.className
          locator(coords)
        })
        crankDat++
        piece.textContent = i[j];
        row.appendChild(piece)
      }
      
      

    }

  }


}
let button = document.querySelector('.testbutton')
button.addEventListener('click', () => {
  gameBoard.displayBoard();
})

const player = {


  newPlayer: function(name,marker) {
    this.marker=marker
    this.name = name;
    return name,marker
  }


}

const gameFlow = {
  xTurn: false,
  currentPlayer: 'X',
  change: function changeGame() {
  

    if (this.xTurn) {
      this.xTurn = false
      
      this.currentPlayer = 'O'
      
       
      
    }
    else if (!this.xTurn) {
      
      this.currentPlayer = 'X'
      
      this.xTurn = true
      
    }
    return this.currentPlayer
  }

}
