app.views.DefaultView = Backbone.View.extend({
    initialize: function initialize() {
        this.beforeRender();
        this.render();
        this.afterRender();
    },
    beforeRender: function beforeRender() {},
    afterRender: function afterRender() {},
    variables: {},
    template: null,
    render: function render(){
        // what if template is empty?
        this.$el.html( _.template( this.template)(this.variables) );
    },
});
