import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ScrollToTop from 'app/components/scrollTop';

import Demo from 'app/layouts/demo';

import 'app/styles/index.css';

class MainApp extends Component {
  render() {
    return (
		<Router>
			<ScrollToTop>
				<Switch>
					<Route exact path="/" component={Demo} />
					<Redirect to="/" />
				</Switch>
			</ScrollToTop>
		</Router>
    );
  }
}

export default MainApp;
