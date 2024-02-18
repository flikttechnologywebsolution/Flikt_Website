/*
Author       : Themesvila.
Template Name: Pixel - Material Design Agency Template
Version      : 1.0
*/




/* 2checkout payment gateway for Pay now page */
function checkForm(){
	var amount = jQuery('#amount').val();
	var description = jQuery('#description').val();
	if(description !='' && !isNaN(parseFloat(amount)) && isFinite(amount))
	{
		var amount = parseInt(amount.match(/\d+/));
		jQuery('#amount').val(amount);
		jQuery('#checkout-form').submit();
	}else{
		alert('Please enter the correct values');			
	}
	
	return false;
}

(function($) {
	'use strict';
	
		/* starts:homepage light box our awards */
		
		var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
		
		/* ends:homepage light box our awards */
	
	  var flag = 0;  
	  jQuery("button#changeSize").click(function(){
		if(flag == 0) {
		  jQuery("#dummyimage").attr("src","https://sevenstarwebsolutions.com/wp-content/themes/sevenstar/img/star-color.png");
		  flag = 1;
		}
		else if(flag == 1) {
		  jQuery("#dummyimage").attr("src","https://sevenstarwebsolutions.com/wp-content/themes/sevenstar/img/star.png");
		  flag = 0;
		}
	  });
	//Disable full page 
	// jQuery('body').bind('cut copy paste', function (e) { e.preventDefault(); });
	
	jQuery(document).on('ready', function(){
			
		/* Hide and show packages option in mobile  */
		$("#hide1").click(function(){
				$("figure").hide();
			});
			$("#show1").click(function(){
				$("figure").show();
			});
		
		$("#hide2").click(function(){
				$("figure").hide();
			});
			$("#show2").click(function(){
				$("figure").show();
			});
		
		$("#hide3").click(function(){
				$("figure").hide();
			});
			$("#show3").click(function(){
				$("figure").show();
			});
		
		$("#hide4").click(function(){
				$("figure").hide();
			});
			$("#show4").click(function(){
				$("figure").show();
			});
		
		$("#hide5").click(function(){
				$("figure").hide();
			});
			$("#show5").click(function(){
				$("figure").show();
			});
		
		$("#hide6").click(function(){
				$("figure").hide();
			});
			$("#show6").click(function(){
				$("figure").show();
			});
		
		$("#hide7").click(function(){
				$("figure").hide();
			});
			$("#show7").click(function(){
				$("figure").show();
			});
		
		$("#hide8").click(function(){
				$("figure").hide();
			});
			$("#show8").click(function(){
				$("figure").show();
			});
		
		$("#hide9").click(function(){
				$("figure").hide();
			});
			$("#show9").click(function(){
				$("figure").show();
			});
		
		$("#hide10").click(function(){
				$("figure").hide();
			});
			$("#show10").click(function(){
				$("figure").show();
			});
		
		$("#hide11").click(function(){
				$("figure").hide();
			});
			$("#show11").click(function(){
				$("figure").show();
			});
		
		$("#hide12").click(function(){
				$("figure").hide();
			});
			$("#show12").click(function(){
				$("figure").show();
			});
		
		$("#hide13").click(function(){
				$("figure").hide();
			});
			$("#show13").click(function(){
				$("figure").show();
			});
		
		$("#hide14").click(function(){
				$("figure").hide();
			});
			$("#show14").click(function(){
				$("figure").show();
			});
		
		$("#hide15").click(function(){
				$("figure").hide();
			});
			$("#show15").click(function(){
				$("figure").show();
			});
		
		$("#hide16").click(function(){
				$("figure").hide();
			});
			$("#show16").click(function(){
				$("figure").show();
			});
		
		$("#hide17").click(function(){
				$("figure").hide();
			});
			$("#show17").click(function(){
				$("figure").show();
			});
			
		$("#hide18").click(function(){
				$("figure").hide();
			});
			$("#show18").click(function(){
				$("figure").show();
			});
		
		$("#hide19").click(function(){
			$("figure").hide();
			});
			$("#show19").click(function(){
				$("figure").show();
			});
		
		$("#hide20").click(function(){
			$("figure").hide();
			});
			$("#show20").click(function(){
				$("figure").show();
			});
		
		/* Hide and show packages option in mobile  */
		
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(0).fadeOut('slow');  	
		}); 
		/* END PRELOADER JS */

		/* START MENU JS */
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

			$(window).on('scroll', function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
						
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});						
		/*END MENU JS*/ 
		
		/*START PROGRESS-BAR JS*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
					$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS-BAR JS*/
		
								
		/*START COUNDOWN JS*/
		$('.counter_feature').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/*END COUNDOWN JS */

		  
		function autoPlayYouTubeModal() {
			var trigger = $("body").find('[data-toggle="modal"]');
			trigger.on("click",function() {
			  var theModal = $(this).data("target"),
				videoSRC = $('#video-modal iframe').attr('src'),
				videoSRCauto = videoSRC + "?autoplay=1";
			  $(theModal + ' iframe').attr('src', videoSRCauto);
			  $(theModal + ' button.close').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			  $('.modal').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			});
		  }
		  autoPlayYouTubeModal();		  
		/*END VIDEO JS*/
		
		/* starts:Add to cart button option*/
			$('.pckg-cart').click(function(e){
				e.preventDefault();
				e.stopImmediatePropagation();
				var dataPackage = $(this).data('package');
				var dataPrice = $(this).data('price');
			$.ajax({
						url: seven_star_ajaxurl,
						datatype: 'JSON',
						type: 'post',
						data: {
								action     : 'add_to_cart', // load function hooked to: "wp_ajax_*" action hook
								dataPackage : dataPackage,         
								dataPrice  : dataPrice,        
							},
						success:function(returnData) {
								console.log(returnData)
								if(returnData.data.status == 'success'){								
									window.location.href = seven_star_carturl
								}else{
									alert('We are unable to process your request, please try after sometimes.');
								}
						}
					});
			});
			
		/* ends:Add to cart button option*/
		
		/* starts:Remove item from cart button option*/
			$('.remove-package').click(function(e){
				e.preventDefault();
				e.stopImmediatePropagation();
				var dataPackage = $(this).data('package');
				// alert(dataPackage);
			$.ajax({
						url: seven_star_ajaxurl,
						datatype: 'JSON',
						type: 'post',
						data: {
								action     : 'remove_from_cart', // load function hooked to: "wp_ajax_*" action hook
								dataPackage : dataPackage,           
							},
						success:function(returnData) {
								console.log(returnData)
								if(returnData.data.status == 'success'){									
									window.location.href = seven_star_carturl
								}else{
									alert('We are unable to process your request, please try after sometimes.');
								}
						}
					});
			});
			
		/* ends:Remove item from cart button option*/
		
		
		/*START PARTNER LOGO*/
		if($('.partner').length){
		$('.partner').owlCarousel({
				autoPlay: 3000, //Set AutoPlay to 3 seconds
				items : 4,
				itemsDesktop : [1199,3],
				itemsDesktopSmall : [979,3]
			});
		}
		/*END PARTNER LOGO*/
		
		/* starts:Check applied coupons*/
			$('.apply_coupons').click(function(e){
				e.preventDefault();
				e.stopImmediatePropagation();
				var coupon_codes = $('#coupon_codes').val();
				if(coupon_codes  !== ''){
					$.ajax({
							url: seven_star_ajaxurl,
							datatype: 'JSON',
							type: 'post',
							data: {
									action     : 'apply_coupon', // load function hooked to: "wp_ajax_*" action hook
									couponCodes : coupon_codes,           
								},
							success:function(returnData) {
									console.log(returnData)
									if(returnData.data.status == 'success'){
										$('.total-price').text('$'+returnData.data.total_price);
										$('.add-coupon-code').html('<h4 class="text-center">Thank you. '+returnData.data.coupon_discount+'% coupon discount has been applied. </div>');
										// alert('Coupon code applied successfully');										
									}else{
										alert('Invalid Coupon code.');
									}
							}
						});
				}else{
					alert('Please enter a coupon code');
				}
			});
			
		/* ends:Check applied coupons*/
		
		
		/* starts: For two checkout payment   */
		
		// Called when token created successfully.
    var successCallback = function(data) {
        var myForm = document.getElementById('myCCForm');

        // Set the token as the value for the token input
        myForm.token.value = data.response.token.token;

        // IMPORTANT: Here we call `submit()` on the form element directly instead of using jQuery to prevent and infinite token request loop.
        myForm.submit();
    };

    // Called when token creation fails.
    var errorCallback = function(data) {
        if (data.errorCode === 200) {
            tokenRequest();
        } else {
            alert(data.errorMsg);
        }
    };

    var tokenRequest = function() {
        // Setup token request arguments
        var args = {
            // sellerId: "901363794", // Sandbox
            // publishableKey: "52BA790D-D76C-4856-8CE2-D88EB8BCF7E3", // Sandbox
						sellerId: "203472497", // live
            publishableKey: "6EB9B003-CEC6-4FED-93C0-B84F0CC25B96", // live
            ccNo: $("#ccNo").val(),
            cvv: $("#cvv").val(),
            expMonth: $("#expMonth").val(),
            expYear: $("#expYear").val()
        };

        // Make the token request
        TCO.requestToken(successCallback, errorCallback, args);
    };
		
		function isEmail(email) {
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
		if($('#myCCForm').length) {
        // Pull in the public encryption key for our environment
        
				TCO.loadPubKey('production');
        // TCO.loadPubKey('sandbox');

        $("#myCCForm").submit(function(e) {
						e.stopImmediatePropagation();
						var email = isEmail($("#2check-email-id").val());
            // Call our token request function
						if(!email){
							alert('Please enter valid email id');
						}else{
							tokenRequest();
						}

            // Prevent form from submitting
            return false;
        });
    };
		
		/* ends: For two checkout payment   */
		
	}); 		
	/* Promotional pop up */
	if($('#promotional-popup-modal').length){		
		 setTimeout(function() {
			$("#promotional-popup-modal").modal('show');				
    },3500);
	}
	
})(jQuery);