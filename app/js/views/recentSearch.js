app.views.RecentSearch = Backbone.View.extend({
	tagName: 'li',
	template: "Search #<%= num %> (<%= qnt %>)",
	render: function render(){
        var variables = this.model.toJSON();
        this.$el.html( _.template( this.template)(variables) );
        return this;
    },
});
