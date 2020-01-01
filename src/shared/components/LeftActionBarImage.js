import React, {Component} from 'react';

import {StyleSheet, View, Text, Image} from 'react-native';

export default class ActionBarImage extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          // borderWidth: 1,
          // borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri:
              'https://img.icons8.com/ios-glyphs/60/000000/details.png',
          }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 0,
            marginLeft: 10,
          }}
        />
        <Image
          source={{
            uri: null,
          }}
          style={{
            width: 35,
            height: 35,
            borderRadius: 0,
            marginLeft: 15,
            marginRight: 10,
          }}
        />
      </View>
    );
  }
}
