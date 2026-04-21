(function ($) {
    "use strict";

    ///=============  * Theme Loader  =============\\\
    function themeLoader() {
        $('.theme-loader').hide();
    }

    ///=============  * Mobile Menu  =============\\\
    document.addEventListener("DOMContentLoaded", function() {
        var mobileMenu = document.getElementById("mobilemenu");
        var mainMenu = document.querySelector(".vertical_menu");
        var clonedMenu = mobileMenu.cloneNode(true);
        mainMenu.appendChild(clonedMenu);
    });
    jQuery(document).ready(function($) {
        $('.vertical_menu ul li.menu-item-has-children').append('<span class="mobile-arrows far fa-plus"></span>');
        $(".vertical_menu .mobile-arrows").on("click",function() {
            $(this).parent().find('ul:first').slideToggle(300);
            $(this).toggleClass('is-open');
        });
    });

    ///=============  * Menu Bar Popup Icon  =============\\\
    function menuBarPopup() {
        $('.menu__bar i').on("click", function() {
            $(this).toggleClass('clicked');
            $('.menu__bar-popup').toggleClass('show');
            $('.menu__bar-popup-overlay').addClass('show');
        });

        $('.menu__bar-popup .close').on("click", function() {
            $('.menu__bar i').removeClass('clicked');
            $('.menu__bar-popup').removeClass('show');
            $('.menu__bar-popup-overlay').removeClass('show');
        });
    }

    ///=============  * Desktop Megamenu Click  =============\\\
    jQuery(document).ready(function($) {
        $('.has-megamenu > a, .has-dropdown > a').off('click').on('click', function(e) {
            if (window.innerWidth >= 1200) {
                e.preventDefault();
                e.stopPropagation();
                
                var $li = $(this).parent();
                var isActive = $li.hasClass('active');

                // Close all other open dropdowns
                $('.has-megamenu, .has-dropdown').not($li).removeClass('active');

                // Toggle the current one
                if (isActive) {
                    $li.removeClass('active');
                } else {
                    $li.addClass('active');
                }
            }
        });

        // Close when clicking anywhere else
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.active').length) {
                $('.has-megamenu, .has-dropdown').removeClass('active');
            }
        });
    });

    ///=============  * Search Icon Popup  =============\\\
    function searchIconPopup() {
        $(".header__area-menubar-center-search-icon.open, .header__area-menubar-right-search-icon.open").on("click", function () {
            $(".header__area-menubar-center-search-box, .header__area-menubar-right-search-box")
                .fadeIn()
                .addClass("active");
        });

        $(".header__area-menubar-center-search-box-icon, .header__area-menubar-right-search-box-icon").on("click", function () {
            $(this).fadeIn().removeClass("active");
        });

        $(".header__area-menubar-center-search-box-icon i, .header__area-menubar-right-search-box-icon i").on("click", function () {
            $(".header__area-menubar-center-search-box, .header__area-menubar-right-search-box")
                .fadeOut()
                .removeClass("active");
        });
    }

    ///=============  * Sidebar Popup  =============\\\
    function sidebarPopup() {
        $(document).on("click", ".header__area-menubar-right-sidebar-icon", function () {
            $('.header__area-menubar-right-sidebar-popup').addClass('active');
            $('.sidebar-overlay').addClass('show');
        });

        $(document).on("click", ".header__area-menubar-right-sidebar-popup .sidebar-close-btn", function () {
            $('.header__area-menubar-right-sidebar-popup').removeClass('active');
            $('.sidebar-overlay').removeClass('show');
        });
    }

    ///=============  * CounterUp  =============\\\
    function counterUp() {
        var counter = $('.counter');
        counter.counterUp({
            time: 2500,
            delay: 100
        });
    }

    ///============= * Skill Bar  =============\\\
    function skillBar() {
        if($('.skill__area-item-bar').length) {
            $('.skill__area-item-bar').appear(function() {
                var el = $(this);
                var percent = el.data('width');
                $(el).css('width', percent + '%');
            }, {
                accY: 0
            });
        }
    }

    ///=============  * Video Popup  =============\\\
    function videoPopup() {
        $('.video-popup').magnificPopup({
            type: 'iframe'
        });
    }

    ///=============  * Banner Slider (Disabled - Initialized in index.html)  =============\\\
    function bannerSlider() {
        // Initialization moved to index.html for better integration with page-specific animations
    }

    ///=============  * Blog Slider  =============\\\
    function blogSlider() {
        var swiper = new Swiper(".blog_slider", {
            loop: true,
            spaceBetween: 25,
            speed: 800,
            autoplay: {
                delay: 4000,
                reverseDirection: false,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".blog-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1025: {
                    slidesPerView: 3,
                },
                1600: {
                    slidesPerView: 3,
                },
            },
        });
    }

    ///=============  * Portfolio Slider  =============\\\
    function portfolioTwoSlider() {
        var swiper = new Swiper(".portfolio_two_slider", {
            loop: true,
            spaceBetween: 25,
            centeredSlides: "true",
            speed: 800,
            autoplay: {
                delay: 4000,
                reverseDirection: false,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: '.portfolio-button-prev',
                nextEl: '.portfolio-button-next',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1025: {
                    slidesPerView: 2,
                },
                1600: {
                    slidesPerView: 4,
                },
            },
        });
    }

    ///=============  * Pricing Plan  =============\\\
    function pricingPlan() {
        $(document).ready(function(){
            $('.pricing__plan-btn-item, .features__area-btn-item').on("click", function(){
                $('.pricing__plan-btn-item, .features__area-btn-item').removeClass('active');
                $(this).addClass('active');
                var tabId = $(this).data('tag');
                $('.pricing__plan-content-item, .features__area-content-item').removeClass('active').addClass('d-none');
                $('#'+tabId).addClass('active').removeClass('d-none');
            });
        });
    }

    ///=============  * Achievements  =============\\\
    function achievements() {
        $(document).ready(function () {
            $('.award_item').mouseenter(function() {
                $('.award_item').removeClass('active');
                $(this).addClass('active');
            });
        });
    }

    ///=============  * Testimonial Slider  =============\\\
    function testimonialSlider() {
        var swiper = new Swiper(".testimonial_slide", {
            spaceBetween: 25,
            centeredSlides: true,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 4000,
                reverseDirection: false,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testimonial_next',
                prevEl: '.testimonial_prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1.4,
                },
                1025: {
                    slidesPerView: 2.4,
                },
                1600: {
                    slidesPerView: 2.5,
                },
            },
        });
    }

    ///=============  * Team Slider  =============\\\
    function teamSlider() {
        var swiper = new Swiper(".team_slider", {
            loop: true,
            spaceBetween: 25,
            speed: 800,
            autoplay: {
                delay: 4000,
                reverseDirection: false,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                700: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }

    ///=============  * WOW  =============\\\
    function wowAnimation() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: "wow",
                animateClass: "animated",
                mobile: true,
                live: true,
            });
            wow.init();
        }
    }

    ///=============  * Portfolio Filter  =============\\\
    function portfolioFilter() {
        $(window).on('load', function(){
            var $grid = $('.gallery__area-active').isotope();
            $('.gallery__area-button').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            $('.gallery__area-button').on('click', 'button', function () {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    }

    ///=============  * Dark & Light Switch  =============\\\
    function darkLightSwitch() {
        $('.switch__tab-open').on('click', function () {
            $(this).hide();
            $('.switch__tab-close').show();
            $('.switch__tab-icon').css('right', '260px');
            $('.switch__tab-area').css({
                'right': '0',
            });
        });
        $('.switch__tab-close').on('click', function () {
            $(this).hide();
            $('.switch__tab-open').show();
            $('.switch__tab-icon').css('right', '0');
            $('.switch__tab-area').css({
                'right': '-260px',
            });
        });
        $('.type-dark-mode button').on('click', function (e) {
            $(this).addClass('active').siblings().removeClass('active');
            var themeDark = $('.type-dark-mode button.active').attr('data-mode');
            if (themeDark == 'dark-mode') {
                $('body').addClass('dark-mode');
            } else {
                $('body').removeClass('dark-mode');
            }
        });
    }

    ///=============  * Custom Cursor  =============\\\
    function customCursor() {
        var ball = document.getElementById("cursor-ball");
        var cursorText = document.getElementById("cursor-text");
        var hoverAreas = document.querySelectorAll('.data_cursor:not(body)');
        var lastHoveredElement = null;
        var mouseX = 0, mouseY = 0;
        var ballX = 0, ballY = 0;
        var speed = 0.15; // Increased speed for snappier feel
        
        function updateCursor() {
            // Smoothly interpolate position
            ballX += (mouseX - ballX) * speed;
            ballY += (mouseY - ballY) * speed;
            
            // Use translate3d for GPU acceleration (smoother)
            const transform = `translate3d(${ballX}px, ${ballY}px, 0)`;
            ball.style.transform = transform + " translate(-50%, -50%)";
            cursorText.style.transform = transform + " translate(-50%, -50%)";
            
            if (lastHoveredElement === null) {
                ball.style.display = 'none';
                cursorText.style.opacity = '0';
            } else {
                ball.style.display = 'block';
            }
            requestAnimationFrame(updateCursor);
        }
        
        function handleMouseMove(e) {
            // Use clientX/Y for fixed positioning (smoother, no scroll jump)
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        
        function handleHoverEnter(e) {
            cursorText.innerHTML = e.target.getAttribute("data-cursor-text") || 'Drag';
            cursorText.style.opacity = '1';
            ball.style.height = "60px";
            ball.style.width = "60px";
            ball.style.backgroundColor = "#000000"; // Solid black circle
            ball.style.border = "none";
            lastHoveredElement = e.target;
        }
        
        function handleHoverLeave(e) {
            cursorText.style.opacity = '0';
            ball.style.height = "12px";
            ball.style.width = "12px";
            ball.style.backgroundColor = "var(--color-1)"; // Restore solid ball
            ball.style.border = "none";
            lastHoveredElement = null;
        }
        
        document.addEventListener('mousemove', handleMouseMove);
        
        hoverAreas.forEach(function (elem) {
            elem.addEventListener('mouseenter', handleHoverEnter);
            elem.addEventListener('mouseleave', handleHoverLeave);
        });
        
        updateCursor();
        
        $(document).ready(function () {
            toggleCursor($('#cursor_style button.active').data('cursor'));
            $('#cursor_style button').on('click', function () {
                $('#cursor_style button').removeClass('active');
                $(this).addClass('active');
                toggleCursor($(this).data('cursor'));
            });
            function toggleCursor(value) {
                if (value == 2) {
                    $('.hide').fadeOut();
                    $('.cursor').removeClass('yes').addClass('no');
                } else {
                    $('.hide').fadeIn();
                    $('.cursor').removeClass('no').addClass('yes');
                }
            }
        });
    }

    ///=============  * Scroll To Top  =============\\\
    function scrollToTop() {
        var scrollPath = document.querySelector('.scroll-up path');
        var pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
        scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updatescroll = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var scroll = pathLength - (scroll * pathLength / height);
            scrollPath.style.strokeDashoffset = scroll;
        }
        updatescroll();
        $(window).scroll(updatescroll);
        var offset = 50;
        var duration = 950;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.scroll-up').addClass('active-scroll');
            } else {
                jQuery('.scroll-up').removeClass('active-scroll');
            }
        });
        jQuery('.scroll-up').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
    }

    ///=============  * GSAP Animations  =============\\\
    function gsapAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.config({
            nullTargetWarn: false,
        });

        // Bounce Animation
        gsap.set(".item_bounce", { opacity: 0, y: -100 });
        ScrollTrigger.batch(".item_bounce", {
            onEnter: (batch) => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.4,
                duration: 1.5,
                ease: "bounce",
            }),
            start: 'top 90%',
        });

        // Split Title Animation
		let des_anim_item_one = document.querySelectorAll(".title_split_anim");
		des_anim_item_one.forEach((des_anim_item) => {
			let data_duration = des_anim_item.getAttribute("data-duration") || 0.80;
			let data_delay = des_anim_item.getAttribute("data-delay") || 0.2;
			let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
			let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
			let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
			let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.06;
			let split_word = new SplitText(des_anim_item, { type: "chars, words" });
			let gsapConfig = {
				duration: data_duration,
				delay: data_delay,
				x: translateX_value || 20,
				y: translateY_value,
				autoAlpha: 0,
				stagger: stagger_value
			};
			if (onscroll_value == 1) {
				gsapConfig.scrollTrigger = {
					trigger: des_anim_item,
					start: 'top 90%'
				};
			}
			gsap.from(split_word.words, gsapConfig);
		});
		let des_anim_item = document.querySelectorAll(".title_split_anim");
		des_anim_item.forEach((des_anim_item) => {    
			let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.04;
			let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
			let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
			let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
			let data_delay = des_anim_item.getAttribute("data-delay") || 0.1;
			let data_duration = des_anim_item.getAttribute("data-duration") || 0.75;
			let split_word = new SplitText(des_anim_item, { type: "chars, words" });
			let gsapConfig = {
				duration: data_duration,
				delay: data_delay,
				x: translateX_value || 20,
				y: translateY_value,
				autoAlpha: 0,
				stagger: stagger_value
			};
			if (onscroll_value == 1) {
				gsapConfig.scrollTrigger = {
					trigger: des_anim_item,
					start: 'top 90%'
				};
			}
			gsap.from(split_word.words, gsapConfig);
		});

		// ── Brand Logo Slider (Continuous Marquee) ──
		var swiper = new Swiper(".brand_slider", {
			loop: true,
			speed: 4500,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			freeMode: true,
			slidesPerView: 2,
			spaceBetween: 30,
			breakpoints: {
				575: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				},
			},
		});

    }
    
    ///=============  * Industries Nav  =============\\\
    function industriesNav() {
        $('.industry-nav-item').on('click', function () {
            $('.industry-nav-item').removeClass('active');
            $(this).addClass('active');
            var target = $(this).data('target');
            $('.industry-detail-content').addClass('d-none').removeClass('active');
            $('#' + target).removeClass('d-none').addClass('active animated fadeIn');
        });
    }

    ///=============  * Megamenu Click Toggle  =============\\\
    function megamenuClickToggle() {
        $('.has-megamenu > a').on('click', function (e) {
            e.preventDefault();
            var $megamenu = $(this).siblings('.megamenu');
            
            // Toggle visibility for ANY device when clicked
            if ($megamenu.css('opacity') === '1' || $megamenu.css('visibility') === 'visible') {
                $megamenu.css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
            } else {
                $('.megamenu').css({
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                $megamenu.css({
                    'opacity': '1',
                    'visibility': 'visible'
                });
            }
        });

        // Close megamenu when clicking outside
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.has-megamenu').length) {
                $('.megamenu').css({
                    'opacity': '',
                    'visibility': ''
                });
            }
        });

        // Allow CSS hover to override natively by resetting JS inline styles when hovered out on desktop
        $('.has-megamenu').on('mouseleave', function() {
            if (window.innerWidth > 991) {
                $('.megamenu').css({
                    'opacity': '',
                    'visibility': ''
                });
            }
        });
    }

    $(document).ready(function () {
        if (typeof themeLoader === 'function') themeLoader();
        if (typeof menuBarPopup === 'function') menuBarPopup();
        if (typeof searchIconPopup === 'function') searchIconPopup();
        if (typeof sidebarPopup === 'function') sidebarPopup();
        
        if ($('.counter').length && typeof $.fn.counterUp === 'function') {
            counterUp();
        }
        
        if ($('.skill__area-item-bar').length && typeof $.fn.appear === 'function') {
            skillBar();
        }
        
        if ($('.video-popup').length && typeof $.fn.magnificPopup === 'function') {
            videoPopup();
        }
        
        if ($('.banner-slider').length && typeof Swiper !== 'undefined') {
            bannerSlider();
        }
        
        if ($('.blog_slider').length && typeof Swiper !== 'undefined') {
            blogSlider();
        }
        
        if ($('.portfolio_two_slider').length && typeof Swiper !== 'undefined') {
            portfolioTwoSlider();
        }
        
        if (typeof pricingPlan === 'function') pricingPlan();
        if (typeof achievements === 'function') achievements();
        
        if ($('.team_slider').length && typeof Swiper !== 'undefined') {
            teamSlider();
        }
        
        if ($('.testimonial_slide').length && typeof Swiper !== 'undefined') {
            testimonialSlider();
        }
        
        if ($(".wow").length && typeof WOW !== 'undefined') {
            wowAnimation();
        }
        
        if ($('.gallery__area-active').length && typeof $.fn.isotope === 'function') {
            portfolioFilter();
        }
        
        if (typeof darkLightSwitch === 'function') darkLightSwitch();
        if (typeof customCursor === 'function') customCursor();
        if (typeof scrollToTop === 'function') scrollToTop();
        
        if (typeof gsap !== 'undefined') {
            gsapAnimations();
        }
        
        if (typeof industriesNav === 'function') industriesNav();
        if (typeof megamenuClickToggle === 'function') megamenuClickToggle();
        if (typeof stickyHeaderBehavior === 'function') stickyHeaderBehavior();
    });

    ///=============  * Sticky Header Hide/Show Behavior  =============\\\
    function stickyHeaderBehavior() {
        const header = document.querySelector('.header__area');
        if (!header) return;
        
        // Add CSS transition for smooth hiding/showing
        header.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
        header.style.top = '0'; // Keep top constant, use transform for better performance
        
        let lastScrollTop = 0;
        let isScrolling = false;
        // Pre-calculate to avoid layout thrashing
        const headerHeight = header.offsetHeight || 100;
        
        window.addEventListener('scroll', function() {
            if (!isScrolling) {
                window.requestAnimationFrame(function() {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    
                    if (scrollTop > headerHeight * 1.5) {
                        if (scrollTop > lastScrollTop) {
                            // Scrolling down - hide header using GPU-accelerated transform
                            header.style.transform = `translateY(-100%)`;
                        } else {
                            // Scrolling up - show header
                            header.style.transform = 'translateY(0)';
                        }
                    } else {
                        // At the very top
                        header.style.transform = 'translateY(0)';
                    }
                    
                    lastScrollTop = Math.max(0, scrollTop);
                    isScrolling = false;
                });
                isScrolling = true;
            }
        }, { passive: true });
    }

})(jQuery);

// ── Nested Category Accordion for Services/Technologies dropdowns ──
jQuery(document).ready(function($) {
    // Click on category title toggles its items
    $(document).on('click', '.services-category-title', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var $cat = $(this).closest('.services-category');
        var wasActive = $cat.hasClass('active');
        // Close all siblings
        $cat.siblings('.services-category').removeClass('active');
        // Toggle current
        if (wasActive) {
            $cat.removeClass('active');
        } else {
            $cat.addClass('active');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    $(document).on('click', '.dropdown-small', function(e) {
        e.stopPropagation();
    });

    // Prevent nested link clicks from closing dropdown
    $(document).on('click', '.megamenu-item-nested', function(e) {
        // Allow navigation - don't stop propagation
    });
});