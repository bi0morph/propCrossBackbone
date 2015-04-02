app.views.ListLocations = Backbone.View.extend({
    render: function render(){
        var $docFragment = $(document.createDocumentFragment());
        this.collection.each(function(itemLocation, key){
            var itemLocationView = new app.views.ItemLocation({
                model: itemLocation,
            });
            $docFragment.append( itemLocationView.render().el );
        }, this);
        this.$el.html($docFragment);
    },
});