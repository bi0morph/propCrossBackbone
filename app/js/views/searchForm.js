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
        app.router.navigate('fave/', {trigger: true});
    },
    doSearch: function doSearch(event) {
		if ((event.type === 'keypress' 
    		&& event.which === 13)
    		|| event.type === 'click') {

            var query = $(this.el).find('.searchQuery').val();
            
            if (query.length > 2 &&
                this.model.get('lastSearchQuery') != query) {
                app.router.navigate('search_query/'+ encodeURI(query), {trigger: true});
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
                state: 'error',
                lastSearchQtnItems: 0
            };
        console.log(data.response);
       
        newAttr.lastSearchQuery = data.request.location;
        if (successCodes.indexOf(responceCode)>-1 && data.response.listings) {
            newAttr.state = 'listResults';
            newAttr.lastSearchQtnItems = data.response.listings.length;
            
            app.collections.listResults = new app.collections.ListResults(data.response.listings);
        }else if(otherCodes.indexOf(responceCode)>-1){
            newAttr.state = 'listLocations';
            app.collections.listLocationsCollection = new app.collections.ListLocations(data.response.locations);
        }
        this.model.set( newAttr );
    },
    onSearchFailHandler: function onSearchFailHandler (jqXHR) {
        this.model.changeStateTo('error');
    },
    afterRender: function afterRender() {
        console.log(this.model.get('state'));
        var $resultEl = $("#some-app-search-result"),
            resultModel, resultView, titleHtml;

        app.collections.recentSearchesCollection = new app.collections.RecentSearches();
        app.collections.recentSearchesCollection.fetch();

        switch (this.model.get('state')) {
            case 'error':
                $resultEl.html(this.model.get('errorMessage'));
            break;
            case 'recentSearches':
                titleHtml = _.template($('#some-app-search-result-list').html())({
                    listТitle: this.model.get('recentSearchTitle')
                });
                $resultEl.append(titleHtml);

                resultView = new app.views.RecentSearches({
                    collection: app.collections.recentSearchesCollection,
                    el: $resultEl.find('ul')
                });
                resultView.render();
                $('#search-result-container').hide();
                this.$el.show();
            break;
            case 'listLocations':
                titleHtml = _.template($('#some-app-search-result-list').html())({
                    listТitle: this.model.get('listLocationTitle')
                });
                $resultEl.append(titleHtml);

                listLocationsView = new app.views.ListLocations({
                    collection: app.collections.listLocationsCollection,
                    el: $resultEl.find('ul')
                });
                listLocationsView.render();
                $('#search-result-container').hide();
                this.$el.show();
            break;
            case 'listResults':
                // save to recent searches
                var recentSearch = new app.models.RecentSearch({
                    timestamp: (new Date()).getTime(),
                    text: this.model.get('lastSearchQuery'),
                    qnt: this.model.get('lastSearchQtnItems')
                });
                
                app.collections.recentSearchesCollection.add(recentSearch);
                recentSearch.save();
                app.collections.recentSearchesCollection.sort();
                this.showListResults();
            break;
        }
        this.resultView = resultView;
        this.resultEl = $resultEl[0];
        
        app.preloader.hide();

    	return this;
    },
    showListResults: function showListResults() {
        
        app.views.listResults = new app.views.ListResults({
            el: $('#search-result-container'),
            collection: app.collections.listResults,
        });

        this.$el.hide();
        
        app.views.listResults.render().$el.show();
    }
});
