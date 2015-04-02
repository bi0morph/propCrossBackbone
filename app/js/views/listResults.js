app.views.ListResults = Backbone.View.extend({
    template: $("#search-result-list").html(),
    render: function render(){
        var variables = {
                items: [],
                numOnPage: 5,
                matches: this.collection.length
            };
        variables.items = (this.collection.toJSON()).slice(0, variables.numOnPage);

        this.$el.html(_.template(this.template)(variables));
        return this;
    },
});