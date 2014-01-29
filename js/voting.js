$(document).ready(function(){ 
    $('.next-button').click(function(evt) {
        var next = $(evt.target).data('target');
        $(next).modal('show');
    });
});

