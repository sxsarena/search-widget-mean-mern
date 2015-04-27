//
var $elemDate = $('.js-date');
// Ação para desabilitar/habilitar campos de datas
$('.js-disabledate').on('click', function() {
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

// Validacao para não permitir caracteres especiais e digitos
$(document).on("keydown keyup", ".js-field-string", function() {
    $(this).val( $(this).val().replace(/[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ ]/g, "") );
});

// Validacao do formulario
$('.form').on('submit', function(event) {
	event.preventDefault();
	$('.form-field:enabled').each(function() {
		// verificao se o campo é criado pelo plugin typeahead
		if(!$(this).hasClass('tt-hint')) {
			Desafio.validation.init(this);
		}
	});
});

$('.form-field:enabled').on('keyup change', function(event) {
	event.preventDefault();
	// verificao se o campo é criado pelo plugin typeahead
	if(!$(this).hasClass('tt-hint')) {
		Desafio.validation.init(this);
	}
});