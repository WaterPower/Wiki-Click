import { language_liste_all } from "./language.js";
import { reference_liste_all } from "./reference.js"

const click_bt = document.getElementById("click_bt")
const click_nb = document.getElementById("click_nb")
let wikiLinks = document.querySelectorAll(".wiki_link");
let wikilinksNoActivTotal = wikiLinks.length





const storageTest = document.getElementById('storage_test')
const storageRetour = document.getElementById('storage_retour')
const storageClear = document.getElementById('storage_clear')


storageTest.addEventListener('click', function(){
    /*document.cookie = "username=John Doe; expires=Thu, 18 Dec 2028 12:00:00 UTC";
    console.log('llfl')*/
    let testa = document.getElementsByClassName('cursors')
    localStorage.setItem(10, testa)
})

storageRetour.addEventListener('click', function(){
    //let cookieValue = document.cookie
    let test = localStorage.getItem(10)
    console.log(test); // Output: 101
})

storageClear.addEventListener('click', function(){
    //let cookieValue = document.cookie
    localStorage.clear()
})

const listeContributors = document.querySelectorAll('.NOC_button');

listeContributors.forEach(function (element) {
    // Use a unique identifier for each contributor, for example, class name
    const contributorKey = element.classList[1]

    // Retrieve the stored count from local storage or default to 0
    element.nb = parseInt(localStorage.getItem(contributorKey)) || 0

    element.addEventListener("click", function () {
        let selectSecondClass = element.classList[1]
        let addContributor = document.getElementById(selectSecondClass)

        if (element.nb < 10) {
            element.nb = element.nb + 1
            addContributor.innerText = element.nb

            // Save the updated count in local storage
            localStorage.setItem(contributorKey, element.nb)
        }
    });
});


listeContributors.forEach(function (element) {
    // Use a unique identifier for each contributor, for example, class name
    const contributorKey = element.classList[1]

    // Retrieve the stored count from local storage or default to 0
    element.nb = parseInt(localStorage.getItem(contributorKey)) || 0
    console.log("tes")

    let selectSecondClass = element.classList[1]
    let addContributor = document.getElementById(selectSecondClass)
    if (element.nb > 0){
        addContributor.innerText = element.nb
    }

})


const reference_add = document.getElementById('references_add_bt')
const referenceOl= document.getElementById('references_ol')
let reference = 0
reference_add.addEventListener('click',function(){
    if (reference<22) {
        referenceOl.innerHTML += `<li class="reference_liste">${reference_liste_all[reference]}</li>`
        reference++
        wikiLinks = document.querySelectorAll(".wiki_link")
        wikilinksNoActivTotal++
        wikiLinks.forEach(function(element) {
            if (!element.hasClickListener) {
                element.addEventListener("click", function() {
                if (this.classList.contains("wiki_link")) {
                    this.classList.remove("wiki_link")
                    this.classList.add("wiki_link_clicked")
                    wiki_article = wiki_article + 10
                    wikilinksNoActivTotal = wikilinksNoActivTotal - 1
                    displayNb();
                }
            })
            element.hasClickListener = true
            }
        })
    }
})

setInterval(dayChange,1000)
let dayCount = 0

function dayChange() {
    if (dayCount === 0) {NewsHolidaysRefresh()}
    let daySelector = document.querySelectorAll(".LDS"+dayCount)
    daySelector.forEach(function(element){
        element.style.border = "1px solid rgb(162,169,177)"
    })
    dayCount++
    
    daySelector = document.querySelectorAll(".LDS"+dayCount)
    daySelector.forEach(function(element){
        element.style.border = "2px solid black"
    })
    if (dayCount === 8) {dayCount=0}
}


function NewsHolidaysRefresh() {

const news = document.querySelectorAll('.news')

news.forEach(function(cell){
    if (Math.random()*100 < 7){
        cell.innerText = "yes"
    }
    else {cell.innerText = "no"}
})

const holiday = document.querySelectorAll('.holiday')

holiday.forEach(function(cell){
    if (Math.random()*100 < 25){
        cell.innerText = "yes"
    }
    else {cell.innerText = "no"}
})
}

const daySelector = document.querySelectorAll(".day_selector");
let daySelectorCounter = 0

