app.Router = Backbone.Router.extend({
    routes: {
        "fave/" : "faveList",
        "*actions": "searchForm",
        "search_query/:searchQuery" : "searchResult",
    },
    searchResult: function searchResult (searchQuery) {
        app.preloader.show();
    },
    faveList: function faveList () {
        console.log('faveList');
        alert('faveList');
    },
    searchForm: function searchForm(actions){
        var searchFormModel = new app.models.SearchForm();
        app.views.searchForm = new app.views.SearchForm({
            el: $('#search-form-container'),
            model: searchFormModel
        });
    },
});