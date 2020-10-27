// Slide image 

$('.next').click( function() {
    navImage('next');
})

$('.prev').click(function() {
    navImage('prev');
})


//Navigazione avanti e indietro tra le immagini
function navImage(direction) {
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    if (direction === 'next') {
        if (activeImage.hasClass('last') === true) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
    }
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