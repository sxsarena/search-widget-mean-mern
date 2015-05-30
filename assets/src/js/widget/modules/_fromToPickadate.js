//
Desafio.fromToPickadate = (function() {

	var elementDatePicker = function(element) {
		return $(element).pickadate().pickadate('picker');
	};

	var fromTo = function(pickerfrom, pickerto) {
		if ( pickerfrom.get('value') ) {
	        pickerto.set('min', pickerfrom.get('select'));
	    }
	    if ( pickerto.get('value') ) {
	        pickerfrom.set('max', pickerto.get('select'));
	    }

	    pickerfrom.on('set', function(event){
	        if ( event.select ) {
	            pickerto.set('min', pickerfrom.get('select'));
	        }
	        else if ( 'clear' in event ) {
	            pickerto.set('min', false);
	        }
	    });
	    pickerto.on('set', function(event){
	        if ( event.select ) {
	            pickerfrom.set('max', pickerto.get('select'));
	        }
	        else if ( 'clear' in event ) {
	            pickerfrom.set('max', false);
	        }
	    });
	};

	var init = function($elementFrom, $elementTo) {
		$elementFrom.each(function( index, element ){
		    var fromInput = elementDatePicker(element);
		    var toInput   = elementDatePicker($elementTo.eq(index));
		    fromTo(fromInput, toInput);
		});
	};
  
	return {
		init: init
	};

})();