
function createGame() {
    let curreentplayer =0 ;
    let playerOne =[];
    let playerTwo =[];
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let board = gameBoard();

    function gameBoard(){
    const board = [];
    for(let i=1;i<=3 ; i++){
        for (let j=1;j<=3;j++){
            board.push(Number(String(i)+String(j)));
    }}
    return board;
    }

    function togglePlayer(){
        curreentplayer==0 ? curreentplayer=1 : curreentplayer =0;
    }

    function updateScore(){
        curreentplayer==0? playerOneScore++ : playerTwoScore++;
    }

    function getBoard(){
        return [...board];
    }

    function getCurrentPlayerArray(){
        return curreentplayer==0 ? [...playerOne] : [...playerTwo];
    }

    function addToPlayer(tile){
        curreentplayer==0? playerOne.push(tile) : playerTwo.push(tile);;
    }

    function nextTurn(){
        curreentplayer=0;
        board = gameBoard();
        playerOne=[];
        playerTwo=[];
    }
    return {
        board,
        playerOne,
        playerTwo,
        playerOneScore,
        playerTwoScore,
        togglePlayer,
        getCurrentPlayerArray,
        addToPlayer,
        getBoard,
        updateScore,
        nextTurn
    };

}
const game = createGame();

function playe()
{
    function playTurn(square) {
        const squareSlected = Number(square);
        game.addToPlayer(squareSlected);
        const indexofSquareSlected = game.getBoard();
        if(checkifWon()){
            game.updateScore();
            game.nextTurn();
        }
        game.togglePlayer();
    }
    const checkifWon = () =>{
        const playerArray = game.getCurrentPlayerArray();
        const winningsequence = [   [11, 12,13] ,
                                    [21, 22,23] ,
                                    [31, 32,33] ,
                                    [11, 22,33] ,
                                    [13, 22,31] ,
                                    [11, 21,31] , 
                                    [12, 22, 32],
                                    [13 ,23, 33]  
                                ];
        for(let i=0 ;i<winningsequence.length ;i++){
            let currentmatched=0 ;
            for(let j=0; j<winningsequence[i].length ;j++){
                if (playerArray.includes(winningsequence[i][j])){
                    currentmatched++;
                    if (currentmatched>=3){
                        return true;
                    }
                } 
            }
        }
        return false;
    }

    return {playTurn,checkifWon}
}
const play = playe();