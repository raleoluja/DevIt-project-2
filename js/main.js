//smooth scroll
function smoothScroll(){
	$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
			});
		});
	});
}

// load more gallery
function galleryExtend() {
	$(document).ready(function(){
		$(".work-item").slice(0, 8).show();
		$(".btn-load").on("click", function(e){
		  e.preventDefault();
		  $(".work-item:hidden").slice(0, 4).slideDown();
		  if($(".work-item:hidden").length == 0) {
			$(".btn-load").text("No Content").addClass("noContent");
		  }
		});
	});
}

//video play
function videoPlay() {
	$("video").click(function (e) {
		if(e.offsetY < ($(this).height() - 36))
		{
			if(this.paused){
				this.play();
				$(".video-play-btn").addClass("play-hidden");
			} else {
				this.pause();
				$(".video-play-btn").removeClass("play-hidden");
			}	
		}
	});
}

//swiper
function swiper() {
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		  },
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	});
}

//navigation
function navigation() {
	var $navBtn = $('.js-toggle');
	var $nav = $('.js-nav');
	var $navLink = $('.js-link');
	var navBtnOpen = 'nav-toggle-open';
	var navOpen = 'nav-open';

	$navBtn.on('click', function() {
		$(this).toggleClass(navBtnOpen);
		$nav.toggleClass(navOpen);
	});

	$navLink.on('click', function() {
		$navBtn.removeClass(navBtnOpen);
		$nav.removeClass(navOpen);
	});
}

galleryExtend();
smoothScroll();
videoPlay();
swiper();
navigation();