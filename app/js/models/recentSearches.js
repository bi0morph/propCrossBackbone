app.collections.RecentSearches = Backbone.Collection.extend({
	model: app.models.RecentSearch,
	localStorage: new Backbone.LocalStorage("RecentSearches")
});