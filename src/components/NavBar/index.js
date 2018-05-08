import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import NavigationBar from 'react-native-navbar';
import { Images, Colors, Styles } from '@theme';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let lb = null, title = null, rb = null;

        if (this.props.title == 'logo') {
          title = <Image source={Images.logo} style={{ width: 180, height: 38 }} resizeMode='contain'/>
        }

        if (this.props.right == 'search') {
          rb = <Image source={Images.search} style={{ width: 24, height: 14 }} resizeMode='contain'/>
        }

        return (
            <NavigationBar
                containerStyle={{
                  backgroundColor: 'blue',
                }}
                title={
                  title
                }
                leftButton={
                  <TouchableOpacity onPress={this.props.onLeft} style={{ marginLeft: 25, alignSelf: 'center' }}>
                    {
                      lb
                    }
                  </TouchableOpacity>
                }
                rightButton={
                  <TouchableOpacity onPress={this.props.onRight} style={{ marginRight: 25, alignSelf: 'center' }}>
                    {
                      rb
                    }
                  </TouchableOpacity>
                }
            />
        );
    }
}
