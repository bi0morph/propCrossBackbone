
app.Router = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute"
    },
    defaultRoute: function defaultRoute(actions){
        console.log(actions);
        //app.mainView = new app.MainView({el: $('#some-app-container')});
    }
});
