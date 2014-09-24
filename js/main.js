
$('#Facts-Container, #Risk-Meter, .bar-title').addClass('closed');

$(document).ready(function () {
		// Fire LocalScroll
		//$('.scrollpane').localScroll({offset:0});
		
		$('#family-history-home').localScroll({
		   target:'#family-history-home'
		});
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		$('.full-screen-container, .assess, .scrollpane, #Assessment-Intro').css('min-height',$(window).height()-30);
		$('.education-header-link').css('min-height',$(window).height()/3-8);
		
		
		$(window).resize(function() {
			$('.full-screen-container, .assess, .scrollpane, #Assessment-Intro').css('min-height',$(window).height()-30);
			$('.education-header-link').css('min-height',$(window).height()/3-8);
		});


	/*
	 *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Risk Toggle 
	 *
	*/		
		$('#Risk-Toggle, #Launch-Assessment').click(function(){
			//Toggle Style
			$(this).addClass('active');
			$('Education-Toggle').removeClass('active');
			
			//Expand Assessment
			$('#Risk-Assessment').addClass('open');
			$('#Risk-Assessment').removeClass('closed');
			
			//Hide Education
			$('#Education-Modules').addClass('closed');
			$('#Education-Modules').removeClass('open');

			//Show Facts & Risk Meter
			$('#Facts-Container, #Risk-Meter').addClass('open');
			$('#Facts-Container, #Risk-Meter').removeClass('closed');
		});
		
	/*
	 *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Education Toggle 
	 *
	*/
		$('#Education-Toggle').click(function(){
			//Toggle Style
			$(this).addClass('active');
			$('Education-Toggle').removeClass('active');
			
			//Hide Assessment
			$('#Risk-Assessment').addClass('closed');
			$('#Risk-Assessment').removeClass('open');
			
			//Expand Education
			$('#Education-Modules').addClass('open');
			$('#Education-Modules').removeClass('closed');
			
			//Hide Facts & Risk Meter, Show Education Meter
			$('#Facts-Container, #Risk-Meter').addClass('closed');
			$('#Facts-Container, #Risk-Meter').removeClass('open');
		});
		
	/*
	 *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Close Fixed Elements in Assessment 
	 *
	*/				
   
		$('.assess a').click(function(){
			$(this).parent().parent().addClass('done');
		});
		
		$('#Assessment-Intro').click(function(){
			$(this).addClass('done');
			$('.bar-title').removeClass('closed');
		});
		





	 // Show & Hide Video Overlay Scrolls
	 
     //$("#video-overlay-1").addClass('closed');
     $(window).scroll(function() {
         var y_scroll_pos = window.pageYOffset;
         var scroll_pos_test = 200;             
     	// set to whatever you want it to be
         if(y_scroll_pos > scroll_pos_test) {
     	   $("#video-overlay-1").addClass('visible');
         }
     	else
     	{
  		$("#video-overlay-1").removeClass('visible');
     	}
		
		if(y_scroll_pos > 400){
			$("#video-overlay-1").removeClass('visible');
		}
		
        if(y_scroll_pos > scroll_pos_test+300) {
    	   $("#video-overlay-2").addClass('visible');
        }
     	else
     	{
  		$("#video-overlay-2").removeClass('visible');
     	}
		
		if(y_scroll_pos > 600){
			$("#video-overlay-2").removeClass('visible');
		}
		
     });

	
	/*
	 *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Not Currently In Use
	 *
	*/
	
	
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