//
$('.js-date').pickadate({
	format: 'dd/mm/yyyy',
	formatSubmit: 'dd/mm/yyyy',
	closeOnSelect: true,
    closeOnClear: true
});

//
var elemDate = $('.js-date');
$('.js-disabledate').on('click', function(){
	var elem = $(this);

	if( elem.is(':checked') ){
		elemDate.prop('disabled', true);
	} else {
		elemDate.prop('disabled', false);
	}
});
