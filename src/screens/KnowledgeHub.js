import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {List, ListItem, Card, CardItem, Body} from 'native-base';
import NewsFeed from '../shared/components/newsFeed';

const items = [
  'one',
  'two',
  'three',
  'one',
  'two',
  'three',
  'one',
  'one',
  'two',
  'three',
  'one',
  'one',
  'two',
  'three',
  'one',
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

export default class KnowledgeHub extends Component {
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
        }}>
        <ImageBackground
          source={require('../images/farmer.jpg')}
          style={{width: '100%', height: 250}}>
          <Text />
        </ImageBackground>
        <View style={{paddingRight: 10, paddingLeft: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#656565',
            }}>
            Trending
          </Text>
          <List
            dataArray={items}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderRow={item => (
              <Card style={{marginRight: 10}}>
                <CardItem>
                  <Body style={{height: 100, padding: 0}}>
                    <Image
                      source={require('../images/farmer.jpg')}
                      style={{
                        resizeMode: 'cover',
                        height: 100,
                        width: 100,
                        flex: 1,
                      }}
                    />
                    <Text>//Your text here</Text>
                  </Body>
                </CardItem>
              </Card>
            )}
          />
        </View>
        <View style={{paddingRight: 10, paddingLeft: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#656565',
            }}>
            Categories
          </Text>
          <List
            dataArray={items}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderRow={item => (
              <Card style={{marginRight: 10}}>
                <CardItem>
                  <Body style={{height: 100, padding: 0}}>
                    <Image
                      source={require('../images/farmer.jpg')}
                      style={{
                        resizeMode: 'cover',
                        height: 100,
                        width: 100,
                        flex: 1,
                      }}
                    />
                    <Text>//Your text here</Text>
                  </Body>
                </CardItem>
              </Card>
            )}
          />
        </View>
        <NewsFeed navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}
