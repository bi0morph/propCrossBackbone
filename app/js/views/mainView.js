app.views.MainView = app.views.DefaultView.extend({
    variables: {
        title: 'PropertyCross',
        infoText: 'Use the form below to search for houses to buy. You can search by place-name, postcode, or click \'My location\', to search in your current location!',
        recentSearch: {
            title: "Recent searches:",
            list: [{
                    text: 'Torronto',
                    qnt: 3,
                    results: [1,2,3]
                },
                {
                    text: 'Kharkov',
                    qnt: 1,
                    results: [1]
                },
                {
                    text: 'Paris',
                    qnt: 8,
                    results: [1,2,3,5,6,7,8]
                }
            ]
        }
    },
    template: $("#some-app-search-view").html(),
    events: {
            "click .some-app-do-search": "doSearch",
            "submit form": "doSearch",
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
