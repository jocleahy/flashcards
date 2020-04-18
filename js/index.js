import { data } from './data.js';

const ele_front = document.querySelector('.card__front');
const ele_back = document.querySelector('.card__back');
const ele_bar = document.querySelector('.progress__inner');

const btn_all = document.querySelectorAll('nav button');
const btn_reveal = document.querySelector('.reveal');
const btn_next = document.querySelector('.next');

let isFront = false;
let hasCards = true;
let numCards;


function init() {
    btn_all.forEach(btn => btn.addEventListener('click', reveal));
    numCards = data.length;
    getCard();
}

function getCard() {


    let r = Math.floor(Math.random() * Math.floor(data.length));

    let front = data[r].front;
    let back = data[r].back;

    ele_front.innerHTML = front;
    ele_back.innerHTML = back;

    // remove current card
    data.splice(r, 1);

    upDateProgress(numCards - data.length)
}

function upDateProgress(qnum) {
    ele_bar.style.width = ((qnum / numCards) * 100) + '%';
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



