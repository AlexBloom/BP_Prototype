

//PNG Sequence Fire

/* Author: Nick Jones
*/
$(document).ready(function() {
	var win = $(window);
	var doc = $(document);
	var initialized = false;
	if(Modernizr.cssfilters){
		blurEnabled = true;
	}

	var WIN_H;
	var WIN_W;

  var scrollAmount = 0;

  var myL=0;
	var myW=0;
	var loopInterval;
	var looping = false;

	var sequenceScroll = 0;

	var events = {
		init: function(){
			// window.scrollTo(0, 1);
			win.bind('resize', pageResize);
			win.bind('keydown',keyHandler);
			win.mouseup(function(){
				win.unbind('mousemove');
			});
			win.bind('mousewheel', function(eventData,deltaY) {
				stopEasing();
				scrollHandler(deltaY*20);
				eventData.preventDefault();
			});

			pageResize();
			startLoop();
			function pageResize (e) {
				WIN_H = win.height();
				WIN_W = win.width();
				initialized = true;
			}
			function scrollHandler(deltaY){
				scrollAmount = Math.min(0,scrollAmount+(deltaY));
						sequenceScroll = scrollAmount;
						$('.sequence').css({
							left:Math.min(0,Math.max(-44*WIN_W,(Math.round(sequenceScroll/18))*WIN_W))
						})
					}
			}

		}
		//};
	events.init();
});







