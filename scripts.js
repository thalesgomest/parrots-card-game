

// !<-----Variáveis Globais------>

let card_number;
let moves = 0; // * Número de jogadas realizadas = Quantidade de vezes que o usuário virou uma carta no jogo.
let turnedCards = 0; // * Número de Cards virados.
let time = 0; // * Timer do game;

let imgs = ["/imgs/bobrossparrot.gif","/imgs/bobrossparrot.gif",
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

// todo front-face face = look-back face
// todo back-face face = look-front face

// !<------Função Virar/Desvirar Cards------>

function flipCard(back, front, cardElement) {

    moves = moves + 1;
    turnedCards = turnedCards + 1
    console.log(turnedCards)
    console.log(moves)
    cardElement.classList.add("selected")

    back.classList.remove("back-face")
    back.classList.add("front-face")

    front.classList.remove("front-face")
    front.classList.add("back-face")

    if (turnedCards === 2) {
        let screen_click = document.querySelector(".screen_click_on");
        screen_click.classList.remove("screen_click_on");
        screen_click.classList.add("screen_click_off");
    }

}
