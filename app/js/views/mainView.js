app.views.MainView = app.views.DefaultView.extend({
    template: $("#some-app-search-view").html(),
    afterRender: function afterRender () {
    	console.log('was render');
    	return this;
    }
});
