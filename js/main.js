
$('#Facts-Container, #Risk-Meter, .bar-title').addClass('closed');
$('.content-wrapper').addClass('collapsed');
$('.education-prompt').addClass('hidden');

$(document).ready(function () {
		// Fire LocalScroll
		//$('.scrollpane').localScroll({offset:0});
		
		$('#family-history-home').localScroll({
		   target:'#family-history-home'
		});
	
		// Size Full-Screen Videos, Images, & Slideshows to window height.
		
		$('.full-screen-container, .assess, .scrollpane, #Assessment-Intro, .education-frame').css('min-height',$(window).height()-30);
		$('.education-header-link').css('min-height',$(window).height()/3-8);
		$('#Intro').css('min-height',$(window).height());
		
		$(window).resize(function() {
			$('.full-screen-container, .assess, .scrollpane, #Assessment-Intro, .education-frame').css('min-height',$(window).height()-30);
			$('.education-header-link').css('min-height',$(window).height()/3-8);
			$('#Intro').css('min-height',$(window).height());
		});


	/*
	 *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Risk Toggle 
	 *
	*/	
	
  function OpenLeft(){
 	
  }
		
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
	
	
    function OpenRight(){
  	
    }
	
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
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Progress Through Assessment
	 *
	*/				
   
		$('.assess a').click(function(){
			$(this).parent().parent().addClass('done');
		});
		
		$('#Assessment-Intro').click(function(){
			$(this).addClass('done');
			$('.bar-title').removeClass('closed');
		});
		
		
		// Swap Numbers into Progress Counter
			$('.assess').click(function (){
				
				$('#Assess-Count').toggleClass('flip');
				
	            $('#Assess-Count').html($(this).next().find('.number-icon').html()); //or any other way you want to get the desc
	            return; //break the loop
				
			});
		



	/*
	 *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Opening & Navigation Education Sub-Sections
	 *
	*/	

	
	
	$('.education-header-link').click(function(){
		$('.education-header-link').css('min-height',$(window).height()/3);
		$('.content-wrapper').addClass('collapsed');
		$('.education-prompt').addClass('hidden');
		$(this).css('min-height',$(window).height());
		$(this).parent().next().removeClass('collapsed');
		$(this).find('.education-prompt').removeClass('hidden');
	});



	/*
	 *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * Video Stuff
	 *
	*/	

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