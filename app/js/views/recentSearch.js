app.views.RecentSearch = Backbone.View.extend({
	tagName: 'li',
	template: '<a href="#search_query/<%= encodeURI(text)%>">Search #<%= num %>: "<%= text %>" (<%= qnt %>)</a>',
	render: function render(){
        var variables = this.model.toJSON();
        this.$el.html( _.template( this.template)(variables) );
        return this;
    },
});
