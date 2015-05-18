describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should fail', function() { expect(true).to.be.true; });
});

describe("sinon example test", function () {
    var time2013_10_01;
 
    time2013_10_01 = (new Date(2013, 10-1, 1)).getTime();
 
    before(function() {
        // sinon was defined in global scope 
        this.fakeTimer = new sinon.useFakeTimers(time2013_10_01);
    });
 
    it("some test", function() {
        //test 
    });
 
    after(function() {
        this.fakeTimer.restore();
    });
 
});

// //
// var $elemDate = $('.js-date');
// // Ação para desabilitar/habilitar campos de datas
// $('.js-disabledate').on('click', function() {
// 	var $elem = $(this);

// 	if( $elem.is(':checked') ){
// 		$elemDate.prop('disabled', true);
// 		$elemDate.val('');

// 		$elemDate.each(function() {
// 			Desafio.validation.removeError(this);
// 		});
// 	} else {
// 		$elemDate.prop('disabled', false);
// 	}
// });

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