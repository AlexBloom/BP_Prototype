
$(document).ready(function () {

		// Fire LocalScroll
		//$('body').localScroll();
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen-container').css('min-height',$(window).height());
		$('.risk section').css('min-height',$(window).height()-150);
		

		$(window).resize(function() {
			$('.full-screen-container').css('min-height',$(window).height());
			$('.risk section').css('min-height',$(window).height()-150);
		});


		//Sides Toggle
		
		$('.risk').click(function(){
			$(this).addClass('open');
			$(this).removeClass('closed');
			$('.scrollnav').addClass('right');
			$('.scrollnav').removeClass('left');
			$('.education').addClass('closed');
			$('#fixed-messages').addClass('open');
			$('#fixed-messages').removeClass('closed');
		});
		
		$('.education').click(function(){
			$(this).addClass('open');
			$(this).removeClass('closed');
			$('.scrollnav').addClass('left');
			$('.scrollnav').removeClass('right');
			$('.risk').addClass('closed');
			$('#fixed-messages').addClass('closed');
			$('#fixed-messages').removeClass('open');
		});
		
		$('#open-education').click(function(){
			$('.education').addClass('open');
			$('.education').removeClass('closed');
			$('.scrollnav').addClass('left');
			$('.scrollnav').removeClass('right');
			$('.risk').addClass('closed');
			$('#fixed-messages').addClass('closed');
			$('#fixed-messages').removeClass('open');
		});
		
		$('#launch-assess').click(function(){
			$('#fixed-messages').addClass('visible');
		});


	//Menu Toggle
	$('#site-header').addClass('closed');
	$('#main').addClass('open');

   
	$('#nav-toggle').click(function(){
		//$(this).toggleClass('close');
	$('#site-header').toggleClass('closed');
	$('#site-header').toggleClass('open');
	$('#main').toggleClass('open');
	$('#main').toggleClass('closed');
	$('body').toggleClass('overflow-hidden');
	  });
	
	  
  	$('.main').click(function(){
  		$('#site-header').addClass('closed');
  		$('#site-header').removeClass('open');
		$('.main').removeClass('menu-open');
		$('.main').addClass('menu-closed');
		$('#toggle').removeClass('close');
		$('body').removeClass('overflow-hidden')
  	 });






	 





 });