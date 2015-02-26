var AppRouter = Backbone.Router.extend({
    routes: {
        "favorites/": "showFavorites",
        "favorites/:id": "showFavoriteDetail",
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    }
});

// Initiate the router
var app_router = new AppRouter;

app_router.on('route:defaultRoute', function(actions) {
    console.log('defaultRoute');
    console.log(actions);
});

app_router.on('route:showFavorites', function(actions) {
    console.log('showFavorites');
    console.log(actions);
});

app_router.on('route:showFavoriteDetail', function(id) {
    console.log('showFavoriteDetail id:' + id );
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
