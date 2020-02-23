import React, {Component} from 'react';

import {StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {List, ListItem} from 'native-base';

const items = [
  'one',
  'two',
  'three',
  'one',
  'two',
  'three',
  'one',
  'two',
  'three',
  'one',
  'two',
  'three',
];

export default class NotificationPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{paddingRight: 10, paddingLeft: 10, flexDirection: 'row'}}>
          <List
            dataArray={items}
            horizontal={true}
            renderRow={item => (
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            )}
          />
        </View>
      </View>
    );
  }
}
