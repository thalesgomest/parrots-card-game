<img src="https://user-images.githubusercontent.com/97575616/192651566-b45c213a-5975-48aa-8c71-1d36fee27f03.png">

## 📑 Contents

-   [Project Description](#-project-description)
-   [Status of work](#-status-of-work)
-   [Features](#✅-features)
-   [Requirements](#📍-requirements)
-   [Build with](#%EF%B8%8F-build-with)
-   [Contact](#-contact)

## 📌 Project Description

<p align="justify">This was my second JavaScript project implemented in the Driven Education bootcamp, where HTML is dynamically fed with JS. It was the implementation of the Parrot Card Game, a themed memory game with randomness, effects and transition, responsiveness and dancing parrots!</p>

## 🚧 Status of work

![status](https://img.shields.io/badge/Status-Finished-00920F?style=plastic)<br>

<!-- ![status](https://img.shields.io/badge/Status-Progress-FFE70C?style=plastic) -->

## ✅ Features

-   [x] User can choose the number of pair cards
-   [x] Cards put randomly on the table
-   [x] CSS animations for turning the cards
-   [x] Time counter
-   [x] You can restart the game after finishing it, choosing another number of pairs

## 📍 Requirements

-   **GENERAL**

    -   [x] Do not use any library to implement this project (jQuery, lodash, react, etc), or other languages that compile to JS (TypeScript, ELM, etc), only pure JavaScript.
    -   [x] The project must be developed using Git and GitHub, in a public repository.
    -   [x] **For each requirement implemented** make a _commit_ with a descriptive message of what you have evolved.

-   **LAYOUT**

    -   [x] Apply layout for desktop and mobile

-   **DISTRIBUTION OF CARDS**

    -   [x] When to enter the game, the user will be asked how many cards he wants to play with (use `prompt`)
    -   [x] The user can only enter even numbers in the `prompt`, from 4 to 14. Any number that escapes this rule should not be accepted. In the case of invalid numbers, the `prompt` must be repeated, until the user enters a valid number.
    -   [x] After entering a valid number of cards, the game must insert the cards face down on the page so that the distribution is random

*   **CLICK ON CARD**

    -   [x] When clicking on a card, it must be turned over
    -   [x] If it is the first card of the pair, it must remain face up until the user chooses the second card
    -   [x] In case it is the second face up card, there are 2 situations:
    -   If it is the same as the first card, the user got it right and both must now be face up until the end of the game
    -   If it is a different card than the first card turned over, the user made a mistake. In this case, the game must **wait 1 second** and then turn the two cards face down again.

*   **END OF THE GAME**

    -   [x] When the user has finished turning over all the cards correctly, an `alert` should be displayed with the message **"You won in X moves!"** where X is the number of times the user turned a card in the game.

*   **BONUS**

    -   [x] Place a timer at the top right of the screen, counting how many seconds have passed since the start of the game. At the end, inform the number of seconds in the victory message.
    -   [x] At the end of the game, ask with a `prompt` if the user would like to restart the game. If he answers yes, start the game again by asking the number of cards.

## 🛠️ Build with

[![uses-javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black)](https://www.javascript.com)
![uses-html5](https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white)
![uses-css](https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white)
![built-with-git](https://img.shields.io/badge/Git-E34F26?style=plastic&logo=git&logoColor=white)
![built-with-vsc](https://img.shields.io/badge/Visual%20Studio%20Code-blue?style=plastic&logo=visualstudiocode)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=plastic)](https://opensource.org/licenses/MIT)

## 📫 Contact

<div>
  <a href = "mailto:thalestargino@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=plastic&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/thalesgomest/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=plastic&logo=linkedin&logoColor=white" target="_blank"></a>

##
