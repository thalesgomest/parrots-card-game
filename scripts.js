// !<-----Variáveis Globais------>

let card_number;
let moves = 0; // * Número de jogadas realizadas = Quantidade de vezes que o usuário virou uma carta no jogo.
let turnedCards = 0; // * Número de Cards virados.
let time = 0; // * Timer do game;
let matchedCards = 0; // * Número de pares de cartas iguais -> Exemplo: Se meu jogo tem 4 cartas, no final matchedCards = 2. 
let interval = 0; // * Intervalo do timer
let play_again = ""; // *  Resposta do usuário sobre jogar de novo (Sim [S] ou Não [N])

// !<-----Array Imagens------>

const imgs = ["imgs/bobrossparrot.gif","imgs/bobrossparrot.gif",
            "imgs/explodyparrot.gif","imgs/explodyparrot.gif",
            "imgs/fiestaparrot.gif","imgs/fiestaparrot.gif",
            "imgs/metalparrot.gif","imgs/metalparrot.gif",
            "imgs/revertitparrot.gif","imgs/revertitparrot.gif",
            "imgs/tripletsparrot.gif","imgs/tripletsparrot.gif",
            "imgs/unicornparrot.gif","imgs/unicornparrot.gif"]


// !<------Confirmação de número de cards para jogar------>

function parrotGame() {

function cardsJogar() {
    card_number = parseInt(prompt("[EN-US]\nHow many cards do you like to play with?\nPress Enter a EVEN number between 4 and 14!\n\n[PT-BR]\nCom quantas cartas você deseja jogar?\nEntre com um número PAR entre 4 e 14!"))
}
cardsJogar();

while ((card_number%2!==0)||(card_number<4)||(card_number>14)) {
    alert("[EN-US]\nPlease, enter with a valid number!\nEnter with a EVEN number between 4 and 14!\n\n[PT-BR]\nPor favor, entre com um número válido\nEntre com um número PAR entre 4 e 14!");
    cardsJogar();
}
if ((card_number%2===0)&&(card_number>=4)&&(card_number<=14)) {
    alert("[EN-US]\nThe game will start!\n\n[PT-BR]\nO jogo irá começar!");
}

// !<------Embaralhamento dos Cards------>

function comparador() { 
	return Math.random() - 0.5; 
}

let imgsshuffled = imgs.slice(0,(card_number));
imgsshuffled.sort(comparador);

// !<------Estrututa dos cards que alimenta o HTML------>

for (let i = 0; i < card_number; i++) {
    let main = document.querySelector('main');
    main.innerHTML += `<div class="card" data-identifier="card" onclick="flipCard(this.querySelector('.back-face'),this.querySelector('.front-face'),this)">
                            <div class="back-face face" data-identifier="back-face">
                            <img src="imgs/front.png" alt="back_card">
                            </div>
                            <div class="front-face face" data-identifier="front-face">
                            <img src=${imgsshuffled[i]} alt="front_card">
                            </div>
                        </div>`
}

}

// !<------Função onclick cards------>

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

// !<------Função unflip cards diferentes----->

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

// !<------Chamando Função Timer------>

setTimeout(countTime,300);


// !<------Função Jogar Novamente------>

function playAgain() {
            play_again = prompt("[EN/US]\nWould you like to play again? [Y] or [N]:\n\n[PT-BR]\nVocê Gostaria de Jogar de novo? [S] ou [N]");
        }

// !<------Função Verificar Vitória------>

function checkVictory() {

    if ((parseInt(matchedCards)*2 === card_number)) {
        alert(`[EN/US]\nYou won with ${moves} moves and in ${document.querySelector(".timer").innerHTML} seconds!\n\n[PT-BR]\nVocê ganhou com ${moves} jogadas e em ${document.querySelector(".timer").innerHTML} segundos!`);
        
        playAgain();

        while ((play_again!=="Y")&&(play_again!=="y")&&(play_again!=="S")&&(play_again!=="s")&&(play_again!=="N")&&(play_again!=="n")) {
            alert("[EN/US]\nInvalid Character\n\n[PT-BR]\nCaractere inválido");
            playAgain();
        }
        if  ((play_again.toUpperCase() === "Y")||(play_again.toUpperCase() === "S") ) {
                let main = document.querySelector("main");
                main.innerHTML = "";
                card_number = 0;
                matchedCards = 0;
                moves = 0;
                document.querySelector(".timer").innerHTML = "0";
                clearInterval(interval);
                interval = 0;
                parrotGame();
                setTimeout(countTime,300);
            } else if (play_again.toUpperCase() === "N") {
                matchedCards = 0;
                alert("[EN/US]\nEnd Game! If you want to play again please reload the page.\n\n[PT-BR]\nFim de jogo! Se quiser jogar novamente, por favor recarregue a página.");
                clearInterval(interval);
            } 
    }
        
}


// !<------Chamando Função Jogo------>

parrotGame();