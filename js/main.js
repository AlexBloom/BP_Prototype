
$(document).ready(function () {
		// Fire LocalScroll
		//$('.scrollpane').localScroll({offset:0});
		
		$('#family-history-home').localScroll({
		   target:'#family-history-home'
		});
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen-container').css('min-height',$(window).height());
		$('.risk section').css('min-height',$(window).height()-150);
		$('#family-history-home .vertical-container').css('min-height',$(window).height());
		

		$(window).resize(function() {
			$('.full-screen-container').css('min-height',$(window).height());
			$('.risk section').css('min-height',$(window).height()-150);
			$('#family-history-home .vertical-container').css('min-height',$(window).height());
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
			
			//$('#assess-return').addClass('overlay');
			
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
	 
	 // Show & Hide Video Overlay Scrolls
	 
     //$("#video-overlay-1").addClass('closed');
     $(window).scroll(function() {
         var y_scroll_pos = window.pageYOffset;
         var scroll_pos_test = 400;             
     	// set to whatever you want it to be
         if(y_scroll_pos > scroll_pos_test) {
     	   $("#video-overlay-1").addClass('visible');
         }
     	else
     	{
  		$("#video-overlay-1").removeClass('visible');
     	}
		
		if(y_scroll_pos > 600){
			$("#video-overlay-1").removeClass('visible');
		}
		
        if(y_scroll_pos > scroll_pos_test+300) {
    	   $("#video-overlay-2").addClass('visible');
        }
     	else
     	{
  		$("#video-overlay-2").removeClass('visible');
     	}
		
		if(y_scroll_pos > 950){
			$("#video-overlay-2").removeClass('visible');
		}
		
     });
	 

	 
	 
	 
	 // Active Link Highlighting

	  // Add Current Class to ScrollNav of Currently Depressed Item
	   	$('.scrollnav-link').click(function() {
	   		$('.scrollnav-link').removeClass('current');
	   		$(this).addClass('current');
	   	});	   

	 //Side Nav Highlighting 
	 $(function(){
	     $(document).scroll(function(){
	         $('.anchor').each(function(){
	             var $this = $(this),
	             pos   = $this.offset().top - $(window).scrollTop();
	             if(pos < 100 ){
	                 $('.scrollnav-link').removeClass('current');
	                 $('.scrollnav-link[href="#'+$this.attr('id')+'"]').addClass('current');
	             }
	         });

	     });
	 });
	 



	 





 });