$(document).ready(function () {
    /* ------Menu jQuery Plugin----- */
    $('.menu-link').bigSlide();

    /* ------Menu page/Show more click ------Custom jQuery*/
    $('#menu-click').click(function () {
        $('.app').slideToggle('slow');
    });

    $('#menu-click1').click(function () {
        $('.entrees').slideToggle('slow');
    });

    $('#menu-click2').click(function () {
        $('.dessert').slideToggle('slow');
    });

    $('#menu-click3').click(function () {
        $('.drinks').slideToggle('slow');
    });

    $('#menu-click4').click(function () {
        $('.sides').slideToggle('slow');
    });

    /* --------Page transition jQuery Plugin */
    $('.animsition').animsition();

});


/* --------------JavaScript adding content to page ----------*/
/* --------------Custom JavaScrip #1------*/
var hidden = document.getElementById('rebel');  //creates a variable called hidden if the ID rebel shows up on the screen

if (hidden) {
    hidden.addEventListener('click', rebelspy);   //If rebel is on the document, an event listener will be made. When the rebel div is clicked, the rebelspy function will run.
}
function rebelspy() {
    document.getElementById('rebel').innerHTML = "I see you are a rebel. You should join the rebellion. <img src='img/rebel.png' alt='rebel'>"; //Once the div is clicked, this content is added to the page
}

/* --------------Custom JavaScrip #2------*/
var alienText = document.getElementById('alien-text'); //creates a variable called hidden if the ID alien-text shows up on the screen

if (alienText) {
    alienText.addEventListener('click', translate); //If alien-text is on the document, an event listener will be made. When the alien-text div is clicked, the translate function will run.
}

function translate() {
    document.getElementById('about-home').style.fontFamily = 'alien'; //Once the div is clicked, the font will change to the alien font
}

/* --------------Custom JavaScrip #3------*/
var darkside = document.getElementById('target');

if (darkside) {
    darkside.addEventListener('dblclick', welcome);
}
function welcome () {
    document.getElementById('target').innerHTML = "<img  src='img/target.jpg' alt='target'> <p>You are no Stormtrooper! You pay full price!</p> ";
}
