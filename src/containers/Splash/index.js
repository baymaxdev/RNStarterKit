import React, { Component } from 'react';
import { View, Image, StyleSheet, AsyncStorage } from 'react-native';
import { Colors, Images } from '@theme';
import { connect } from 'react-redux';
import { Status } from '@src/constants';

class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.logo} resizeMode='contain'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  logo: {
    width: '70%',
  }
})

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}
function mapStateToProps(state) {
  const globals = state.get('globals');
	return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);