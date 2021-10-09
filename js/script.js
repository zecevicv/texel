let canvas_init = false;
let canvasAnim = [];
let sectionNames = ['Home', 'Together', 'Canvas', 'Products', 'Infrastructure', 'Technology', 'Grow', 'Customers', 'Blog', 'Get Demo']
window.addEventListener('load', function () {


	var full_vid = document.querySelector('#full_vid');
	var float = document.querySelector('#float');
	var float1 = document.querySelector('#float_1');
	var float2 = document.querySelector('#float_2');
	var body = document.querySelector('body');

	intro();

	function intro() {
		setTimeout(function () {
			window.addEventListener('mousemove', killIntro)
			window.addEventListener('keypress', killIntro)
		}, 100)

		function killIntro(e) {
			introTime = 100;
			clearInterval(introTimer);
			start();
			window.removeEventListener('mousemove', killIntro)
			window.removeEventListener('keypress', killIntro)
		}

		let dt = new Date();
		let introTime = 0;
		let introTimer = setInterval(function () {
			introTime++;
			if (introTime > 80) {
				clearInterval(introTimer);
				start();
			}

		}, 100);

		function start() {
			let vid = full_vid.children[0];
			let vid1 = videoDisplay.slides[0].children[0]
			let vid2 = float1.children[0]
			let vid3 = float2.children[0]
			full_vid.classList.add('cliped')
			setTimeout(function () {
				float.classList.add('on')
				float1.classList.add('on')
				float2.classList.add('on')
				full_vid.classList.add('faded')
				//                          console.log(vid.currentTime)
				//                          console.log(vid1.currentTime)
				//                          console.log(vid2.currentTime)
				//                          console.log(vid3.currentTime)
				//vid1.currentTime=vid2.currentTime= vid3.currentTime=vid.currentTime; 
				body.classList.remove('locked');

			}, 2000)
		}




	}


	document.querySelector('#sendform').addEventListener('click', function (e) {
		document.querySelector('[name="email"]').addEventListener('focus', function () {
			document.querySelector('.demoform-container .error').classList.remove('on')
		})
		var email = document.querySelector('[name="email"]').value;
		if (!ValidateEmail(email)) {
			document.querySelector('.demoform-container .error').classList.add('on')
		} else {
			document.querySelector('[name="email"]').value = '';
			document.querySelector('#thanks').classList.add('on')
			document.querySelector('[name="demoform"]').classList.add('off')
			document.querySelector('.demoform-container .error').classList.remove('on')
		}
		e.preventDefault();
		return false;


	})

	function ValidateEmail(input) {

		return input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

	}
	let lastVIdeo = 0;
	let lastVIdeoCarusel = 0;
	let synteval;


	function slideSHow(play) {
		var num = document.querySelector('#carusel').swiper.realIndex + 1;
		for (var i = 1; i < 5; i++) canvasAnim[i].gotoAndStop(1)
		if (play) canvasAnim[num].gotoAndPlay(1)
	}

	const storiesSwiper = new Swiper('#stories-swiper', {
		slidesPerView: 2,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			1024: {
				spaceBetween: 100,
				slidesPerView: 2
			}
		},
		observer: true,

		mousewheel: false,
		pagination: {
			el: '.stories-swiper-pagination',
			type: 'bullets',
		},
	});
	const videoDisplay = new Swiper('#video-display', {

		on: {
			init: function () {

				document.querySelector('body').classList.remove('init')

			},

		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});
	const videoDisplayCarusel = new Swiper('#video-display-carusel', {

		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});
	const main_swiper = new Swiper('#main', {
		direction: 'vertical',
		speed: 1700,
		observer: true,
		preloadImages: false,
		lazy: true,
		simulateTouch: false,

		pagination: {
			el: ".main-swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '" data-label="' + sectionNames[index] + '" title="' + sectionNames[index] + '"></span>';
			}
		},
		parallax: true,
		init: false,
		mousewheel: {
			invert: false,
		},
		scrollbar: {
			el: '#swiper-scrollbar-main',
			draggable: true,
		},
		on: {
			reachEnd: function () {


			},
			slideChangeTransitionStart: function (e) {
				if (this.realIndex > 6) {
					document.querySelector('body').classList.add('other');
				} else {
					document.querySelector('body').classList.remove('other')
				}
				if (this.isEnd) {
					document.querySelector('body').classList.add('end');

				} else {
					document.querySelector('body').classList.remove('end')

				}
			},
			slideChangeTransitionEnd: function (e) {
				videoDisplay.update();



				//                 
				//                  switch(this.realIndex){
				//                            
				//                        case 5:   case 6:
				//						  		document.getElementById('main').swiper.params.freeMode.enabled=true
				//						  break;
				//					  default:
				//						  		document.getElementById('main').swiper.params.freeMode.enabled=false
				//						  
				//				  }


			},
			init: function () {
				document.querySelector('#navlabel').innerHTML = document.querySelector('.main-swiper-pagination .swiper-pagination-bullet-active').dataset.label
			},
			slideChange: function (e) {

				document.querySelector('#navlabel').innerHTML = document.querySelector('.main-swiper-pagination .swiper-pagination-bullet-active').dataset.label
				document.querySelector('html').className = 's' + this.realIndex;

				if (this.realIndex > 6) {
					document.querySelector('body').classList.add('other');
				} else {
					document.querySelector('body').classList.remove('other')
				}
				let vid2 = float1.children[0];
				let vid3 = float2.children[0];
				if (e.previousIndex && !e.activeIndex) {

					body.classList.remove('floating');
					vid2.play();
					vid3.play();
				} else {
					body.classList.add('floating');
					vid2.pause();
					vid3.pause();

				}


				switch (this.realIndex) {

					case 5:

						document.querySelector('.dark-container').classList.add('on')
						document.querySelector('.dark-container').classList.add('dark1')
						document.querySelector('.dark-container').classList.remove('dark2')
						document.querySelector('.dark-container').classList.remove('stories')
						document.getElementById('left').classList.add('dark')

						break;
					case 6:
						document.querySelector('.dark-container').classList.add('on')
						document.querySelector('.dark-container').classList.add('dark2')
						document.querySelector('.dark-container').classList.remove('dark1')
						document.querySelector('.dark-container').classList.remove('stories')
						document.getElementById('left').classList.add('dark')

						break;
					case 7:
						document.querySelector('.dark-container').classList.add('on')
						document.querySelector('.dark-container').classList.add('dark2')
						document.querySelector('.dark-container').classList.remove('dark1')
						document.querySelector('.dark-container').classList.add('stories')
						document.getElementById('left').classList.remove('dark')

						break;
					default:
						document.querySelector('.dark-container').className = 'dark-container'
						document.getElementById('left').classList.remove('dark')
				}



				if (videoDisplay) {
					videoDisplay.slideTo(this.realIndex, 500);

					lastVIdeo = videoDisplay.activeIndex;
					pasueAllBut(videoDisplay.slides[lastVIdeo].children[0])
					if (this.realIndex == 3) {

						pasueAllBut(videoDisplayCarusel.slides[lastVIdeoCarusel].children[0])
						lastVIdeoCarusel = videoDisplayCarusel.activeIndex;
						videoDisplayCarusel.slides[lastVIdeoCarusel].children[0].play();
						slideSHow(true)
					} else {
						slideSHow(false)
						if (videoDisplay.slides[lastVIdeo].children[0]) {
							videoDisplay.slides[lastVIdeo].children[0].play();
							if (videoDisplay.slides[lastVIdeo].children[0].attributes.mediagroup) {
								var group = videoDisplay.slides[lastVIdeo].children[0].attributes.mediagroup.value;
								var groupelements = [""];
								document.querySelectorAll('[mediagroup="' + group + '"]').forEach(function (e) {
									if (e.classList.contains('controller')) {
										groupelements[0] = e;
									} else {
										e.play();
										groupelements.push(e)
									}
								})
								groupelements[1].currentTime = groupelements[2].currentTime = groupelements[0].currentTime
								//								synteval=setInterval(function(){
								//									groupelements[1].currentTime=groupelements[2].currentTime=groupelements[0].currentTime
								//									
								//								},5000)
							}
						}

					}

				}
			},
		},
	});



	new Swiper('#blog-slider', {
		speed: 400,
		initialSlide: 0,
		breakpoints: {
			320: {
				slidesPerView: 1.5,
			},
			1024: {
				slidesPerView: 4
			}
		},
		observer: true,
		mousewheel: false,
	})
	if (window.innerWidth < 1024) {


		document.querySelectorAll('.spacer').forEach(function (e) {
			e.remove()
		})
	}
	const carusel_swiper = new Swiper('#carusel', {
		speed: 400,
		initialSlide: 0,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 4
			}
		},
		observer: true,
		mousewheel: false,

		pagination: {
			el: '.swiper-pagination-carusel',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-prev',
			prevEl: '.swiper-button-next',
		},
		scrollbar: {
			el: '#scrollbar-carusel',
			draggable: true,
			hide: false,
			dragSize: 40
		},
		on: {
			beforeInit: function () {
				if (!canvas_init) {
					for (var i = 1; i < 5; i++) {
						initAnim(i);
					}
					canvas_init = true;
				}
			},
			slideChangeTransitionEnd: function (e) {
				slideSHow(true)
			},
			slideChange: function (e) {
				if (videoDisplayCarusel) {
					videoDisplayCarusel.slideTo(this.realIndex, 500)
					videoDisplayCarusel.slides[lastVIdeoCarusel].children[0].pause()
					lastVIdeoCarusel = videoDisplayCarusel.activeIndex;
					videoDisplayCarusel.slides[lastVIdeoCarusel].children[0].play();
				}
				var classArray = [];
				var i = 0;
				this.slides.forEach(function (e) {
					if (e.classList.contains('swiper-slide-active')) {

						i++;
					}
					if (i > 0 && i < 4) classArray.push(e)
					i++;
				})


			},
		},
	});


	document.getElementById('show_menu').addEventListener('click', function () {
		document.getElementById('main-menu').classList.add('on')
	})
	document.querySelectorAll('.requestdemo').forEach(function (e) {
		e.addEventListener('click', function (e) {
			e.preventDefault();
			document.querySelector('#thanks').classList.remove('on')
			document.querySelector('[name="demoform"]').classList.remove('off')
			document.getElementById('main-menu').classList.remove('on')
			document.getElementById('demo').classList.add('on');

			return false;
		})

	})
	document.getElementById('close_manue').addEventListener('click', function () {
		document.getElementById('main-menu').classList.remove('on')

	})
	document.getElementById('close_demo').addEventListener('click', function () {
		document.getElementById('demo').classList.remove('on')

	})
	main_swiper.init();
	if (window.innerWidth > 1024) {
		//  main_swiper.init();
	} else {
		document.querySelector('body').classList.add('mobile')
	}
})

