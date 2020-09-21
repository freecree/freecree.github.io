// var btn = document.querySelector(".btn");
// //var btn = document.getElementById("btn");
// btn.onclick = function() {
// 	console.log("Hello");
// 	var text = document.querySelector('p.intro');
// 	text.classList.add('red');
// }


$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill-free').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
	});
})