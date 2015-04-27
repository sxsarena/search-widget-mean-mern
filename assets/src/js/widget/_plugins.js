// pickadate
$('.js-date').pickadate({
	format: 'dd/mm/yyyy',
	formatSubmit: 'dd/mm/yyyy',
	closeOnSelect: true,
    closeOnClear: true
});

// typeahead
var hotels = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'data/hotels.json'
});
 
$('.js-autocomplete').typeahead(null, {
  name: 'hotels',
  source: hotels
});