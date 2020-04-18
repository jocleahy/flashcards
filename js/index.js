const ele_front = document.querySelector('.card__front');
const ele_back = document.querySelector('.card__back');

const btn_reveal = document.querySelector('.reveal');


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
    numbCards = data.length;
    getCard();
}

function getCard() {

    r = Math.floor(Math.random() * Math.floor(data.length));

    let front = data[r].front;
    let back = data[r].back;

    ele_front.innerHTML = front;
    ele_back.innerHTML = back;
}

function reveal() {
    ele_front.classList.toggle('show');
    ele_back.classList.toggle('show');
}

init();

btn_reveal.addEventListener('click', reveal)