$(document).ready(function(){
	$('.slider').slick();

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.burger').click(function(event){
		$('.burger, .nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});