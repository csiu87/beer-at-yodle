$(document).ready(function(){ 
    $('.next-button').click(function(evt) {
        var next = $(evt.target).data('target');
        $(next).modal('show');
    });

    $('.card').click(function(evt) {
    	$(this).toggleClass("flip");
    });
});

