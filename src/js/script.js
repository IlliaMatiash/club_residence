// for use webp in css like backround
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
// End for use webp in css like backround


// Slider

slider('.main', '.slide');
slider('.residence', '.slide');
slider('.club', '.slide');
slider('.layout', '.slide');
slider('.document', '.slide');





function slider(section, div){
const slides = document.querySelectorAll(`${section} ${div}`);
const indicator = document.querySelector(`${section} .indicator`);
const prev = document.querySelector(`${section} .prev`);
const next = document.querySelector(`${section} .next`);

let index = 0;

prev.addEventListener('click', function(){
    prevSlide();
    updateCircleIndicator();
    // resetTimer();
});
next.addEventListener('click', function(){
    nextSlide();
    updateCircleIndicator();
    // resetTimer();
});

circleIndicator(slides, indicator);

function indicateSlide(){
    let indicatorDiv = document.querySelectorAll(`${section} .indicator div`);
    for(let i = 0; i < indicatorDiv.length; i++){
        indicatorDiv[i].addEventListener('click', 
        function(){
            index = indicatorDiv[i].id;
            changeSlide();
            updateCircleIndicator();
            // resetTimer();
        });
    }
}
indicateSlide();

function updateCircleIndicator(){
    for(let i = 0; i < indicator.children.length; i++ ){
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
};

function prevSlide(){
    if(index == 0){
        index = slides.length-1;
    }else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index == slides.length-1){
        index = 0;
    }else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}

// function resetTimer(){
//     clearInterval(timer);
//     timer = setInterval(autoPlay,4000);
// }

// function autoPlay(){
//     nextSlide();
//     updateCircleIndicator();

// }
// let timer = setInterval(autoPlay,4000);
// create circle indicators
function circleIndicator(elementForLnegth, elementForAppend){
    for(let i = 0; i < elementForLnegth.length; i++){
        const div = document.createElement('div');
        div.id = i;
        if(i == 0){
            div.className = "active";
        }
        elementForAppend.appendChild(div);
    }
};
}


// End slider


// gallery
let clubIndicators = document.querySelectorAll(".club .indicator div");
let clubSmallGallery = document.querySelectorAll(".club .gallery-small_img");
let prevGalerryClub = document.querySelector(".club .prev");
let nextGalerryClub = document.querySelector(".club .next");

let residenceIndicators = document.querySelectorAll(".residence .indicator div");
let residenceSmallGallery = document.querySelectorAll(".residence .gallery-small_img");
let prevGalerryResidence = document.querySelector(".residence .prev");
let nextGalerryResidence = document.querySelector(".residence .next");


let club = document.querySelector(".club");
let residence = document.querySelector(".residence");

let choiceHouseClub = document.querySelectorAll(".choice-house_club");
let choiceHouseResidence = document.querySelectorAll(".choice-house_residence");

function clickForChoiceHouseClub(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].addEventListener("click", () =>{
            club.style.display = "block";
            residence.style.display = "none";

        })
    }
}
function clickForChoiceHouseResidence(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].addEventListener("click", () =>{
            residence.style.display = "block";
            club.style.display = "none";
        })
    }
}
clickForChoiceHouseClub(choiceHouseClub);
clickForChoiceHouseResidence(choiceHouseResidence);


function clearActiveInGalerry(arrSmallGallery){
    for(let i = 0; i < arrSmallGallery.length; i++){
            arrSmallGallery[i].classList.remove("active"); 
    }
}

function smallGallery(arrIndicators, arrSmallGallery){
    for(let i = 0; i < arrIndicators.length; i++){
        if(arrIndicators[i].className == "active"){
            arrSmallGallery[clubIndicators[i].id].classList.add("active");
        }
    }
}

smallGallery(clubIndicators, clubSmallGallery);
smallGallery(residenceIndicators, residenceSmallGallery);

