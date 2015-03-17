app.views.Default = Backbone.View.extend({
    initialize: function initialize() {
    	var _this = this; 
    	
    	_.bindAll(this, 'beforeRender', 'render', 'afterRender');
        this.render = _.wrap(this.render, function(render) { 
            app.preloader.show();
            _this.beforeRender(); 
            render(); 
            _this.afterRender(); 
            app.preloader.hide();
            return _this; 
        }); 

        this.listenTo( this.model, 'change', this.render);
        this.model.fetch();
    },
    render: function render(){
        var variables = this.model.toJSON();
        
        this.$el.html( _.template( this.template)(variables) );
        return this;
    },
    beforeRender: function beforeRender(){
    	return this;
    },
    afterRender: function afterRender(){
    	return this;
    },
});
