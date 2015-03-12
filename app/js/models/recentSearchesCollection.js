var RecentSearchesCollection = Backbone.Collection.extend({
	model: RecentSearch
});
var recentSearchesCollection = new RecentSearchesCollection([
    {
        text: 'Torronto',
        qnt: 3,
        results: [1,2,3]
    },
    {
        text: 'Kharkov',
        qnt: 1,
        results: [1]
    },
    {
        text: 'Paris',
        qnt: 8,
        results: [1,2,3,5,6,7,8]
    },
]);