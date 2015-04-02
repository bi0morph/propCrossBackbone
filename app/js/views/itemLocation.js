app.views.ItemLocation = Backbone.View.extend({
	tagName: 'li',
	template: '<a href="#search_query/<%= encodeURI(place_name) %>">Location: <%= place_name %> "<%= long_title %>"</a>',
	render: function render() {
        var variables = this.model.toJSON();
        this.$el.html( _.template( this.template)(variables) );
        return this;
    },
});
