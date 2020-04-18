const ele_front = document.querySelector('.card__front');
const ele_back = document.querySelector('.card__back');

const btn_all = document.querySelectorAll('nav button');
const btn_reveal = document.querySelector('.reveal');
const btn_next = document.querySelector('.next');

let isFront = false;
let hasCards = true;


let data = [
    {
        "id": 1,
        "front": "<h1>front 1</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, perferendis quas eum quis eveniet aspernatur.</p><p> Iste voluptatum dolorem ea, ducimus perspiciatis aperiam ex qui ab sapiente facere nesciunt tempora!</p>",
        "back": "<h1>back 1</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, perferendis quas eum quis eveniet aspernatur.</p><p> Iste voluptatum dolorem ea, ducimus perspiciatis aperiam ex qui ab sapiente facere nesciunt tempora!</p>"
    },
    {
        "id": 2,
        "front": "<h1>front 2</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, perferendis quas eum quis eveniet aspernatur.</p><p> Iste voluptatum dolorem ea, ducimus perspiciatis aperiam ex qui ab sapiente facere nesciunt tempora!</p>",
        "back": "<h1>back 2</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, perferendis quas eum quis eveniet aspernatur.</p><p> Iste voluptatum dolorem ea, ducimus perspiciatis aperiam ex qui ab sapiente facere nesciunt tempora!</p>"
    },
    {
        "id": 3,
        "front": "<h1>front 3</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, perferendis quas eum quis eveniet aspernatur.</p><p> Iste voluptatum dolorem ea, ducimus perspiciatis aperiam ex qui ab sapiente facere nesciunt tempora!</p>",
        "back": "<h2>Answer 3</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci, perferendis quas eum quis eveniet aspernatur.</p><p> Iste voluptatum dolorem ea, ducimus perspiciatis aperiam ex qui ab sapiente facere nesciunt tempora!</p>"
    }
];

let numbCards;


function init() {
    btn_all.forEach(btn => btn.addEventListener('click', reveal));
    numbCards = data.length;
    getCard();
}

function getCard() {

    r = Math.floor(Math.random() * Math.floor(data.length));

    let front = data[r].front;
    let back = data[r].back;

    ele_front.innerHTML = front;
    ele_back.innerHTML = back;

    // remove current card
    data.splice(r, 1);

}

function reveal() {
    isFront = !isFront;
    if (!isFront) getCard()
    if (data.length == 0 && btn_reveal.disabled) hasCards = false;
    ele_front.classList.toggle('show');
    ele_back.classList.toggle('show');
    toggleBtn();
    // no more cards!
    if (!hasCards) endOfCards();
}

function toggleBtn() {
    btn_all.forEach(btn => btn.disabled ? btn.disabled = false : btn.disabled = true);
}

function endOfCards() {
    btn_next.disabled = true;
}

init();



