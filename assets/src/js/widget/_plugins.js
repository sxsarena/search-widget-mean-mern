// pickadate
$( '.js-date' ).pickadate({
    format: 'dd/mm/yyyy',
    formatSubmit: 'dd/mm/yyyy',
    selectMonths: true,
    selectYears: true,
    closeOnSelect: true,
    closeOnClear: true
});

var elementDatePicker = function(element){
    return $(element).pickadate().pickadate('picker');
};
var fromTo = function(pickerfrom, pickerto){
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

$('.js-entrydate').each(function( index, element ){
    var fromInput = elementDatePicker(element);
    var toInput   = elementDatePicker($('.js-releasedate').eq(index));
    fromTo(fromInput, toInput);
});


// Autocomplete
var terms = new Bloodhound({
	datumTokenizer: Bloodhound.tokenizers.whitespace('value'),
	queryTokenizer: Bloodhound.tokenizers.whitespace,
	prefetch: '/search', 
	remote: {
    	url: '/search/%QUERY',
    	wildcard: '%QUERY'
	}
});

terms.initialize();

$('.js-autocomplete').typeahead({
	minLength: 3,
	highlight: true
},{	
	limit: 7,
	name: 'terms',
	source: terms,
	templates: {
	    notFound:function () {
	        return '<p class="tt-suggestion">Sem resultados</p>';
	    }
	}
});
