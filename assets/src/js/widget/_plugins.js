// pickadate
$('.js-date').pickadate({
	format: 'dd/mm/yyyy',
	formatSubmit: 'dd/mm/yyyy',
	closeOnSelect: true,
    closeOnClear: true
});

var entry_picker = $('#entry_date').pickadate('picker');
var release_picker = $('#release_date').pickadate('picker');
 
// Verifique se há um "de" ou "para" data para começar.
if ( entry_picker.get('value') ) {
  release_picker.set('min', entry_picker.get('select'));
}
if ( release_picker.get('value') ) {
  entry_picker.set('max', release_picker.get('select'));
}

// Quando uma data for selecionada, atualizar o limite "de" e "para".
entry_picker.on('set', function(event) {
  if ( event.select ) {
    release_picker.set('min', entry_picker.get('select'));
  }
  else if ( 'clear' in event ) {
    release_picker.set('min', false);
  }
});
release_picker.on('set', function(event) {
  if ( event.select ) {
    entry_picker.set('max', release_picker.get('select'));
  }
  else if ( 'clear' in event ) {
    entry_picker.set('max', false);
  }
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
