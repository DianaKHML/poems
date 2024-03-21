import dataseif from "./js/data.js";

let menu2 = document.getElementById('menu2')
let divright = document.getElementById('divright')
let stihcontent = document.getElementById('stihcontent')


//добавление данных на страницу со стихом
function stihtext (){
    for (let i = 0; i<dataseif.stihzaglav.length; i++){
        let v = document.createElement('h2')
        v.textContent = dataseif.stihzaglav[i]
        stihcontent.appendChild(v)
        let p = document.createElement('p')
        p.textContent = dataseif.stihinfo[stihcontent.className][i]
        let hr = document.createElement('hr')
        stihcontent.appendChild(p)
        stihcontent.appendChild(hr)
    }
}



// Меню для главной страницы
function menu (){
    let inp = document.createElement('input')
    inp.type = 'checkbox'
    inp.id = 'active'

    let label = document.createElement('label')
    label.htmlFor = 'active'
    label.className = 'menu-btn'
    label.textContent = 'Menu'

    let menudiv = document.createElement('div')
    menudiv.className = 'wrapper'

    let menuul = document.createElement('ul')
    menuul.id = 'menu'
    menudiv.appendChild(menuul)

    divright.appendChild(inp)
    divright.appendChild(label)
    divright.appendChild(menudiv)

    let menu = document.getElementById('menu')

    for (let i=0; i<dataseif.menu.length; i++){
        let z = 0
        let li = document.createElement('li')
        let a = document.createElement('a')
        menu.appendChild(li)
        li.appendChild(a)
        a.textContent = dataseif.menu[i][z]
        z++
        a.href = dataseif.menu[i][z]
    }
}
// Меню для остальных страниц
function menupage (){
    let inp = document.createElement('input')
    inp.type = 'checkbox'
    inp.id = 'active'

    let label = document.createElement('label')
    label.htmlFor = 'active'
    label.className = 'menu-btn'
    label.textContent = 'Menu'

    let menudiv = document.createElement('div')
    menudiv.className = 'wrapper'

    let menuul = document.createElement('ul')
    menuul.id = 'menu'
    menudiv.appendChild(menuul)

    divright.appendChild(inp)
    divright.appendChild(label)
    divright.appendChild(menudiv)

    let menu = document.getElementById('menu')

    for (let i=0; i<dataseif.menu2.length; i++){
        let z = 0
        let li = document.createElement('li')
        let a = document.createElement('a')
        menu.appendChild(li)
        li.appendChild(a)
        a.textContent = dataseif.menu2[i][z]
        z++
        a.href = dataseif.menu2[i][z]
    }
}
// Выбор меню в зависимости от открытой страницы
if (document.title == 'Главная'){
    menu()
}
else if (document.title == 'Автор'){
    menupage()
}
else {
    menupage()
    stihtext()
}



