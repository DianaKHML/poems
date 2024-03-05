import json from './data.json' assert {type: 'json'};

// поиск элементов страницы
let testdiv = document.getElementById('testdiv');

// текстовая информация из файла json data 
let testdiv2 = document.createElement('p');
testdiv2.textContent = json.text;

// получение информации о кол-ве информации в объекте
let tes = Object.values(json.test).length;

// перебор и вывод информации из объекта в элемент меню
function fun (x){
    let i = 0;
    for (i; i<x; i++){
        let auto = document.createElement("p")
        testdiv.appendChild(auto)
        auto.textContent = Object.values(json.test)[i]
    }
};

fun(tes)

// вставка текстового параграфа
let test3 = document.createElement('p');
test3.textContent = json.text;
testdiv.appendChild(test3);


// установка адреса ссылки и текста
let test4 = document.createElement('a');
testdiv.appendChild(test4);
test4.textContent = '321';
test4.title = '123';
test4.href = 'https://mail.ru';

console.log(Object.values(json.test)[1]);

// создание и замена дочернего элемента
let nav = document.getElementById('navmenu');
let linav = document.createElement('li');
let linav2 = document.createElement('li');
linav.textContent = 'linav test';
linav2.textContent = 'linav test2';
nav.appendChild(linav);
nav.replaceChild(linav2, linav);

// Заголовок страницы - let title = document.title;

// удаление всех элементов в блоке
// nav.removeChild(nav.firstChild);


// поиск элемента кнопка и установка на нее действия функции
let knopa = document.getElementById('knopa');
function knop (){
    let a = linav2.textContent;
    console.log(a);
}
knopa.addEventListener('click', knop);

let class2 = document.getElementById('class');
let knopa2 = document.getElementById('knopa2');

// смена класса блока по нажатию кнопки
function class3 (){
    if (class2.className == 'test'){
        class2.className = 'test2';
    }
    else{
        class2.className = 'test'
    }
}
knopa2.addEventListener('click', class3);

// маленький калькулятор на + и -
let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let btnp = document.getElementById('btnp');
let btnm = document.getElementById('btnm');
let btnr = document.getElementById('btnr');
let result = document.getElementById('result');

let action = '+';

btnp.onclick = function(){
    action = '+'
};
btnm.onclick = function(){
    action = '-'
}

function schet () {
    if (action=='+'){
        let sum = Number(in1.value) + Number(in2.value);
        result.textContent = sum;
    }
    else{
        let sum = Number(in1.value) - Number(in2.value);
        result.textContent = sum;
    }
}

btnr.addEventListener('click', schet);
// ==========================

// установка адреса изображения 
let img1 = document.getElementById('img1');
img1.src = json.img;
img1.className = 'img1';



