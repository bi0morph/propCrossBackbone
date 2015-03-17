app.models.SearchForm = app.models.Default.extend({
	defaults: {
	    title: '',
	    infoText: '',
	    state: 'recentSearches',
	    recentSearchTitle: '',
	    errorMessage: '',
	    lastSearchQuery: '',
	},
	url: 'js/fixtures/search_form/read.json',
});
