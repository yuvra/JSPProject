import React, {Component} from 'react';
import {View, Text, Image, BackHandler} from 'react-native';

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({align: 'flex-start'}, function() {
          const {navigate} = this.props.navigation;
          this.setState(
            {
              alignsecond: true,
            },
            () => {
              navigate('HomeScreen');
            },
          );
        }),
      3000,
    );
  }

  componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick = () => {
    alert('work in progress');
    return true;
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: this.state.align,
          marginHorizontal: 40,
        }}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/react_logo.png',
          }}
          style={{width: 100, height: 100}}
        />
        {!this.state.alignsecond ? null : (
          <View style={{margin: 10}}>
            <Text style={{color: '#114998', fontSize: 30, fontWeight: 'bold'}}>
              JSP Project
            </Text>
          </View>
        )}
      </View>
    );
  }
}
