$(document).ready(function () {
	
	/*smooth scroll to section*/

	$('#mynavbar ul li a').click(function(){
		$('html, body').animate({
			scrollTop:$('#'+$(this).attr('data-value')).offset().top
		},1000);
	});
    /****Scroll Top**/
     /**Caching ScrollButton Element***/
      var scrollButton=$("#scroll-up");

	  $(window).scroll(function () {
	     ($(this).scrollTop()>= 700) ? scrollButton.fadeIn(): scrollButton.fadeOut();
	  });

	  scrollButton.click(function () {
	  	$("html,body").animate({scrollTop:0}, 700);
	  });


      /*****Change NavBar Background******/
        $(window).scroll(function () {
	     ($(this).scrollTop()>= 100) ? $(".navbar").css("background","rgba(0,0,0,0.5)"):$(".navbar").css("background","transparent");
	  });
   
});

/*Start Loading Overlay*/
	$(window).load(function () {
		$(".loading-overlay .sk-rotating-plane").fadeOut(1500, function () {
			$(this).parent().fadeOut(1000);
		});
	});