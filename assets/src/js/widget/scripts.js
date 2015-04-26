//
$('.js-date').pickadate({
	format: 'dd/mm/yyyy',
	formatSubmit: 'dd/mm/yyyy',
	closeOnSelect: true,
    closeOnClear: true
});

//
var $elemDate = $('.js-date');
var elemClassError = 'error-field';
var messageError = "Campo obrigatório";

$('.js-disabledate').on('click', function() {
	var $elem = $(this);

	if( $elem.is(':checked') ){
		$elemDate.prop('disabled', true);
		$elemDate.val('');

		$elemDate.each(function() {
			var $elem = $(this);
			if( $elem.hasClass(elemClassError) ) {
				var $elemWrap = $($elem.closest('.error'));
				$elem.removeClass(elemClassError);
				$elemWrap.find('.error-msg').remove();
				$elem.unwrap('.error');
			}
		});
	} else {
		$elemDate.prop('disabled', false);
	}
});

//
var validation = function() {};

validation.prototype.init = function (element) {
	var $elem = $(element);

	if( $elem.val() === '' ){

		messageError = $elem.data('msg-require') || messageError;

			$elem.addClass(elemClassError);
			$($elem).wrap( "<span class='error'></span>" );
			$("<span class='error-msg'>"+messageError+"</span>").insertAfter($elem);

	} else {

		if( $elem.hasClass(elemClassError) ) {
			var $elemWrap = $($elem.closest('.error'));
			$elem.removeClass(elemClassError);
			$elemWrap.find('.error-msg').remove();
			$elem.unwrap('.error');
		}

	}
};


$(document).on("keydown keyup", ".js-field-string", function() {
    $(this).val( $(this).val().replace(/[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ ]/g, "") );
});

$('.form').on('submit', function(event) {
	event.preventDefault();
	$('.form-field:enabled').each(function() {
		new validation().init(this);
	});
});

$('.form-field:enabled').on('keyup change', function(event) {
	event.preventDefault();
	new validation().init(this);
});
