"use strict";

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
}); // End for use webp in css like backround
// Slider

slider('.main', '.slide');
slider('.residence', '.slide');
slider('.club', '.slide');
slider('.layout', '.slide');
slider('.document', '.slide');

function slider(section, div) {
  var slides = document.querySelectorAll("".concat(section, " ").concat(div));
  var indicator = document.querySelector("".concat(section, " .indicator"));
  var prev = document.querySelector("".concat(section, " .prev"));
  var next = document.querySelector("".concat(section, " .next"));
  var index = 0;
  prev.addEventListener('click', function () {
    prevSlide();
    updateCircleIndicator(); // resetTimer();
  });
  next.addEventListener('click', function () {
    nextSlide();
    updateCircleIndicator(); // resetTimer();
  });
  circleIndicator(slides, indicator);

  function indicateSlide() {
    var indicatorDiv = document.querySelectorAll("".concat(section, " .indicator div"));

    var _loop = function _loop(i) {
      indicatorDiv[i].addEventListener('click', function () {
        index = indicatorDiv[i].id;
        changeSlide();
        updateCircleIndicator(); // resetTimer();
      });
    };

    for (var i = 0; i < indicatorDiv.length; i++) {
      _loop(i);
    }
  }

  indicateSlide();

  function updateCircleIndicator() {
    for (var i = 0; i < indicator.children.length; i++) {
      indicator.children[i].classList.remove('active');
    }

    indicator.children[index].classList.add('active');
  }

  ;

  function prevSlide() {
    if (index == 0) {
      index = slides.length - 1;
    } else {
      index--;
    }

    changeSlide();
  }

  function nextSlide() {
    if (index == slides.length - 1) {
      index = 0;
    } else {
      index++;
    }

    changeSlide();
  }

  function changeSlide() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
  } // function resetTimer(){
  //     clearInterval(timer);
  //     timer = setInterval(autoPlay,4000);
  // }
  // function autoPlay(){
  //     nextSlide();
  //     updateCircleIndicator();
  // }
  // let timer = setInterval(autoPlay,4000);
  // create circle indicators


  function circleIndicator(elementForLnegth, elementForAppend) {
    for (var i = 0; i < elementForLnegth.length; i++) {
      var _div = document.createElement('div');

      _div.id = i;

      if (i == 0) {
        _div.className = "active";
      }

      elementForAppend.appendChild(_div);
    }
  }

  ;
} // End slider
// gallery


var clubIndicators = document.querySelectorAll(".club .indicator div");
var clubSmallGallery = document.querySelectorAll(".club .gallery-small_img");
var prevGalerryClub = document.querySelector(".club .prev");
var nextGalerryClub = document.querySelector(".club .next");
var residenceIndicators = document.querySelectorAll(".residence .indicator div");
var residenceSmallGallery = document.querySelectorAll(".residence .gallery-small_img");
var prevGalerryResidence = document.querySelector(".residence .prev");
var nextGalerryResidence = document.querySelector(".residence .next");
var club = document.querySelector(".club");
var residence = document.querySelector(".residence");
var choiceHouseClub = document.querySelectorAll(".choice-house_club");
var choiceHouseResidence = document.querySelectorAll(".choice-house_residence");

function clickForChoiceHouseClub(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
      club.style.display = "block";
      residence.style.display = "none";
    });
  }
}

function clickForChoiceHouseResidence(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
      residence.style.display = "block";
      club.style.display = "none";
    });
  }
}

clickForChoiceHouseClub(choiceHouseClub);
clickForChoiceHouseResidence(choiceHouseResidence);

function clearActiveInGalerry(arrSmallGallery) {
  for (var i = 0; i < arrSmallGallery.length; i++) {
    arrSmallGallery[i].classList.remove("active");
  }
}

function smallGallery(arrIndicators, arrSmallGallery) {
  for (var i = 0; i < arrIndicators.length; i++) {
    if (arrIndicators[i].className == "active") {
      arrSmallGallery[clubIndicators[i].id].classList.add("active");
    }
  }
}

