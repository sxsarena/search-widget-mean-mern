// pickadate
$('.js-date').pickadate({
	format: 'dd/mm/yyyy',
	formatSubmit: 'dd/mm/yyyy',
	closeOnSelect: true,
    closeOnClear: true
});


var hotels = new Bloodhound({
	datumTokenizer: function(d) { 
		return Bloodhound.tokenizers.whitespace(d.name);
	},
	queryTokenizer: Bloodhound.tokenizers.whitespace,
	prefetch: '/hotels', 
	remote: {
    	url: '/hotels/%QUERY',
	    filter: function(list) {
			return $.map(list, function(hotel) {
				return { name: hotel.name };
			});
		}
	}
});

hotels.initialize();

$(function(){
    $('.js-autocomplete').typeahead(null, {
		minLength: 1,
		hint: true,
  		highlighter: true,
		name: 'hotels',
		displayKey: 'name',
		source: hotels.ttAdapter(), 
		templates: {
		    suggestion: function (hotel) {
		        return '<p>' + hotel.name + ', ' + hotel.cidade + '</p>';
		    },
		    notFound:function () {
		        return '<p class="tt-suggestion">Sem resultados</p>';
		    }
		}
	});
});