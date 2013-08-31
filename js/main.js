/*
var t = $("#anchor-point").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > t)
    {   
        $('#voice2').css({"border-bottom":"2px solid #f4f5f8"});
        $('#voice3').css({"border-bottom":"2px solid #2e375b"});
    }
});
*/

$(document).ready(function() {
	var le_header = $('#le_header');

	var marker = $('#what_header').offset().top;
	var originalBG = le_header.css('background-image');

	$(document).scroll(function() {

		if( $(this).scrollTop() > marker ) {
			le_header.css("background-image", $('#what_header').css("background-image"));
		}
		else if( $(this).scrollTop() < marker ) {
			le_header.css("background-image", originalBG);
		}
	});
});