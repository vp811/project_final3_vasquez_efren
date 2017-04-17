$(document).ready(function() {
    $('.menu-link').bigSlide();

    $( "#menu-click" ).click(function() {
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

    $('.animsition').animsition();


});
