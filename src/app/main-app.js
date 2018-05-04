import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ScrollToTop from 'app/components/scrollTop';

import configureStore from 'app/reducers/configureStore';

import Demo from 'app/layouts/demo';

import 'app/styles/index.css';

const store = configureStore();

class MainApp extends Component {
  render() {
    return (
		<Provider store={store}>
			<Router>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Demo} />
						<Redirect to="/" />
					</Switch>
				</ScrollToTop>
			</Router>
		</Provider>
    );
  }
}

export default MainApp;
