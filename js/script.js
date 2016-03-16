$(document).ready(function(){
	$('#slide-menu').hide();
	$('.submenu').hide();
	
	$('#nav-toggle').on('click', function(e){
		$('#nav-toggle').toggleClass('active');
		e.preventDefault();
		$('#slide-menu').animate({width: 'toggle'});
	});

	$('#first-submenu').on('click', function(e){
		$('#submenu-one').toggle('slide', {direction: 'right'}, 1000);
	});

	$('#second-submenu').on('click', function(e){
		$('#submenu-two').toggle('slide', {direction: 'right'}, 1000);
	});

	$('#third-submenu').on('click', function(e){
		$('#submenu-three').toggle('slide', {direction: 'right'}, 1000);
	});

	$('#fourth-submenu').on('click', function(e){
		$('#submenu-four').toggle('slide', {direction: 'right'}, 1000);
	})

	$('.close').on('click', function(e){
		$('.submenu').hide('slide', {direction: 'right'}, 1000);
	});

	$('.dropdown-toggle').click(function(){
		$('.dropdown-list').toggleClass('active');
		$('.dropdown').slideToggle();
		if($(this).find($('.fa')).hasClass('fa-angle-down')) {
			$(this).find($('.fa')).removeClass('fa-angle-down').addClass('fa-angle-up')
		} else if ($(this).find($('.fa')).hasClass('fa-angle-up')) {
			$(this).find($('.fa')).removeClass('fa-angle-up').addClass('fa-angle-down')
		}
	});
});
