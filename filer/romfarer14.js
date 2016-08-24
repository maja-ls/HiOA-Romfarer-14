
//fontstørrelse
$(document).ready(function() { //Lager knappene som brukes til å endre tema og kontrast
    $('#fontendreholder').css('display', 'inline-block');
    $("#fontendreholder").append("<span id='fontAlle'><a class='fontKnapp' href='#'>Skriftstørrelse</a></span>");
    $("#fontendreholder").append("<span id='fontNormal'><a class='fontKnapp' href='#'>A</a></span>");
    $("#fontendreholder").append("<span id='fontMedium'><a class='fontKnapp' href='#'>A</a></span>");
    $("#fontendreholder").append("<span id='fontStor'><a class='fontKnapp' href='#'>A</a></span>");

    $('#kontrastknappholder').css('display', 'inline-block');
    $("#kontrastknappholder").append("<span id='kontrast'><a class='kontrastKnapp' href='#'>Høykontrast</a></span>");
});


//knapp for liten
var storrelse = 0;
$(document).ready(function() {
    $("#fontNormal").click(function() {
        storrelse = 0;
        endreStrl(storrelse);
    });
});


//knapp for medium
$(document).ready(function() {
    $("#fontMedium").click(function() {
        storrelse = 1;
        endreStrl(storrelse);
    });
});


//knapp for stor
$(document).ready(function() {
    $("#fontStor").click(function() {
        storrelse = 2;
        endreStrl(storrelse);
    });
});


//veksleknapp
$(document).ready(function() {
    $("#fontAlle").click(function() {
        storrelse++;
        if (storrelse === 3) {
            storrelse = 0;
        }
        endreStrl(storrelse);
    });
});

function endreStrl(tall) {
    switch (tall) {
        case 0:
            $('body').css('font-size', 'medium');
            break;
        case 1:
            $('body').css('font-size', '115%');
            break;
        case 2:
            $('body').css('font-size', '130%');
            break;
    }
}







//kontrast
var kontrastOn = 0;

$(document).ready(function() {
    $("#kontrast").click(function() {

        if (kontrastOn === 0) {
            $('section, footer').css('opacity', '1.0');
            $('a').css('color', 'yellow');
            $('body').css('color', '#fff');

            //likeså med alle andre objekter som har en egendefinert bakgrunnsfarge
            //skru av opacity
            kontrastOn++;
        }
        else {
            $('section, footer').css('opacity', '0.86');
            $('a').css('color', '#99B');
            $('li a').css('color', '#AFF');
            $('body').css('color', '#eef');


            //endre tilbake alle andre objekter som har en egendefinert bakgrunnsfarge
            //skru på opacity
            kontrastOn--;
        }
    });
});


