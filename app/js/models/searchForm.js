app.models.SearchForm = app.models.Default.extend({
	defaults: {
	    title: '',
	    infoText: '',
	    recentSearchTitle: '',
	},
	url: 'js/fixtures/search_form/read.json',
});
