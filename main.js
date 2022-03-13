const burger = document.querySelector('.menu-burger__header');
const menu = document.querySelector('.menu-burger__header ul');
const input1 = document.querySelector('#input-days');

burger.onclick = function() {
    menu.classList.toggle('display');
};

const canvas = document.querySelector('.canvas-circle');
const canvas_no = document.querySelector('.canvas-circle-no');
const canvas_bnb = document.querySelector('.canvas-circle-amount-bnb');
const canvas_bnb_no = document.querySelector('.canvas-circle-no-amount-bnb');

var ctx = canvas.getContext('2d'); // оранжевый круг слева
var ctx2 = canvas_no.getContext('2d'); // перекрытие левого круга
var ctx_bnb = canvas_bnb.getContext('2d'); // оранжевый круг справа
var ctx_bnb_no = canvas_bnb_no.getContext('2d'); // перекрытие правого круга


//Процент заполнения по часовой с правого края

function circle(percent, sel) {
    sel.beginPath();  
    sel.lineWidth = 5;
    sel.arc(150, 76, 72, 0, (2*Math.PI*percent/100), false);
    sel.strokeStyle = '#FF3900';
    sel.stroke();
}

//Процент заполнения против часовой с правого края 
// (если закрашено на 20, то тут надо указать > 80 чтобы перекрыть закрашенную область)

function circle_no(percent, sel) {
    sel.lineWidth = 6;
    sel.beginPath();  
    sel.arc(150, 76, 72, 0, (2*Math.PI*percent/100), true);
    sel.strokeStyle = '#070707';
    sel.stroke();
}
