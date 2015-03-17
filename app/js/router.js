app.Router = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute"
    },
    defaultRoute: function defaultRoute(actions){
        app.preloader.show();
        
        var searchFormModel = new app.models.SearchForm();
        app.views.searchForm = new app.views.SearchForm({
        	el: $('#some-app-container'),
            model: searchFormModel
        });

        app.preloader.hide();
    }
});