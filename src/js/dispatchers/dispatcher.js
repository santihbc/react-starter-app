var Dispatcher = require("flux").Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

	handleViewAction: function (action) {
		this.dispatch({
			source: "VIEW_ACTION",
			action: action
		});
	},

	handleServerAction: function (action) {
		this.dispatch({
			source: "SERVER_ACTION",
			action: action
		});
	},

	handleRouterAction: function (action) {
		this.dispatch({
			source: "ROUTER_ACTION",
			action: action
		});
	}

});

module.exports = AppDispatcher;
