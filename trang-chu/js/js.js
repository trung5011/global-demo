 
 $(function(){
 new WOW().init();
 $(window).scroll(function(event) {
 	/* Act on the event */
 	var vitri = $('body').scrollTop();
 	if (vitri >=10) {
 		$('.menu-fixed').addClass('menu-hien-ra');
 		$('.menu-fixed').addClass('wow');
 		$('.menu-fixed').addClass('fadeInDown');

 	}
 	else{
 		$('.menu-fixed').removeClass('menu-hien-ra');
 	}
 	if (vitri >=800) {
 		$('.dg-ke-sang').addClass('dg-ke-hien-ra');
 	}
 	else{
 		$('.dg-ke-sang').removeClass('dg-ke-hien-ra');
 	}

 });

 $('.reponsive-menu').slideUp();
  $('.reponsive-menu li .sub-1').slideUp();
   $('.reponsive-menu li .sub-1 li .sub-2').slideUp();
 $('label').click(function(event) {
 	$('.reponsive-menu').slideToggle();
 });
 // $('.reponsive-menu .sub-00').click(function(event) {
 // 	$('.reponsive-menu li .sub-1-1').slideToggle();

 // });
 
 // $('.reponsive-menu .sub-02').click(function(event) {
 // 	$('.reponsive-menu .sub-1-3').slideToggle();

 // });
 // $('.reponsive-menu .sub-03').click(function(event) {
 // 	$('.reponsive-menu .sub-1-4').slideToggle();

 // });
 // $('.reponsive-menu .sub-10').click(function(event) {
 // 	$('.reponsive-menu .sub-2-1').slideToggle();

 // });
 // $('.reponsive-menu .sub-11').click(function(event) {
 // 	$('.reponsive-menu .sub-2-2').slideToggle();

 // });
 // $('.reponsive-menu .sub-12').click(function(event) {
 // 	$('.reponsive-menu .sub-2-3').slideToggle();

 // });
 // $('.reponsive-menu .sub-13').click(function(event) {
 // 	$('.reponsive-menu .sub-2-4').slideToggle();

 // });
   $('.reponsive-menu .sub-00').click(function(event) {
 	$(this).next().slideToggle();

  });
   $('.reponsive-menu .sub-01').click(function(event) {
 	$(this).next().slideToggle();

 });
 
})  
 
 	