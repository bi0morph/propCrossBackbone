app.models.SearchForm = app.models.Default.extend({
	defaults: {
	    title: '',
	    infoText: '',
	    state: 'recentSearches',
	    recentSearchTitle: '',
	    listLocationTitle: '',
	    errorMessage: '',
	    lastSearchQuery: '',
	    lastSearchQtnItems: '',
	},
	url: 'js/fixtures/search_form/read.json',
});
