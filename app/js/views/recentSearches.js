app.views.RecentSearches = Backbone.View.extend({
    initialize: function initialize() {
        this.collection.fetch();
    },
    render: function render(){
        var $docFragment = $(document.createDocumentFragment());
        this.collection.each(function(resentSearch, key){
            if (key > 6) return false;
            resentSearch.set('num', key+1);
            var resentSearchView = new app.views.RecentSearch({
                model: resentSearch,
            });
            $docFragment.append( resentSearchView.render().el );

        }, this);
        
        this.$el.html($docFragment);
    },
});