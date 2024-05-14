import dataseif from "../../js/data.js";

function boxMenu(){


let rightbox = document.getElementById('rightbox')
let divBoxMenu = document.createElement('div')
rightbox.appendChild(divBoxMenu)

if (document.title == 'Glavnaya' || document.title == 'autor' ){
    let nfgnjgjkdfgkj = `
        <a href="https://www.wattpad.com/story/353406811?utm_source=android&utm_medium=org.telegram.messenger&utm_content=share_reading&wp_page=reading&wp_uname=Lim_Neyson">
        <div class="boxMenu">сборник стихов</div></a>
        <a href="https://t.me/Lima_Ogonyok">
        <div class="boxMenu">телеграм-канал</div></a>
        <a href="https://forms.yandex.ru/u/657c9449c417f317a89d34cb/">
        <div class="boxMenu">задать вопрос автору</div></a>
    `
    divBoxMenu.innerHTML = nfgnjgjkdfgkj
} 
else {
     let nfgnjgjkdfgkj = `
        <a href="${dataseif.testmass[document.title].link}">
        <div class="boxMenu">читать стихотворение</div></a>
        <a href="https://www.wattpad.com/story/353406811?utm_source=android&utm_medium=org.telegram.messenger&utm_content=share_reading&wp_page=reading&wp_uname=Lim_Neyson">
        <div class="boxMenu">сборник стихов</div></a>
        <a href="https://t.me/Lima_Ogonyok">
        <div class="boxMenu">телеграм-канал</div></a>
        <a href="https://forms.yandex.ru/u/657c9449c417f317a89d34cb/">
        <div class="boxMenu">задать вопрос автору</div></a>
        
    `
    divBoxMenu.innerHTML = nfgnjgjkdfgkj
}
}


export default boxMenu