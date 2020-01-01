//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Button} from 'react-native';
//import all the components we are going to use.

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'मराठी न्युज ',
    headerLeft: null,
    headerStyle: {backgroundColor: '#FFF'},
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
      color: 'green',
    },
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Go next" onPress={() => navigate('FullNews')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