function pasueAllBut(v) {
	document.querySelectorAll('video').forEach(function (e) {
		if (!e.paused && e != v && !e.autoplay) e.pause();
	})
}

function initAnim(id) {

	console.log('ccc_' + id)
	var canvas, stage, exportRoot, fnStartAnimation;
	///canvas = window.innerWidth<1024?document.querySelector('.swiper-slide-active #canvas_'+id):document.querySelector('.swiper-slide-next #canvas_'+id);  
	canvas = document.querySelector('#canvas_' + id);
	console.log(canvas)
	var comp = eval('AdobeAn' + id).getComposition('6A00759CF9CBB542AF481F4E0526358F');
	var lib = comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function (evt) {
		var images = comp.getImages();
		if (evt && (evt.item.type == "image")) {
			images[evt.item.id] = evt.result;
		}
	});
	loader.addEventListener("complete", function (evt) {
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for (i = 0; i < ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet({
				"images": [queue.getResult(ssMetadata[i].name)],
				"frames": ssMetadata[i].frames
			})
		}
		switch (id) {
			case 1:
				exportRoot = new lib.co_viewing();
				break;
			case 2:
				exportRoot = new lib.live_commentator();
				break;
			case 3:
				exportRoot = new lib.online_feeds();
				break;
			case 4:
				exportRoot = new lib.personalized_screens();
				break;
		}
		stage = new lib.Stage(canvas);
		fnStartAnimation = function () {
			stage.addChild(exportRoot);
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);

		}
		eval('AdobeAn' + id).compositionLoaded(lib.properties.id);
		fnStartAnimation();
	});
	var lib = comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}