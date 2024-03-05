import dataseif from "./js/data.js";

let menu2 = document.getElementById('menu2')
let divright = document.getElementById('divright')

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
menu()