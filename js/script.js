/* Header */

const header = document.querySelector('header');

window.addEventListener("scroll", () => {
    if (window.scrollY >= 450) {
        header.classList.add("scrolled")
    }
    else if (window.scrollY <= 400) {
        header.classList.remove("scrolled")
    }
});

/* Popup */

const popupLinks = document.querySelectorAll('.popup-link');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (f) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            f.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (f) {
            popupClose(el.closest('.popup'));
            f.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive);
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (f) {
            if (!f.target.closest('.popup__content')) {
                popupClose(f.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive) {
    popupActive.classList.remove('open');
}

document.addEventListener('keydown', function (f) {
    if (f.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

// Color changing JQuery

$(".title_news").mouseover(function () {
    $(".title_news").css("color", "#961d1d");
});
$(".title_news").mouseout(function () {
    $(".title_news").css("color", "#142850");
});

// Sound

var noise = document.querySelectorAll(".global-news__next").length;
for (var i = 0; i < noise; i++) {
    document.querySelectorAll(".global-news__next")[i].addEventListener("click", function () {
        var audio = new Audio('sound/noise2.mp3')
        audio.play();
    })
}

// Snowfall JQuery

$('.switch-btn').click(function () {
    $(this).toggleClass('switch-on');
    if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});

$('.switch-btn').on('on.switch', function () {
    $(document).ready(function () {
        $(document).snowfall({ image: "img/snow/snow3.png", minSize: 10, maxSize: 20 });
    });
});
$('.switch-btn').on('off.switch', function () {
    $(document).snowfall('clear');
});
/// Sound #Snow
var noise = document.querySelectorAll(".switch-btn").length;
for (var i = 0; i < noise; i++) {
    document.querySelectorAll(".switch-btn")[i].addEventListener("click", function () {
        var audio = new Audio('sound/switcher.mp3')
        audio.play();
    })
}

// Button to up

var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}