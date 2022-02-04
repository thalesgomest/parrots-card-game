

// !<-----Variáveis Globais------>

let card_number;
let moves = 0; // * Número de jogadas realizadas = Quantidade de vezes que o usuário virou uma carta no jogo.
let turnedCards = 0; // * Número de Cards virados.
let time = 0; // * Timer do game;
let matchedCards = 0;
let interval = null;

const imgs = ["/imgs/bobrossparrot.gif","/imgs/bobrossparrot.gif",
            "/imgs/explodyparrot.gif","/imgs/explodyparrot.gif",
            "/imgs/fiestaparrot.gif","/imgs/fiestaparrot.gif",
            "/imgs/metalparrot.gif","/imgs/metalparrot.gif",
            "/imgs/revertitparrot.gif","/imgs/revertitparrot.gif",
            "/imgs/tripletsparrot.gif","/imgs/tripletsparrot.gif",
            "/imgs/unicornparrot.gif","/imgs/unicornparrot.gif"]


// !<------Confirmação de número de cards para jogar------>

function cardsJogar() {
    card_number = parseInt(prompt("How many cards do you wanna play?\nEnter with a EVEN number between 4 and 14!"))
}
cardsJogar();

while ((card_number%2!==0)||(card_number<4)||(card_number>14)) {
    alert("Please, enter with a valid number!\nEnter with a EVEN number between 4 and 14!");
    cardsJogar();
}
if ((card_number%2===0)&&(card_number>=4)&&(card_number<=14)) {
    alert("The game will start!");
}

// !<------Embaralhar os Cards------>

function comparador() { 
	return Math.random() - 0.5; 
}

let imgsshuffled = imgs.slice(0,(card_number));
imgsshuffled.sort(comparador);

// !<------Estrututa HTML dos Cards------>

for (let i = 0; i < card_number; i++) {
    let main = document.querySelector('main');
    main.innerHTML += `<div class="card" onclick="flipCard(this.querySelector('.back-face'),this.querySelector('.front-face'),this)">
                            <div class="back-face face">
                            <img src="imgs/front.png" alt="back_card">
                            </div>
                            <div class="front-face face">
                            <img src=${imgsshuffled[i]} alt="front_card">
                            </div>
                        </div>`
}

// !<------Função Virar/Desvirar Cards------>

function flipCard(back, front, cardElement) {

    if (cardElement.classList.contains("selected") || cardElement.classList.contains("match_cards")) {
        return;
    }

    moves = moves + 1;
    turnedCards = turnedCards + 1

    cardElement.classList.add("selected")

    back.classList.remove("back-face")
    back.classList.add("front-face")

    front.classList.remove("front-face")
    front.classList.add("back-face")

    if (turnedCards == 2) {
        let screen_click = document.querySelector(".screen_click_on");
        screen_click.classList.remove("screen_click_on");
        screen_click.classList.add("screen_click_off");

        let selectedCards = document.querySelectorAll(".selected");
        let card1 = selectedCards[0];
        let card2 = selectedCards[1];

        if (card1.innerHTML === card2.innerHTML) {
            card1.classList.add("match_cards");
            card2.classList.add("match_cards");

            turnedCards = 0;

            screen_click.classList.toggle("screen_click_on");
            screen_click.classList.toggle("screen_click_off");

            card1.classList.remove("selected");
            card2.classList.remove("selected");

            matchedCards =  matchedCards + 1;

            setTimeout(checkVictory,2000);

            return;
        }
        
        turnedCards = 0;

        unflipCard()
        unflipCard()

        setTimeout(function () {
            screen_click.classList.toggle("screen_click_on")
            screen_click.classList.toggle("screen_click_off")
        }, 1000)

    }

}

// !<------Função Desvirar 2 Cards já viradas------>

function unflipCard() {

    let backCard = document.querySelector(".selected .back-face");
    let frontCard = document.querySelector(".selected .front-face");
    let card = document.querySelector(".selected")
    card.classList.remove("selected");

    setTimeout(function() {

        backCard.classList.add("front-face");
        backCard.classList.remove("back-face");
        
        frontCard.classList.add("back-face");
        frontCard.classList.remove("front-face");

    }, 1000)
}


// !<------Função Timer------>

function countTime() {
    const timer = document.querySelector(".timer");
    function plusCount() {
        if(matchedCards*2 === card_number) {
        clearInterval(interval);
    } else {
        timer.innerHTML = parseInt(timer.innerHTML) + 1; 
    }
}
    interval = setInterval(plusCount, 1000);
} 

countTime();



// function checkVictory() {
//     if ((parseInt(matchedCards)*2 === card_number)&&card_number!==0) {
//         alert(`You win with ${moves} moves and in ${document.querySelector(".timer").innerHTML} seconds!`);
//         let play_again = prompt("Do you like play again? [Y] or [N]: ")
//         if  (play_again.toUpperCase() === "Y" ) {
//             let main = document.querySelector("main");
//             main.innerHTML = "";
//             document.querySelector(".timer").innerHTML = "0";
//             console.log(play_again)
//             //Chamar o início do código again!
//         }
//     }
// }