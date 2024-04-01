const Player_one_sym ="X";
const Player_two_sym ="O";
class TicTacToe{
    handlesqrtClick(event){
        this.executeMove(event.target.id);
    }
    executeMove(moveIndex){
        if(this.board[moveIndex] ==""){           
            this.board[moveIndex] = this.currentplayer;
            if(!this.gameHasWinner()){
                this.currentplayer=(this.currentplayer==Player_one_sym ? Player_two_sym : Player_one_sym);
            }
            else{
                alert("The Player"+this.currentplayer+"is the winner");
                this.start()
            }
            console.log(this.board)
            this.updateText()
        }
    }
    gameHasWinner(){
        const winningCombos = [
            [0,1,2],[3,4,5],[6,7,8], //horiziontal-
            [0,3,6],[1,4,7],[2,5,8], //vertical ^1
            [0,4,8],[6,4,2]          //diagonal X           
        ];
        return winningCombos.find(combo =>{
            if(this.board[combo[0]]!=""&&this.board[combo[1]]!=""&&this.board[combo[2]]!=""&&
            this.board[combo[0]]==this.board[combo[1]]&&this.board[combo[1]]==this.board[combo[2]]){
                return true;
            }
            else{
                return false;
            }
        });
    }
    updateText() {
        let gameBoard = document.getElementById('gameBoard');
        let squareEle = gameBoard.childNodes;       
        squareEle.forEach((ele, index) => {
            if (ele.innerText !== this.board[index]) {
                ele.innerText = this.board[index];
            }
        });
    }
    
    
    drawBoard(){
        document.body.innerHTML="";
        let gameBoard= document.createElement("div");
        gameBoard.id='gameBoard';
        gameBoard.classList.add('board');
        gameBoard.addEventListener('click', this.handlesqrtClick.bind(this));
        this.board.forEach((square,index) => {
            let squareEle = document.createElement("div");
            squareEle.id = index;
            squareEle.classList.add('square');
            gameBoard.appendChild(squareEle);
        });
        document.body.appendChild(gameBoard);
    }

    start(){
        this.board =["","","",
                     "","","",
                     "","",""];
        this.currentplayer = Player_one_sym;
        this.drawBoard();       
    }
}

const game = new TicTacToe();
game.start();