prevGalerryClub.addEventListener("click", () =>{
    residenceSmallGallery = document.querySelectorAll(".club .gallery-small_img");
    clearActiveInGalerry(clubSmallGallery);
    smallGallery(clubIndicators, clubSmallGallery);
});

nextGalerryClub.addEventListener("click", () =>{
    residenceSmallGallery = document.querySelectorAll(".club .gallery-small_img");
    clearActiveInGalerry(clubSmallGallery);
    smallGallery(clubIndicators, clubSmallGallery);
})


prevGalerryResidence.addEventListener("click", () =>{
    residenceSmallGallery = document.querySelectorAll(".residence .gallery-small_img");
    clearActiveInGalerry(residenceSmallGallery);
    smallGallery(residenceIndicators, residenceSmallGallery);
});

nextGalerryResidence.addEventListener("click", () =>{
    residenceSmallGallery = document.querySelectorAll(".residence .gallery-small_img");
    clearActiveInGalerry(residenceSmallGallery);
    smallGallery(residenceIndicators, residenceSmallGallery);
})

function addClickForIndicators(indicators, clear, funcAddActive){
    for(let i = 0; i < indicators.length; i++){
        indicators[i].addEventListener("click", () =>{
            clearActiveInGalerry(clubSmallGallery);
            clearActiveInGalerry(residenceSmallGallery);
            smallGallery(clubIndicators, clubSmallGallery);
            smallGallery(residenceIndicators, residenceSmallGallery);
        })
    }
}
addClickForIndicators(clubIndicators);
addClickForIndicators(residenceIndicators);

// end gallery

// layout
let layoutMetуr = document.querySelectorAll(".layout-metуr");
let layoutRooms = document.querySelectorAll(".layout-rooms");


function clearActiveInLayoutRooms(){
    for(let i = 0; i < layoutMetуr.length; i++){
            layoutMetуr[i].classList.remove("active");
            layoutRooms[i].classList.remove("active");
    }       
}

function addClickForLayoutRooms(){
    for(let i = 0; i < layoutRooms.length; i++){
        layoutRooms[i].addEventListener("click", () => {
            clearActiveInLayoutRooms();
            layoutRooms[i].classList.add("active");
            layoutMetуr[i].classList.add("active");
        })
    }
}
addClickForLayoutRooms();


// end layout

// popup
let callBtn = document.querySelectorAll(".call-btn");
let popup = document.querySelector(".popup");
let closePopup = document.querySelector(".close-popup");
function showPopup(){
    for(let i = 0; i < callBtn.length; i++){
        callBtn[i].addEventListener("click", () => {
            popup.classList.add("active");
        })
    }
}
closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
})
showPopup();
// end popup

// add actine for nav-link
let navLink = document.querySelectorAll(".nav-link");
let gallery = document.querySelector(".gallery");
let layout = document.querySelector(".layout");
let documents = document.querySelector(".document");
let contact = document.querySelector(".office");

function scrollGallery(){
    let elementPosition = gallery.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 5;


    if(elementPosition < screenPosition){
        clearNavActive();
        navLink[1].classList.add("active");
    }
}

function scrollLayout(){
    let elementPosition = layout.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 5;


    if(elementPosition < screenPosition){
        clearNavActive();
        navLink[2].classList.add("active");
    }
}

function scrollDocuments(){
    let elementPosition = documents.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;


    if(elementPosition < screenPosition){
        clearNavActive();
        navLink[3].classList.add("active");
    }
}

function scrollContact(){
    let elementPosition = contact.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 5;


    if(elementPosition < screenPosition){
        clearNavActive();
        navLink[4].classList.add("active");
    }
}

function clearNavActive(){
    for(let i = 0; i < navLink.length; i++){
        navLink[i].classList.remove("active");
    }
}

window.addEventListener("scroll", scrollGallery);
window.addEventListener("scroll", scrollLayout);
window.addEventListener("scroll", scrollDocuments);
window.addEventListener("scroll", scrollContact);



// end add actine for nav-link


