var RecentSearchView = Backbone.View.extend({
	template: _.template("Search #1 (<%= qnt %>)"),
	initialize: function () {
		this.render();
	},
    render: function(){
    	var variables = this.model.toJSON();
    	
    	this.$el.html( this.template(variables) );
	    return this;
    },
});
