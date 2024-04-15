import dataseif from "./js/data.js";

let menu2 = document.getElementById('menu2')
let divright = document.getElementById('divright')
let stihcontent = document.getElementById('stihcontent')
let autorcontent = document.getElementById('autorcontent')


// Установка меню на каждой странице сайта и установка класса страницы для ...
function menu (){

    let idosnova = document.getElementById('osnova')
    idosnova.className = dataseif.menu3[document.title].class

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


    let stranica = ''
    if(document.title == 'Glavnaya'){

        let li = document.createElement('li')
        let a = document.createElement('a')
        menu.appendChild(li)
        li.appendChild(a)
        a.textContent = dataseif.menu3.Glavnaya.menutext
        a.href = dataseif.menu3.Glavnaya.menuurl

        stranica = './page/'

        for (let i=1; i<Object.keys(dataseif.menu3).length; i++){
        let jvhb = Object.keys(dataseif.menu3)[i]  
        let li = document.createElement('li')
        let a = document.createElement('a')
        menu.appendChild(li)
        li.appendChild(a)
        a.textContent = dataseif.menu3[jvhb].menutext
        a.href = stranica + dataseif.menu3[jvhb].menuurl
    }
    }
    else{
        let li = document.createElement('li')
        let a = document.createElement('a')
        menu.appendChild(li)
        li.appendChild(a)
        a.textContent = dataseif.menu3.Glavnaya.menutext
        a.href = '../' + dataseif.menu3.Glavnaya.menuurl

        stranica = './'

        for (let i=1; i<Object.keys(dataseif.menu3).length; i++){
        let jvhb = Object.keys(dataseif.menu3)[i]
        let li = document.createElement('li')
        let a = document.createElement('a')
        menu.appendChild(li)
        li.appendChild(a)
        a.textContent = dataseif.menu3[jvhb].menutext
        a.href = stranica + dataseif.menu3[jvhb].menuurl
    }
    }
   
}
//====================================


/*  Создаются заголвки с параграфами им присваиваются классы
    В параграфы по имени класса добавляются данные из объекта testmass
*/
function stihtext (){
    let img2 = document.createElement('img')
    let img3 = document.createElement('img')
    img3.src = '../images/1234.png'
    img2.src = '../images/123.png'
    img2.className = 'img2'
    img3.className = 'img2'
    stihcontent.appendChild(img2)
    let img = document.createElement('img')
    img.src = dataseif.testmass[document.title].img
    img.className = 'img'
    stihcontent.appendChild(img)
    stihcontent.appendChild(img3)
    let zag = document.createElement('h1')
    zag.textContent = dataseif.testmass[document.title].zagolovok
    stihcontent.appendChild(zag)

    for (let i = 0; i<dataseif.stihzaglav1.length; i++){
        let v = document.createElement('h2')
        v.textContent = dataseif.stihzaglav1[i].zag
        v.className = dataseif.stihzaglav1[i].class
        stihcontent.appendChild(v)
        let p = document.createElement('p')
        p.textContent = dataseif.testmass[document.title][v.className]
        let hr = document.createElement('hr')
        stihcontent.appendChild(p)
        stihcontent.appendChild(hr)
    }
}

//добавление данных на страницу автора
function autortext (){
    for (let i = 0; i<dataseif.autorinfo.length; i++){
        let v = document.createElement('h2')
        let p = document.createElement('p')
        let hr = document.createElement('hr')
        v.textContent = dataseif.autorinfo[i].h2
        autorcontent.appendChild(v)
        p.textContent = dataseif.autorinfo[i].p
        autorcontent.appendChild(p)
        autorcontent.appendChild(hr)
    }
}


//Сетка на главной странице
function setka(){
    let divsetka = document.getElementById('setka')
    let divzagolovok = Object.keys(dataseif.testmass)
    console.log(`./page/${divzagolovok[0]}.html`)

    for(let i = 0; i<Object.keys(dataseif.testmass).length; i++){
        let setdiv = document.createElement('div')
        let seta = document.createElement('a')
        let setimg = document.createElement('img')
        let setp = document.createElement('p')
        setdiv.className = 'kartinka'
        seta.href = `./page/${divzagolovok[i]}.html`
        setimg.src = dataseif.testmass[divzagolovok[i]].img
        setp.textContent = dataseif.testmass[divzagolovok[i]].zagolovok
        seta.appendChild(setimg)
        setdiv.appendChild(seta)
        setdiv.appendChild(setp)
        divsetka.appendChild(setdiv)
    }
}



// Выполнение функций в зависимости от страницы
if (document.title == 'Glavnaya'){
    menu()
    setka()
}
else if (document.title == 'autor'){
    menu()
    autortext()
}
else if (document.title == 'test'){
    
}
else {
    menu()
    stihtext()
}


