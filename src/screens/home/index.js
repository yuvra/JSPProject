/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsFeed from '../../shared/components/newsFeed/index';
import ActionBarImage from '../../shared/components/ActionBarImage';
import LeftActionBarImage from '../../shared/components/LeftActionBarImage';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
      title: 'मराठी न्युज ',
      headerLeft: <LeftActionBarImage />,
      headerRight: (
        <ActionBarImage
          navigation={params.navigation}
        />
      ),
      headerStyle: {backgroundColor: '#FFF'},
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        color: 'green',
      },
    };
  };

  componentDidMount() {
    const {navigation} = this.props;

    navigation.setParams({
      navigation: this.props.navigation,
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NewsFeed navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;
