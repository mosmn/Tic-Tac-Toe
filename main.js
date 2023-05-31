const gameBoard = (() => {
    let board = new Array(9);

    const getCell = (index) => board[index];

    const setCell = (index, sign) => {
        const cell = document.getElementById(index);
        cell.textContent = sign;
        board[index] = sign;
    }

    const resetBoard = () => {
        board = new Array(9);
    }

    return {getCell, setCell, resetBoard};
})();

const Player = (sign) => {
    this.sign = sign;
    const getSign = () => sign;

    const changeSign = () => {};
    
    return {getSign};
}

// const minmaxAiLogic = (() => {
// })();

const gameController = (() => {
})();

const displayController = (() => {
})();
