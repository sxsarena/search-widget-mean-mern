//
Desafio.util = (function() {

	var enableDisableFields = function($element, $target) {
		var $elemDate = $target;
		// Ação para desabilitar/habilitar campos de datas
		$element.on('click', function() {
			var $elem = $(this);

			if( $elem.is(':checked') ){
				$elemDate.prop('disabled', true);
				$elemDate.val('');

				$elemDate.each(function() {
					Desafio.validation.removeError(this);
				});
			} else {
				$elemDate.prop('disabled', false);
			}
		});
	};

	var alphaFieldsValidate = function($element) {
		// Validacao para não permitir caracteres especiais e digitos
		$element.on("keydown keyup", function() {
		    $(this).val( $(this).val().replace(/[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ ]/g, "") );
		});
	};

	var formSubmit = function($form, $fields) {
		// Validacao do formulario
		$form.on('submit', function(event) {
			event.preventDefault();
			var empty = false;
			$fields.each(function() {
				// verificao se o campo é criado pelo plugin typeahead
				if(!$(this).hasClass('tt-hint')) {
					var fieldValidation = Desafio.validation.init(this);
					if(fieldValidation === 'invalid'){
						empty = true;
					}
					
				}
			});
			// Campos válidos
			if(!empty){
				this.submit();
			}
		});
	};

	var alterFields = function($fields) {
		$fields.on('keyup change', function(event) {
			event.preventDefault();
			// verificao se o campo é criado pelo plugin typeahead
			if(!$(this).hasClass('tt-hint')) {
				Desafio.validation.init(this);
			}
		});
	};
  
	return {
		enableDisableFields: enableDisableFields,
		alphaFieldsValidate: alphaFieldsValidate,
		formSubmit: formSubmit,
		alterFields: alterFields
	};

})();