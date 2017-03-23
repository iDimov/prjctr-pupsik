import imagesloaded from 'imagesloaded'

let loaded = false;

window.onload = () => {
	loaded = true;
};

$(()  => {
	const $preloader = $('.preloader');
	const $preloaderText = $preloader.find('.preloader__value');

	const removeElement = ($el) => {
		$el.fadeOut(1000, () => {
			$el.remove();
		});
	};

	if (loaded) {
	removeElement($preloader);	
	} else {
			$(window).on('load', () => {
				removeElement($preloader);		
			});
	};

setTimeout(() => {
	removeElement($preloader)
}, 2000);
	// const $window = $(window);

	$('.main').imagesLoaded()
	.progress( (instance) =>  {
		const percentage = Math.round(100/ instance.images.length * instance.progressedCount);
		$preloaderText.text(percentage + '%');
		const size = 30 + percentage;
		$preloaderText.css('width', size + 'px').css('height', size + 'px');	
		console.log('progress', percentage);
	})
	.always( (instance) => {
		$preloader.fadeOut(1000, () => {
			$preloader.remove();
		})
	})

})