;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		
		//Show search
		
		$('.nav-search-btn').on('click', function(event){
			$(this).siblings().toggleClass('active');
			event.preventDefault();
		});		
		
		// Mobile Nav Open
		
		$('.btn-menu').on('click', function(event){
			$(this).toggleClass('open');
			$('.nav-mobile').toggleClass('expand');
			$('body').toggleClass('active');
			$('.footer').toggleClass('active');
			event.preventDefault();
		});
		
		// Show mobile nav sub menu
		
		$('.nav-secondary li').on('click', function(event){
			$(this).toggleClass('current');
		});
		
		// Datepicker
		
		$( "#field-date-of-birth, #field-date-of-referral" ).datepicker();
		
		// Custom Scroll
		
		jcf.setOptions('Select', {
	        wrapNative: false,
	        wrapNativeOnMobile: false,
	        maxVisibleItems: 6,
	        useCustomScroll: true
	    });
	    
	    jcf.replaceAll();
		
		//Youtube video
		
		$('.video').on('click', function (e) {
		            playVideo($(this).addClass('active')
		               .find('iframe'));
				           e.preventDefault();
				});
				       
		        function playVideo($iframe) {
		            var src = $iframe.data('video-url');
		            $iframe.attr('src', src+'?autoplay=1&loop=1&rel=0&wmode=transparent');
		        };

		
		// Magnific Pop Up
		
		$('.btn-open-popup').magnificPopup({
			  type:'inline',
			  midClick: true 
		});
		
		// Sticky float
		
		$(".widget-nav").sticky({topSpacing:110});
		
		//Select form remove *
		
		var $stateSelects = $('.select-state');
		
		$stateSelects.each(function() {
			$(this)
				.data('changed', false)
				.on('change', function() {
					$(this).data('changed', true);
					
					$(this).siblings('.jcf-select:eq(0)').addClass('changed');
				});
		});
		
		$doc.on('mousedown', function(event) {
			var $target = $(event.target);
			var $fakeSelect;
			
			if($target.hasClass('.jcf-select')) {
				$fakeSelect = $target;
			} else if($target.parents('.jcf-select').length) {
				$fakeSelect = $target.parents('.jcf-select:eq(0)');
			}
			console.log($fakeSelect);
			
			if(typeof $fakeSelect !== 'undefined') {
				var $stateLabel = $fakeSelect.parents('.form-col:eq(0)').find('label');
				
				var $select = $fakeSelect.siblings('select:eq(0)');
				
				if(!$select.data('changed')) {
					$stateLabel.toggleClass('hidden', $fakeSelect.hasClass('jcf-drop-active'));
				} else {
					$stateLabel.addClass('hidden');
				}
				
				$fakeSelect.toggleClass('open', $fakeSelect.hasClass('jcf-drop-active'));
					
				
			} else if(typeof $fakeSelect === 'undefined' && $('.jcf-drop-active').length && $('.jcf-select.open').length) {
				$fakeSelect = $('.jcf-select.open');
				
				var $stateLabel = $fakeSelect.parents('.form-col:eq(0)').find('label');
				
				var $select = $fakeSelect.siblings('select:eq(0)');
				
				$fakeSelect.removeClass('open');
				
				if(!$select.data('changed')) {
					$stateLabel.toggleClass('hidden', $fakeSelect.hasClass('jcf-drop-active'));
				} else {
					$stateLabel.addClass('hidden');
				}
				
			}
		});
			
		var activeItemClass = 'accordion-expanded';
	    var accordionItemSelector = '.accordion-section';
	    var toggleSelector = '.accordion-head';
	 
	    $(toggleSelector).on('click', function() {
	 
	        $(this)
	            .closest(accordionItemSelector) 
	            .toggleClass(activeItemClass)
	                .siblings()
	                .removeClass(activeItemClass);
	    });
	});


	
	// Fix Header
	
	$win.on('load scroll', function() {
	    $('.header').toggleClass('fixed', $win.scrollTop() > 60);
	});

})(jQuery, window, document);
