import React, { Component } from 'react';
import { Provider } from 'react-redux';

import sagas from './sagas';
import '@i18n/I18n';
import AppNavigator from '@navigators/AppNavigator';
import configureStore from './configureStore';

const store = configureStore();

class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		);
	}
}

export default Root;
