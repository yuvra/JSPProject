import React, {Component} from 'react';

import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default class ActionBarImage extends Component {
  constructor(props) {
    super(props);
  }

  navigateToCalendarPage = () => {
    this.props.navigation.navigate('CalendarPage');
  };

  navigateToNotificationPage = () => {
    this.props.navigation.navigate('NotificationPage');
  };

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
        <TouchableOpacity onPress={this.navigateToCalendarPage}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios/50/000000/calendar.png',
            }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 0,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.navigateToNotificationPage}>
          <Image
            source={{
              uri:
                'https://img.icons8.com/wired/64/000000/appointment-reminders.png',
            }}
            style={{
              width: 35,
              height: 35,
              borderRadius: 0,
              marginLeft: 15,
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
