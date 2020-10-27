// Slide image 
$(document).ready( function() {

    //Evento con il click
    $('.next').click( function() {
        navImage('next');
    })
    
    $('.prev').click(function() {
        navImage('prev');
    });

    //Navigazione Keyboard
    $(document).keydown( function(event) {
        //SX
        if (event.keyCode == 37) {
            navImage('prev');
        } 
        //DX
        else if (event.keyCode == 39) {
            navImage('next');
        }
    });
    
    
    //Navigazione avanti e indietro tra le immagini
    function navImage(direction) {
        var activeImage = $('.images img.active');
        var activeCircle = $('.nav i.active');
    
        activeImage.removeClass('active');
        activeCircle.removeClass('active');
    
        //NEXT
        if (direction === 'next') {
            if (activeImage.hasClass('last') === true) {
                $('.images img.first').addClass('active');
                $('.nav i.first').addClass('active');
            } else {
                activeImage.next('img').addClass('active');
                activeCircle.next('i').addClass('active');
            }
        }
        //PREV
        else if (direction === 'prev') {
            if (activeImage.hasClass('first') === true) {
                $('.images img.last').addClass('active');
                $('.nav i.last').addClass('active');
            } else {
                activeImage.prev('img').addClass('active');
                activeCircle.prev('i').addClass('active');
            }
        }
    }

});
