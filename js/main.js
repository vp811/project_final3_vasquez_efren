$(document).ready(function () {
    /* ------Menu jQuery Plugin----- */
    $('.menu-link').bigSlide();

    /* ------Menu page/Show more click */
    $('#menu-click').click(function () {
    $( ".app" ).slideToggle( "slow" );
    });

    $( "#menu-click1" ).click(function() {
    $( ".entrees" ).slideToggle( "slow" );
    });

    $( "#menu-click2" ).click(function() {
    $( ".dessert" ).slideToggle( "slow" );
    });

    $( "#menu-click3" ).click(function() {
    $( ".drinks" ).slideToggle( "slow" );
    });

    $( "#menu-click4" ).click(function() {
    $( ".sides" ).slideToggle( "slow" );
    });

    /* --------Page transition jQuery Plugin */
    $('.animsition').animsition();

});


/* --------------JavaScript adding content to page ----------*/
/* --------------Custom JavaScrip #1------*/
var hidden = document.getElementById('rebel');

if (hidden){
    hidden.addEventListener('click', rebelspy);
}
function rebelspy() {
    document.getElementById('rebel').innerHTML = "I see you are a rebel. You should join the rebellion. <img src='img/rebel.png' alt='rebel'>";
}

/* --------------Custom JavaScrip #2------*/
var alienText = document.getElementById('alien-text');

if (alienText) {
    alienText.addEventListener('click', translate);
}

function translate() {
    document.getElementById('about-home').style.fontFamily = 'alien';
}
