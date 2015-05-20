describe("Ação para desabilitar/habilitar campos de datas", function() {
   
    var $elemDate = $('.js-date');
    

    var evObj = new CustomEvent('click');
    evObj.initEvent('click', true, false);
    $('.js-disabledate').dispatchEvent(evObj);


    // $('.js-disabledate').on('click', function() {
    //  var $elem = $(this);

    //  if( $elem.is(':checked') ){
    //      $elemDate.prop('disabled', true);
    //      $elemDate.val('');

    //      $elemDate.each(function() {
    //          Desafio.validation.removeError(this);
    //      });
    //  } else {
    //      $elemDate.prop('disabled', false);
    //  }
    // });

});


// // Validacao para não permitir caracteres especiais e digitos
// $(document).on("keydown keyup", ".js-field-string", function() {
//     $(this).val( $(this).val().replace(/[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ ]/g, "") );
// });

// // Validacao do formulario
// $('.form').on('submit', function(event) {
// 	event.preventDefault();
// 	var empty = false;
// 	$('.form-field:enabled').each(function() {
// 		// verificao se o campo é criado pelo plugin typeahead
// 		if(!$(this).hasClass('tt-hint')) {
// 			var fieldValidation = Desafio.validation.init(this);
// 			if(fieldValidation === 'invalid'){
// 				empty = true;
// 			}
			
// 		}
// 	});
// 	// Campos válidos
// 	if(!empty){
// 		this.submit();
// 	}
// });

// $('.form-field:enabled').on('keyup change', function(event) {
// 	event.preventDefault();
// 	// verificao se o campo é criado pelo plugin typeahead
// 	if(!$(this).hasClass('tt-hint')) {
// 		Desafio.validation.init(this);
// 	}
// });