smallGallery(clubIndicators, clubSmallGallery);
smallGallery(residenceIndicators, residenceSmallGallery);
prevGalerryClub.addEventListener("click", function () {
  residenceSmallGallery = document.querySelectorAll(".club .gallery-small_img");
  clearActiveInGalerry(clubSmallGallery);
  smallGallery(clubIndicators, clubSmallGallery);
});
nextGalerryClub.addEventListener("click", function () {
  residenceSmallGallery = document.querySelectorAll(".club .gallery-small_img");
  clearActiveInGalerry(clubSmallGallery);
  smallGallery(clubIndicators, clubSmallGallery);
});
prevGalerryResidence.addEventListener("click", function () {
  residenceSmallGallery = document.querySelectorAll(".residence .gallery-small_img");
  clearActiveInGalerry(residenceSmallGallery);
  smallGallery(residenceIndicators, residenceSmallGallery);
});
nextGalerryResidence.addEventListener("click", function () {
  residenceSmallGallery = document.querySelectorAll(".residence .gallery-small_img");
  clearActiveInGalerry(residenceSmallGallery);
  smallGallery(residenceIndicators, residenceSmallGallery);
});

function addClickForIndicators(indicators, clear, funcAddActive) {
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function () {
      clearActiveInGalerry(clubSmallGallery);
      clearActiveInGalerry(residenceSmallGallery);
      smallGallery(clubIndicators, clubSmallGallery);
      smallGallery(residenceIndicators, residenceSmallGallery);
    });
  }
}

addClickForIndicators(clubIndicators);
addClickForIndicators(residenceIndicators); // end gallery
// layout

var layoutMetуr = document.querySelectorAll(".layout-metуr");
var layoutRooms = document.querySelectorAll(".layout-rooms");

function clearActiveInLayoutRooms() {
  for (var i = 0; i < layoutMetуr.length; i++) {
    layoutMetуr[i].classList.remove("active");
    layoutRooms[i].classList.remove("active");
  }
}

function addClickForLayoutRooms() {
  var _loop2 = function _loop2(i) {
    layoutRooms[i].addEventListener("click", function () {
      clearActiveInLayoutRooms();
      layoutRooms[i].classList.add("active");
      layoutMetуr[i].classList.add("active");
    });
  };

  for (var i = 0; i < layoutRooms.length; i++) {
    _loop2(i);
  }
}

addClickForLayoutRooms(); // end layout
// popup

var callBtn = document.querySelectorAll(".call-btn");
var popup = document.querySelector(".popup");
var closePopup = document.querySelector(".close-popup");

function showPopup() {
  for (var i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener("click", function () {
      popup.classList.add("active");
    });
  }
}

closePopup.addEventListener("click", function () {
  popup.classList.remove("active");
});
showPopup(); // end popup
// add actine for nav-link

var navLink = document.querySelectorAll(".nav-link");
var gallery = document.querySelector(".gallery");
var layout = document.querySelector(".layout");
var documents = document.querySelector(".document");
var contact = document.querySelector(".office");

function scrollGallery() {
  var elementPosition = gallery.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 5;

  if (elementPosition < screenPosition) {
    clearNavActive();
    navLink[1].classList.add("active");
  }
}

function scrollLayout() {
  var elementPosition = layout.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 5;

  if (elementPosition < screenPosition) {
    clearNavActive();
    navLink[2].classList.add("active");
  }
}

function scrollDocuments() {
  var elementPosition = documents.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (elementPosition < screenPosition) {
    clearNavActive();
    navLink[3].classList.add("active");
  }
}

function scrollContact() {
  var elementPosition = contact.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 5;

  if (elementPosition < screenPosition) {
    clearNavActive();
    navLink[4].classList.add("active");
  }
}

function clearNavActive() {
  for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.remove("active");
  }
}

window.addEventListener("scroll", scrollGallery);
window.addEventListener("scroll", scrollLayout);
window.addEventListener("scroll", scrollDocuments);
window.addEventListener("scroll", scrollContact); // end add actine for nav-link