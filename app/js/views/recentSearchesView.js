var RecentSearchesView = Backbone.View.extend({
	template: _.template($("#some-app-recent-searches").html()),
    initialize: function () {
    	this.render();
    },
    render: function(){
    	var variables = {
    		title : 'Recent searches:'
    	};
    	this.$el.html( this.template(variables) );

    	var $searchList = this.$el.find('ul');

    	this.collection.each(function(resentSearch){
	        var $li = $('<li>');
	        var personView = new RecentSearchView({ model: resentSearch , el: $li});

            $searchList.append($li);
	    }, this);
	    
	    return this;
    	
    },
});
