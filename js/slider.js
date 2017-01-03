$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin: 20,
		//autoWidth:true,
		responsive:{
			0:{
				items:1,
				stagePadding:50,
				center: true,
			},
			250:{
				items:1,
				stagePadding:70,
				center: true,
			},
			450:{
				items:1,
				stagePadding:100,
				center: true,
			},
			500:{
				items:1,
				stagePadding:120,
				center: true,
			},
			550:{
				items:2,
				stagePadding:30,
				center: true,
			},
			650:{
				items:2,
				stagePadding:80,
				center: true,
			},
			700:{
				items:3,
			},
			850:{
				items:3,
				nav:true,
			},
			1000:{
				items:4,	
			},
			1200:{
				items:4,
				nav:true,
			},
		}
		
	});
	$('.owl-prev').html('<img src="images/left.png" alt="left">');
	$('.owl-next').html('<img src="images/right.png" alt="left">')
});