//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import HomeScreen from './android/app/src/screens/home/index';

import React, {Component} from 'react';

//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from './src/SplashScreen';
// import HomeScreen from './src/HomeScreen';
import HomeScreen from './src/screens/home/index';
import FullNews from './src/FullNews';
import FullNewsFeed from './src/shared/components/FullNewsFeed';
import CalendarPage from './src/screens/CalendarPage';
import NotificationPage from './src/screens/NotificationPage';
const App = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    HomeScreen: {screen: HomeScreen},
    FullNews: {screen: FullNews},
    FullNewsFeed: {screen: FullNewsFeed},
    CalendarPage: {screen: CalendarPage},
    NotificationPage: {screen: NotificationPage},
  },
  {
    initialRouteName: 'SplashScreen',
  },
);
export default createAppContainer(App);
