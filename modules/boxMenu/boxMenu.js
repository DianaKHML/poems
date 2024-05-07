import dataseif from "../../js/data.js";

function boxMenu(){


let rightbox = document.getElementById('rightbox')
let divBoxMenu = document.createElement('div')
rightbox.appendChild(divBoxMenu)

if (document.title == 'Glavnaya' || document.title == 'autor' ){
    let nfgnjgjkdfgkj = `
        <div class="boxMenu">
        <a href="https://www.wattpad.com/story/353406811?utm_source=android&utm_medium=org.telegram.messenger&utm_content=share_reading&wp_page=reading&wp_uname=Lim_Neyson">сборник стихов</a>
        </div>
        <div class="boxMenu">
        <a href="https://t.me/Lima_Ogonyok">телеграм-канал</a>
        </div>
        <div class="boxMenu">
        <a href="https://forms.yandex.ru/u/657c9449c417f317a89d34cb/">задать вопрос автору</a>
        </div>
    `
    divBoxMenu.innerHTML = nfgnjgjkdfgkj
} 
else {
     let nfgnjgjkdfgkj = `
        <div class="boxMenu">
        <a href="${dataseif.testmass[document.title].link}">читать стихотворение</a>
        </div>
        <div class="boxMenu">
        <a href="https://www.wattpad.com/story/353406811?utm_source=android&utm_medium=org.telegram.messenger&utm_content=share_reading&wp_page=reading&wp_uname=Lim_Neyson">сборник стихов</a>
        </div>
        <div class="boxMenu">
        <a href="https://t.me/Lima_Ogonyok">телеграм-канал</a>
        </div>
        <div class="boxMenu">
        <a href="https://forms.yandex.ru/u/657c9449c417f317a89d34cb/">задать вопрос автору</a>
        </div>
    `
    divBoxMenu.innerHTML = nfgnjgjkdfgkj
}
}


export default boxMenu