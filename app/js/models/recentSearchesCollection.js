app.models.RecentSearchesCollection = Backbone.Collection.extend({
	model: app.models.RecentSearchModel,
	localStorage: new Backbone.LocalStorage("RecentSearchesCollection")
});