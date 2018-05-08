import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';

import sagas from './sagas';
import AppNavigator from './AppNavigator';
import configureStore from './configureStore';

const store = configureStore();
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;

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
