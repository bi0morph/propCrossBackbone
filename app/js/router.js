app.Router = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute"
    },
    defaultRoute: function defaultRoute(actions){
        app.preloader.show();
        app.views.mainView = new app.views.MainView({
        	el: $('#some-app-container'),
        });
        app.preloader.hide();
    }
});