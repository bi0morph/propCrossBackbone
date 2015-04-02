app.Router = Backbone.Router.extend({
    routes: {
        "fave/" : "faveList",
        "search_query/:searchQuery" : "searchResult",
        "*actions": "searchForm",
    },
    searchResult: function searchResult (searchQuery) {
        app.preloader.show();

        //app.preloader.hide();
        searchQuery = decodeURI(searchQuery);

        if (!app.views.searchForm) {
            var searchFormModel = new app.models.SearchForm();
            app.views.searchForm = new app.views.SearchForm({
                el: $('#search-form-container'),
                model: searchFormModel
            });
        }

        // fetchByPlaceName
        var url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=',
            jqXHR;
        jqXHR = $.ajax({
            context: app.views.searchForm,
            url: url + searchQuery,
            method: 'GET',
            dataType: "jsonp"
        }).done(app.views.searchForm.onSearchDoneHandler)
            .fail(app.views.searchForm.onSearchFailHandler);
    },
    faveList: function faveList () {
        alert('faveList');
    },
    searchForm: function searchForm(actions){
        console.log('searchForm');
        var searchFormModel = new app.models.SearchForm();
        app.views.searchForm = new app.views.SearchForm({
            el: $('#search-form-container'),
            model: searchFormModel
        });
    },
});