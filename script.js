function handleCellClick(e){
    const cell = e.target
    const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
    placeMark(cell, currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    }
    else if(isDraw()){
        endGame(True)
    }
    else{
        swapTurns()
        setBoardHoverClass()
    }
}
function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = "It's a DRAW!"
    }
    else{
        winningMessageTextElement.innerText = "Player with" +  ${isPlayer_O_Turn ?  "O" : "X"} + "wins!"
    }
    winningMessageElement.classList.add('show')
}
function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)
    })
}
function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}
function swapTurns(){
    isPlayer_O_Turn = !isPlayer_O_Turn
}
function setBoardHoverClass(){
    boardElement.classList.remove(PLAYER_X_CLASS)
    boardElement.classList.remove(PLAYER_O_CLASS)
    if(isPlayer_O_Turn){
        boardElement.classList.add(PLAYER_O_CLASS)
    }
    else{
        boardElement.classList.add(PLAYER_X_CLASS)
    }
}
function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}