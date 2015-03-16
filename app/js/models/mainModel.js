app.models.MainModel = app.models.DefaultModel.extend({
	defaults: {
	    title: '',
	    infoText: '',
	    recentSearchTitle: '',
	},
	url: 'js/fixtures/main/read.json',
});
