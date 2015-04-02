app.views.ItemLocation = Backbone.View.extend({
	tagName: 'li',
	template: 'Location: <%= place_name %> "<%= long_title %>"',
	render: function render() {
        var variables = this.model.toJSON();
        this.$el.html( _.template( this.template)(variables) );
        return this;
    },
});
