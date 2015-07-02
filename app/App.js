var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

// enables react dev tools in chrome:
if (typeof window !== 'undefined') {
    window.React = React;
}

Router.run(routes, function(Root){
	React.render(<Root />, document.getElementById('app'));
});