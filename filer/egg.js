// ****** FUNKSJONER ******

// midtstiller seksjoner
function finnLeft(eggdel) { //kunne egentlig bare hatt en midtstillingsfunksjon med to input-variabler, men de var så små at vi tenkte det ikke var hensiktsmessig

    var diff = (width - eggdel) / 2;
    return diff;
}
function finnTopp(eggdel) {
    var diff = (height - eggdel) / 2;
    return diff;
}
//midtstill slutt


//rotasjon
function roterPlomma() {

    var $rota = $('#rotorDiv'),
            degree = 360,
            timer;

    function rotate() {
        $rota.css({transform: 'rotate(' + degree + 'deg)'});
        // øker grader:
        timer = setTimeout(function() {
            ++degree;
            rotate();
        }, 50);
    }
    rotate();
}
;
//rotasjon slutt


// ****** FUNKSJONER SLUTT ******

//loades med en gang påskeegget trigges
//finner browserdimensjonene
var width = $(window).width();
var height = $(window).height();

if (width > height) {
    minst = height;
    storst = width;
}
else {
    minst = width;
    storst = height;
}



// og setter størrelsen på sections tilsvarende
var egget = minst * 0.9;
var hvitte = minst * 0.7;
var plommen = minst * 0.5;


$(document).ready(function() {
    $("#base").css("display", "none");
    $("body").css("background-image", "none");
    $("body").append("<button id='startEggKnapp'>???</button>");

    $("body").append("<div id='frem1' class='fremtid'>Welcome</div>");
    $("body").append("<div id='frem2' class='fremtid'>to the</div>");
    $("body").append("<div id='frem3' class='fremtid'>the future</div>");
    $("body").append("<div id='frem4' class='fremtid'>future</div>");

});




$(document).ready(function() {
    $("#startEggKnapp").click(function() {
        $("#startEggKnapp").css("display", "none");
        $("body").css("background-image", "url('filer/bilder/space2crop.jpg')");

        $("body").append("<section id='eggSeksjon'></section>");
        $("#eggSeksjon").css("width", egget + "px");
        $("#eggSeksjon").css("height", egget + "px");
        $("#eggSeksjon").css("left", finnLeft(egget) + "px");
        $("#eggSeksjon").css("top", finnTopp(egget) + "px");
        $("#eggSeksjon").css("border-radius", (egget / 2) + "px");

        $("#eggSeksjon").append("<section id='eggehvitte'></section>");
        $("#eggehvitte").css("width", hvitte + "px");
        $("#eggehvitte").css("height", hvitte + "px");
        $("#eggehvitte").css("left", finnLeft(hvitte) + "px");
        $("#eggehvitte").css("top", finnTopp(hvitte) + "px");
        $("#eggehvitte").css("border-radius", (hvitte / 2) + "px");

        $("body").append("<section id='plomme'></section>");
        $("#plomme").css("width", plommen + "px");
        $("#plomme").css("height", plommen + "px");
        $("#plomme").css("left", finnLeft(plommen) + "px");
        $("#plomme").css("top", finnTopp(plommen) + "px");
        $("#plomme").css("border-radius", (plommen / 2) + "px");


        $("body").append("<section id='plomme2'></section>");
        $("#plomme2").css("width", plommen + "px");
        $("#plomme2").css("height", plommen + "px");
        $("#plomme2").css("left", finnLeft(plommen) + "px");
        $("#plomme2").css("top", finnTopp(plommen) + "px");


        $("#plomme2").append("<div id='rotorDiv'>“Not just beautiful, though -- the stars are like the trees in the forest, alive and breathing.<br/>And they're watching me.”<br/>― Haruki Murakami, <em>Kafka on the Shore</em></div>");
        $("#plomme2 div").css("margin-top", (plommen / 3) + "px");

        roterPlomma();



        $('#frem1').delay(1000).fadeIn(1500).delay(750).fadeOut(300);
        $('#frem2').delay(3000).fadeIn(1500).delay(2000).fadeOut(300);
        $('#frem3').delay(4000).fadeIn(500).delay(750).fadeOut(300);
        $('#frem4').delay(5900).fadeIn(100).delay(1000).fadeOut(300);

    });
});









