app.views.RecentSearchesView = Backbone.View.extend({
    initialize: function initialize() {
        this.listenTo( this.collection, 'add', this.render);
        this.collection.fetch();
    },
    render: function render(){
        var $docFragment = $(document.createDocumentFragment());
        this.collection.each(function(resentSearch){
            var personView = new app.views.RecentSearchView({
                model: resentSearch,
            });
            $docFragment.append( personView.render().el );
        }, this);
        
        this.$el.html($docFragment);
    },
});