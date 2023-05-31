// For controlling the board cells
const gameBoard = (() => {
    let board = new Array(9);

    const setElement = (index, sign) => {
        board[index] = sign;
    }
    return {setElement};
})();

const Player =  (() => {
    let value = document.getElementById("menu").value;
    
    const getSign = () => value;

    const setSign = (value) => {
        sign = value;
    }
    return {getSign, setSign};
})();

const minmaxAiLogic = (() => {
})();

// For determining the game logic
const gameController = (() => {
})();

// For DOM manipulation
const displayController = (() => {
    let cells = document.querySelectorAll(".cell");

    const render = () => {
        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                cell.textContent = Player.getSign();
            });
        });
    }
    
    cells.addEventListener("click", () => {
        render();
    });
    return {render};
})();
