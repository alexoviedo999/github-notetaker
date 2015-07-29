import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

// enables react dev tools in chrome:
if (typeof window !== 'undefined') {
    window.React = React;
}

Router.run(routes, (Root, state) => {
	React.render(<Root {...state} />, document.getElementById('app'));
});