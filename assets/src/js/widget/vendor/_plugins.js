// pickadate
$( '.js-date' ).pickadate({
    format: 'dd/mm/yyyy',
    formatSubmit: 'dd/mm/yyyy',
    selectMonths: true,
    selectYears: true,
    closeOnSelect: true,
    closeOnClear: true
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
