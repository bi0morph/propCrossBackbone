var SearchView = Backbone.View.extend({
    template: _.template( $("#some-app-search-view").html()),
    initialize: function () {
    	this.render();
    },
    render: function(){
        var variables = {
            title: 'PropertyCross',
            infoText: 'Use the form below to search for houses to buy. You can search by place-name, postcode, or click \'My location\', to search in your current location!'
        };
        this.$el.html( this.template(variables) );

        var recentSearchesView = new RecentSearchesView({
            el: $('#some-app-search-result'),
            collection: recentSearchesCollection
        });
    },
    events: {
            "click .some-app-do-search": "doSearch",
            "submit form": "doSearch"
            "click .get-my-location": "getLocation",
            "click .show-faves": "showFaves"
    },
    doSearch: function() {
    	console.log('do search');
    },
    getLocation: function() {
    	console.log('getLocation');
    },
    showFaves: function() {
    	console.log('showFaves');
    },

});
