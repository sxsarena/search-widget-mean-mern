// pickadate
$('.js-date').pickadate({
	format: 'dd/mm/yyyy',
	formatSubmit: 'dd/mm/yyyy',
	closeOnSelect: true,
    closeOnClear: true
});
 
 $('.js-autocomplete').typeahead({
    	name: 'typeahead',
        remote: '/search?key=%QUERY',  
        limit: 10
  });