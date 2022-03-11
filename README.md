
<p align="center">
  <img src="https://user-images.githubusercontent.com/97575616/152913843-f5236690-2e97-453c-9222-d17dbf982696.png">
</p>
 
<h1 align="center">Parrots Card Game</h1>

[![uses-javascript](https://user-images.githubusercontent.com/97575616/152987324-94b641c3-8073-4132-9950-7b7e56179080.svg)](https://www.javascript.com)
![uses-html5](https://user-images.githubusercontent.com/97575616/152926412-a8c6da7f-0d54-4253-a820-cb264210bbcf.svg)
![uses-css](https://user-images.githubusercontent.com/97575616/152917480-e46ad631-d96c-413d-8b62-25012c52c7fc.svg)
![built-with-git (1)](https://user-images.githubusercontent.com/97575616/152927121-6e37ae20-6f09-4f84-9bdf-889ef6ef5773.svg)
![built-with-visual-studio-code](https://user-images.githubusercontent.com/97575616/152921255-9e6ad64b-5a0d-4f28-a3d0-f8c6a2774d85.svg)
[![License: MIT](https://user-images.githubusercontent.com/97575616/152917040-e317b158-cad1-4f6c-8985-0a555783da7e.svg)](https://opensource.org/licenses/MIT)

## Table of contents
* [Project Description](#project-description)
* [Status](#status)
* [Requirements](#requirements)
* [Author](#author)


## Project Description
<p align="justify">This was my second JavaScript project implemented in the Driven Education bootcamp, where HTML is dynamically fed with JS. It was the implementation of the Parrot Card Game, a themed memory game with randomness, effects and transition, responsiveness and dancing parrots!</p>

### Status
![status-finished](https://user-images.githubusercontent.com/97575616/152926720-d042178b-24c0-4d6b-94fb-0ccbd3c082cc.svg)

## Requirements

* **GENERAL**
    - [x] Do not use any library to implement this project (jQuery, lodash, react, etc), or other languages that compile to JS (TypeScript, ELM, etc), only pure JavaScript.
    - [x] The project must be developed using Git and GitHub, in a public repository.
    - [x] **For each requirement implemented** make a *commit* with a descriptive message of what you have evolved.

* **LAYOUT**
    - [x] Apply layout for desktop and mobile

* **DISTRIBUTION OF CARDS**

    - [x] When to enter the game, the user will be asked how many cards he wants to play with (use `prompt`)
    - [x] The user can only enter even numbers in the `prompt`, from 4 to 14. Any number that escapes this rule should not be accepted. In the case of invalid numbers, the `prompt` must be repeated, until the user enters a valid number.
    - [x] After entering a valid number of cards, the game must insert the cards face down on the page so that the distribution is random

- **CLICK ON CARD**

    - [x] When clicking on a card, it must be turned over
    - [x] If it is the first card of the pair, it must remain face up until the user chooses the second card
    - [x] In case it is the second face up card, there are 2 situations:
    - If it is the same as the first card, the user got it right and both must now be face up until the end of the game
    - If it is a different card than the first card turned over, the user made a mistake. In this case, the game must **wait 1 second** and then turn the two cards face down again.

- **END OF THE GAME**

   - [x] When the user has finished turning over all the cards correctly, an `alert` should be displayed with the message **"You won in X moves!"** where X is the number of times the user turned a card in the game.

- **BONUS**

   - [x] Place a timer at the top right of the screen, counting how many seconds have passed since the start of the game. At the end, inform the number of seconds in the victory message.
   - [x] At the end of the game, ask with a `prompt` if the user would like to restart the game. If he answers yes, start the game again by asking the number of cards.

### Author
---
<div align="center">
<img width= 200px src="https://user-images.githubusercontent.com/97575616/157583676-812b2612-a644-4c18-be9c-61f633406f50.png" alt=""/>
  <p> <i><b>Thales Gomes Targino</i></b> </p>

<br /> [![Twitter Badge](https://img.shields.io/badge/-@thales_targino-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/thales_targino)](https://twitter.com/thales_targino) [![Linkedin Badge](https://img.shields.io/badge/-thalesgomest-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thales-gomes-targino/)](https://www.linkedin.com/in/thales-gomes-targino/) 
[![Gmail Badge](https://img.shields.io/badge/-thalestargino@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thalestargino@gmail.com)](mailto:thalestargino@gmail.com)
  
</div>
