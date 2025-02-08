export const marking = {
    X:'X', O: 'O', U: 'U'
}

export const images = {
    X: '/images/X.png',
    O: '/images/O.png',
    U: '/images/U.png'
}

export const GameState = {
    INIT:0, PLAYING:1, DONE:2
}

export const GamePlayStrategy = {
    VS_HUMAN: 'vsHuman', VS_RANDOM: 'vsRandom'
}

export class HomeModel {

    gameBoard; // 1D array of 9 elements
    gameState = GameState.INIT; //INIT, PLAYING, DONE
    winner =null; //X,O,U;null(playing)
    turn =marking.X; //X or O
    moves = 0;
    progressMessage = 'Click New Game to start'; //Display at start
    playStrategy = GamePlayStrategy.VS_HUMAN; //VS_HUMAN, VS_RANDOM

    // winning combinations
    winningCombinations = [
        [0,1,2], [3,4,5], [6,7,8], //rows
        [0,3,6], [1,4,7], [2,5,8], //columns
        [0,4,8], [2,4,6] //diagonals
    ];


    constructor() {
        //init game board
        this.gameBoard = Array(9).fill(marking.U);
    }

    move(pos){
        this.gameBoard[pos] = this.turn;
        this.moves++;

    }

    computerMove(){
        //pick random empty cell
        let pos = Math.floor(Math.random() * 9);
        while(this.gameBoard[pos] !== marking.U){
            pos = Math.floor(Math.random() * 9);
        }
        return pos;
    }

    changeTurn(){
        this.turn = this.turn === marking.X ? marking.O : marking.X;
    }

    // return the game result : X, O, U(draw), null(playing)
    getGameResult(){
        // check if there is a winner 
        for(let i=0; i< this.winningCombinations.length; i++){
            const [a,b,c] = this.winningCombinations[i];
            if(this.gameBoard[a] !== marking.U && this.gameBoard[a] === this.gameBoard[b] && this.gameBoard[a] === this.gameBoard[c]){
                return this.gameBoard[a];   
            }
        }

        // Check for draw 
        if(this.gameBoard.includes(marking.U) === false){
            return marking.U;
        }

        //no winner or draw yet
        return null;
    }

    newGame(){
        //retain play strategy
        this.gameState = GameState.PLAYING;
        this.progressMessage='Click on board to move.';
        this.winner = null;
        this.turn =marking.X;
        this.moves = 0;
        for(let i=0; i< this.gameBoard.length; i++){
            this.gameBoard[i] = marking.U;
        }
    }

    reset() {
        this.newGame();
        this.playStrategy = GamePlayStrategy.VS_HUMAN;
        this.gameState = GameState.INIT;
        this.progressMessage = 'Click New Game to start';
    }
}