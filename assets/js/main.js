$(function (){
	var ajaxInitialize = (function () {
		if (jQuery.fn.selectpicker) {
			$("select.selectpicker").selectpicker();
		}

		if (jQuery.fn.datetimepicker) {
			$('.datetimepicker-input').datetimepicker({
				format: 'L',
				locale: 'RU'
			});
		}

		if (jQuery.fn.inputmask) {
			$('.phone-mask input').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});
		}
	});

	$(document).ajaxComplete(ajaxInitialize);

	if (jQuery.fn.selectpicker) {
		$("select.selectpicker").selectpicker();
	}

	if (jQuery.fn.datetimepicker) {
		$('.datetimepicker-input').datetimepicker({
			format: 'L',
			locale: 'RU'
		});
	}

	if (jQuery.fn.inputmask) {
		$('.phone-mask input').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});
	}

	$(document).on('hidden.bs.modal', '.modal', function () {
		$('.modal:visible').length && $(document.body).addClass('modal-open');
	});

	/*oform-input valid*/
	$(document).on('keyup', '.input-item', function() {
		if ( $(this).find('input').length > 0 ) {
			if ( $(this).find('input').val().length === 0 ) {
				$(this).removeClass('valid');
			} else {
				$(this).addClass('valid');
			}
		}
		if ( $(this).find('textarea').length > 0 ) {
			if ( $(this).find('textarea').val().length === 0 ) {
				$(this).removeClass('valid');
			} else {
				$(this).addClass('valid');
			}
		}
	});
	/*end oform-input valid*/

	/*file name*/
	$('.input-file input').change(function(event){
		files = event.target.files;
		$(this).parents('.input-file').find('span').text($(this).val().replace(/.+[\\\/]/, ""));
	});
	/*end file name*/

	if ( $('[data-fancybox]').length > 0 ) {
		$('[data-fancybox]').fancybox({
			loop: true,
			thumbs : {
				autoStart : true
			}
		});
	}

	/* Change counter */
	function changeCounter(selector) {
		const counter = document.querySelectorAll(selector)
		if(!counter) return

		counter.forEach( el => { 
			const countValue = el.querySelector('input')
			const countDec = el.querySelector('.js-dec')
			const countInc = el.querySelector('.js-inc')
	
			countDec.addEventListener('click', () => {
				countValue.value = +countValue.value - 1
				if(countValue.value < 1) {
					countValue.value = 1
					return
				}
			})
			countInc.addEventListener('click', () => {
				countValue.value = +countValue.value + 1
			})
			countValue.addEventListener('change', (e) => {
				if(e.target.value <= 0) {
					e.target.value = 1
					return
				}
			})
		})
	}
	/* END Change counter */




	/* Text-preview add title */
	document.querySelectorAll('.text-preview')?.forEach( el => { el.setAttribute('title', el.innerText) })
	/* END Text-preview add title */



	/*Text-preview OPEN*/
	document.querySelectorAll('.text-preview-open')?.forEach ( el => { 
		el.addEventListener('click', function(){ this.classList.toggle('open') })
	})
	/*END Text-preview OPEN*/


	
	/*Bestweb logo*/
	const bwLogo = document.querySelector('.js-bw-logo')

	const bwLightTheme = '--bw-logo: #e6e6e6; --bw-logo-text:#333; --bw-text:#fff; --bw-text-hover:#fff; --bw-opacity:1; --bw-opacity-hover:0'
	const bwLightThemeHover = '--bw-logo: #676767; --bw-logo-text:#fff; --bw-text:#fff; --bw-text-hover:#fff; --bw-opacity:0; --bw-opacity-hover:1'
	const bwDarkTheme = '--bw-logo: #333; --bw-logo-text:#fff; --bw-text:#333; --bw-text-hover:#333; --bw-opacity:1; --bw-opacity-hover:0'
	const bwDarkThemeHover = '--bw-logo: #e6e6e6; --bw-logo-text:#333; --bw-text:#333; --bw-text-hover:#333; --bw-opacity:0; --bw-opacity-hover:1'

	if(bwLogo && bwLogo.classList.contains('bw-light')) {
		bwLogo.setAttribute('style', bwLightTheme)
		bwLogo.addEventListener('mouseover', function() { this.setAttribute('style', bwLightThemeHover) })
		bwLogo.addEventListener('mouseleave', function() { this.setAttribute('style', bwLightTheme) })
	}
	if(bwLogo && bwLogo.classList.contains('bw-dark')) {
		bwLogo.setAttribute('style', bwDarkTheme)
		bwLogo.addEventListener('mouseover', function() { this.setAttribute('style', bwDarkThemeHover) })
		bwLogo.addEventListener('mouseleave', function() { this.setAttribute('style', bwDarkTheme) })
	}
	/*END Bestweb logo*/

});

document.addEventListener("DOMContentLoaded", function() {
	if ( typeof yall === "function" ) {
		yall({
			observeChanges: true
		});
	}
});