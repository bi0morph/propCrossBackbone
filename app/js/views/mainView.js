app.views.MainView = app.views.DefaultView.extend({
    template: $("#some-app-search-view").html(),
    events: {
    	'click .some-app-do-search': 'doSearch',
    	'keypress .searchQuery': 'doSearch',
    },
    doSearch: function doSearch(event) {
		if ((event.type === 'keypress' 
    		&& event.which === 13)
    		|| event.type === 'click') {
    		
    		var url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=';
    		url += $(this.el).find('.searchQuery').val();

    		var jqXHR = $.ajax({
				url: url,
				method: 'GET',
				dataType: "jsonp"
			});

    		jqXHR.done(function(data){
    			var successCodes = [100, 101, 110],
    				erroCodes = [200, 202],
    				responceCode = data.response.application_response_code;
    			if (successCodes.indexOf(responceCode)) {
    				if(data.response.listings.length) {
    					//Search Results page
    				} else {
    					//Error state
    				}
    			}else if(erroCodes.indexOf(responceCode)){
    				data.response.locations
    				//“Listed locations state”
    			}else{
    				//Error state
    			}
    		});

    		return false;
    	};
    },
    showRecent: function showRecent() {
    	var recentSearchesColection = new app.models.RecentSearchesCollection();
        var recentSearchesView = new app.views.RecentSearchesView({
            collection: recentSearchesColection,
            el: $("#some-app-search-result ul")
        });
    },
    afterRender: function afterRender() {
        this.showRecent();
    	return this;
    },
});
