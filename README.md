# Tic-Tac-Toe

## Live Demo
Check out the live demo [here](link-to-live-demo).

## Screenshots

tbd

## Tech Stack
- JavaScript
- HTML
- CSS

## Approach
The approach for this project involved the following steps:

1. **Project Setup**: Set up the project by creating HTML, CSS, and JavaScript files. Initialize a Git repository to track the project's progress.

2. **Gameboard Object**: Create a Gameboard object to represent the Tic Tac Toe gameboard. The gameboard will be stored as an array inside the object.

3. **Player Objects**: Implement player objects to store player information. Each player will be represented by an object with properties such as name and marker. Utilize factories to create multiple player objects.

4. **Render Gameboard**: Develop a JavaScript function that renders the contents of the gameboard array to the webpage. Initially, manually fill the array with "X" and "O" values.

5. **Add Marks to the Board**: Implement functions that allow players to add their marks to a specific spot on the gameboard. Connect these functions to the DOM, enabling players to click on the gameboard to place their markers. Ensure that players cannot play in spots that are already taken.

6. **Code Organization**: Strive to minimize the use of global code. Use modules or factories to encapsulate logic and separate concerns. Place each functionality in logical locations within the game, player, or gameboard objects.

7. **Check Game Over**: Build the logic to check for game over conditions. Implement checks for winning conditions, such as three-in-a-row, and for a tie game.

8. **Interface Improvements**: Enhance the user interface by allowing players to enter their names. Include a button to start or restart the game. Add a display element to congratulate the winning player.

9. **Optional: AI Implementation**: If you want an additional challenge, create an AI opponent for players to play against the computer. Start with a random move for the computer and then work on developing a smarter AI using algorithms like minimax to create an unbeatable opponent.

## Challenges
The project presented several challenges that required problem-solving and critical thinking:

- Implementing the game logic to check for winning conditions and a tie game.
- Organizing and structuring the code in a readable and maintainable way.
- Managing the state of the game and updating the UI accordingly.
- Handling player inputs and ensuring they cannot play in occupied spots.

## Future Features

- Multiplayer support: Enable players to compete against each other online.
- Difficulty levels for the AI opponent: Implement different levels of AI difficulty to provide varying degrees of challenge.
- Interactive game history: Allow players to view and replay previous games from the history.
- Customizable game settings: Provide options to adjust the game settings, such as board size or winning conditions.