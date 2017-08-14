 $(function(){
 new WOW().init();
 $('.account-details').click(function(event) {
 	/* Act on the event */
 	$('.account').addClass('active');
 	$('.courses').removeClass('active');
 	$('.account-details').addClass('bg-xam');
 	$('.my-courses').removeClass('bg-xam');
 });
 $('.my-courses').click(function(event) {
 	/* Act on the event */
 	$('.courses').addClass('active');
 	$('.account').removeClass('active');
 	$('.my-courses').addClass('bg-xam');
 	$('.account-details').removeClass('bg-xam');
 });
})  
 