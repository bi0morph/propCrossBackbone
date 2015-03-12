var app = {
	models: {},
	roters: {},
	views: {},
	preloader: {
		elem: $('#preloader')[0],
		show: function show() {
			$(this.elem).fadeIn();
		},
		hide: function hide() {
			$(this.elem).fadeOut();
		}
	},
	init: function init () {
		app.router = new this.Router;
		Backbone.history.start();
	}
};