daySelector.forEach(function(element) {
    element.addEventListener("click", function() {
        if (daySelectorCounter < 1) {
            daySelectorCounter++
            document.querySelectorAll("."+element.classList[1]).forEach(function(elem){
                elem.style.backgroundColor = 'rgb(188, 202, 230)'
            })
        }
        else if (element.style.backgroundColor === 'rgb(188, 202, 230)'){
            daySelectorCounter = 0
            document.querySelectorAll("."+element.classList[1]).forEach(function(elem){
                elem.style.backgroundColor = "#ebebeb"
            })
            element.style.backgroundColor = "#d6d3d3"
        }
    });
});

const calenderContainer = document.getElementById('calender_container')
const calenderClick = document.getElementById('calender_click')

calenderClick.addEventListener('click', function(){
    if (calenderContainer.style.display === "table"){
        calenderContainer.style.display = "none"
    }
    else {calenderContainer.style.display = "table"}
    
})

const NocContainer = document.getElementById('NOC_container')
const NocClick = document.getElementById('NOC_click')

NocClick.addEventListener('click', function(){
    if (NocContainer.style.display === "block"){
        NocContainer.style.display = "none"
    }
    else {NocContainer.style.display = "block"}
    
})

const NouContainer = document.getElementById('NOU_container')
const NouClick = document.getElementById('NOU_click')

NouClick.addEventListener('click', function(){
    if (NouContainer.style.display === "block"){
        NouContainer.style.display = "none"
    }
    else {NouContainer.style.display = "block"}
    
})


const languageDropdown = document.getElementById('language_dropdown')
const languageDropdownContainer = document.getElementById('language_dropdown_container')
const languageAdd = document.getElementById('language_add')
const listeLanguage = document.getElementById('liste_language')
const language_v = document.getElementById('language_v')
let Language_nb = 1
let language_click_visibilite = true

languageDropdown.addEventListener('click', function(){
    if (languageDropdownContainer.style.display === "block" && language_click_visibilite === false) {
        languageDropdownContainer.style.display = "none"
    }
    else {languageDropdownContainer.style.display = "block"
    language_click_visibilite = false}
})

languageAdd.addEventListener('click',function(){
    listeLanguage.innerHTML += `<li>${language_liste_all[Language_nb]}</li>`
    languageDropdownContainer.style.display = "block"
    language_click_visibilite = true
    Language_nb++
    language_v.innerText = Language_nb + ' languages ⮛'
})

//const cursorArray = [cursor]
let cursor_vitesse = 10
let wiki_article = 0


click_bt.addEventListener('click',function(){
    wiki_article++
    displayNb()
})

// Add click event listeners to each element

wikiLinks.forEach(function(element) {
    if (!element.hasClickListener) {
        element.addEventListener("click", function() {
        if (this.classList.contains("wiki_link")) {
            this.classList.remove("wiki_link")
            this.classList.add("wiki_link_clicked")
            wiki_article = wiki_article + 10
            wikilinksNoActivTotal = wikilinksNoActivTotal - 1
            displayNb();
        }
    });
    element.hasClickListener = true
    }
})

function displayNb() {
    click_nb.textContent = wiki_article
}

const buyCrusor = document.getElementById('buy_cursor')
const moreCursor = document.getElementById('more_cursor')
const cursorVitesse = document.getElementById('cursor_vitesse')

let cursorData = 0

buyCrusor.addEventListener('click', addCursor);

function addCursor(){
    const newCursor = document.createElement('img')
    newCursor.src = 'images/cursosCookie.png'
    newCursor.style.transform = `rotate(${Math.random() * 320}deg)`
    newCursor.classList.add('cursors')
    moreCursor.appendChild(newCursor)
    cursorData++
    localStorage.setItem("cursorNB", cursorData)
    newCursor.rotation = Math.random() * 360
}

setInterval(functRotate, cursor_vitesse)

function functRotate() {
    const cursors = document.querySelectorAll('.cursors')

    cursors.forEach(cursor => {
        cursor.rotation++
        if (cursor.rotation === 360) {
            cursor.rotation = 0
        }
        cursor.style.transform = 'rotate(' + cursor.rotation + 'deg)'
    })
}

cursorVitesse.addEventListener('click', function() {
    if (cursor_vitesse > 4){
        cursor_vitesse = cursor_vitesse-0.5
        }
})

document.addEventListener("DOMContentLoaded", initCursors)

function initCursors() {
    const cursort = localStorage.getItem("cursorNB")

    for (let i = 0; i < cursort; i++){
        addCursor()
    }
}

