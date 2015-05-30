//
Desafio.validation = (function() {

	var elemClassError = 'error-field';
	var messageError = "Campo obrigatório";

	var init = function(element) {
		var $elem = $(element);

		if( $elem.val() === '' ){
			this.addError($elem);
			return 'invalid';
		} else {
			this.removeError($elem);
			return 'valid';
		}
	};

	var addError = function(element) {
		var $elem = $(element);

		messageError = $elem.data('msg-require') || messageError;

		$elem.addClass(elemClassError);
		$($elem).wrap( "<span class='error'></span>" );
		$("<span class='error-msg'>"+messageError+"</span>").insertAfter($elem);
	};

	var removeError = function(element) {
		var $elem = $(element);

		if( $elem.hasClass(elemClassError) ) {
			var $elemWrap = $($elem.closest('.error'));
			$elem.removeClass(elemClassError);
			$elemWrap.find('.error-msg').remove();
			$elem.unwrap('.error');
		}

		return true;
	};
  
	return {
		init: init,
		addError: addError,
		removeError: removeError,
	};

})();