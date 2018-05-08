import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '@theme/';
import StackNavigator from '@components/StackNavigator';
import Splash from '@containers/Splash';

const AppNavigator = StackNavigator(
	{
		splash: { screen: Splash },
	},
	{
		initialRouteName: 'splash',
		navigationOptions: {
			header: null,
			gesturesEnabled: false,
			cardStack: { gesturesEnabled: false }
		},
		headerMode: 'screen',
		lazyLoad: true
	}, false
);

export default AppNavigator;
