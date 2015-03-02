var AppRouter = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute"
    },
    defaultRoute: function defaultRoute(actions){
        app.searchView = new SearchView({el: $('#some-app-container')});
    }    
});
