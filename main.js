const gameBoard = (() => {
    let board = new Array(9);

    const getCell = (index) => board[index];

    const setCell = (index, sign) => {
        const cell = document.getElementById(index);
        cell.textContent = sign;
        board[index] = sign;
    }

    const getBoard = () => board;

    const resetBoard = () => {
        board = new Array(9);
    }

    return {
        getCell,
        setCell,
        getBoard,
        resetBoard
    };
})();

const Player = (sign) => {
    this.sign = sign;
    const getSign = () => sign;

    const changeSign = (newSign) => {
        sign = newSign;
    };

    return {
        getSign,
        changeSign
    };
}
// const minmaxAiLogic = (() => {
// })();

const gameController = (() => {
    const player1 = Player('X');
    const player2 = Player('O');
    let currentPlayer = player1;

    const getplayer1 = () => player1;
    const getplayer2 = () => player2;
    const getcurrentPlayer = () => currentPlayer;

    const switchPlayer = () => {
        if (currentPlayer === player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }

    const checkWin = (board) => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];

        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i];
            if (board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    const checkTie = (board) => {
        return board.every(cell => cell !== undefined);
    }

    const play = (cell) => {
        const board = gameBoard.getBoard();
        if (board[cell] === undefined) {
            gameBoard.setCell(cell, currentPlayer.getSign());
            const winner = checkWin(board);
            if (winner) {
                displayController.displayMessage(`${winner} wins!`);
                return;
            }
            if (checkTie(board)) {
                displayController.displayMessage('Tie!');
                return;
            }
        }
    }

    return {
        play,
        switchPlayer,
        getplayer1,
        getplayer2,
        getcurrentPlayer
    };
})();

const displayController = (() => {
    const cells = document.querySelectorAll('.cell');
    const message = document.querySelector('.message');
    const resetBtn = document.querySelector('#restart');
    const signChoice = document.querySelector('#menu');

    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            const cell = e.target.id;
            gameController.play(cell);
            gameController.switchPlayer();
        });
    });

    const displayMessage = (msg) => {
        message.textContent = msg;
    }

    const resetMessage = () => {
        message.textContent = '';
    }

    const resetBoard = () => {
        cells.forEach(cell => {
            cell.textContent = '';
        });
    }

    const reset = () => {
        resetMessage();
        resetBoard();
        gameBoard.resetBoard();
    }

    resetBtn.addEventListener('click', reset);

    signChoice.addEventListener('change', (e) => {
        const sign = e.target.value;
        gameController.getcurrentPlayer().changeSign(sign);
        reset();
    });

    return {
        displayMessage,
        resetMessage,
        resetBoard,
    };
})();
