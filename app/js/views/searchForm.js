app.views.SearchForm = app.views.Default.extend({
    template: $("#some-app-search-view").html(),
    events: {
        'click .show-faves': 'navigateToFave',
    	'click .some-app-do-search': 'doSearch',
    	'keypress .searchQuery': 'doSearch',
    },
    resultEl: null,
    resultView: null,
    navigateToFave: function navigateToFave () {
        app.router.navigate('fave/', {trigger: true})
    },
    doSearch: function doSearch(event) {
		if ((event.type === 'keypress' 
    		&& event.which === 13)
    		|| event.type === 'click') {
            
            // fetchByPlaceName
            var url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=',
                query = $(this.el).find('.searchQuery').val(),
                jqXHR;
            if (query.length > 2 &&
                this.model.get('lastSearchQuery') != query) {
                app.preloader.show();
                jqXHR = $.ajax({
                    context: this,
                    url: url + query,
                    method: 'GET',
                    dataType: "jsonp"
                }).done(this.onSearchDoneHandler)
                    .fail(this.onSearchFailHandler);    
            };
    		return false;
    	};
    },
    onSearchDoneHandler : function onSearchDoneHandler (data, jqXHR) {
        var successCodes = ["100", "101", "110"],
            otherCodes = ["200", "202"],
            responceCode = data.response.application_response_code,
            newAttr = {
                lastSearchQuery: '',
                state: 'error'
            };
        console.log(data.response);
       
        newAttr.lastSearchQuery = data.request.location;
        if (successCodes.indexOf(responceCode)>-1) {
            if(data.response.listings) {
                newAttr.state = 'listResults';
            }
        }else if(otherCodes.indexOf(responceCode)>-1){
            newAttr.state = 'listLocations';
        }
        this.model.set( newAttr );
    },
    onSearchFailHandler: function onSearchFailHandler (jqXHR) {
        this.model.changeStateTo('error');
    },
    afterRender: function afterRender() {
        console.log(this.model.get('state'));
        var $resultEl = $("#some-app-search-result"),
            resultModel, resultView;

        switch (this.model.get('state')) {
            case 'error':
                $resultEl.html(this.model.get('errorMessage'));
            break;
            case 'recentSearches':
                var $docFragment = $(document.createDocumentFragment()),
                    html = _.template($('#some-app-search-result-list').html())({
                        listТitle: this.model.get('recentSearchTitle')
                    });
                $resultEl.append(html);
                
                _.template($('#some-app-search-result-list').html());


                resultView = new app.views.RecentSearches({
                    collection: new app.collections.RecentSearches(),
                    el: $resultEl.find('ul')
                });
            break;
            case 'listLocations':
                $resultEl.html('list location will be here');
                // resultView = new app.views.ListLocations({
                //     model: new app.model.ListLocations(),
                //     el: $resultEl
                // });
            break;
            case 'listResults':
                $resultEl.html('list result will be show in other block');
            break;
        }
        this.resultView = resultView;
        this.resultEl = $resultEl[0];

    	return this;
    },
});
