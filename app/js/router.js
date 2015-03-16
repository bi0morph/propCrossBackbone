app.Router = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute"
    },
    defaultRoute: function defaultRoute(actions){
        app.preloader.show();
        var mainModel = new app.models.MainModel();
        app.views.mainView = new app.views.MainView({
        	el: $('#some-app-container'),
            model: mainModel
        });
        app.preloader.hide();
    }
});