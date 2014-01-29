

$(document).ready(function(){ 

	$('.submit-button').click(function() {
		var Message=$('#id_message').val(); 
		var commentBox = $('<div class="comment-box"></div>');
		$('#comment-boxes').prepend(commentBox);
		/*$('.color-box:last-child').css('background-color', Message); */
		commentBox.html(Message);
		console.log("Added a " + Message + " box.");

	});

	$(window).load(function() {
    	$('.flexslider').flexslider();
  	});


	var beers = ["Sam Adams", "Heinykin"];

});
