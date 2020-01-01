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
  Dimensions,
  ImageBackground,
  Image,
  Linking,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {red} from 'ansi-colors';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
const allNewsMapFromServer = require('../../../JSON/allNews');
const IMAGES = {
  farmer1: require('../../../images/farmer.jpg'), // statically analyzed
  farmer2: require('../../../images/farmer1.jpg'), // statically analyzed
};

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      allNewsMap: allNewsMapFromServer,
    };
  }

  navigateToNewsPage = index => {
    this.props.navigation.navigate('FullNewsFeed', {index: index});
  };

  onSaveToCollectionPress = props => {
    const allNewsMap = [...this.state.allNewsMap];
    for (let i = 0; i < allNewsMap.length; i++) {
      const currentNews = allNewsMap[i];
      if (currentNews.id === props.newsObject.id) {
        currentNews.savedToCollection = !currentNews.savedToCollection;
        break;
      }
    }
    this.setState({allNewsMap: allNewsMap});
  };

  onLikePress = props => {
    const allNewsMap = [...this.state.allNewsMap];
    for (let i = 0; i < allNewsMap.length; i++) {
      const currentNews = allNewsMap[i];
      if (currentNews.id === props.newsObject.id) {
        let likeCount = 0;
        if (currentNews.liked) {
          likeCount = currentNews.likeCount - 1;
          currentNews.liked = false;
        } else {
          likeCount = currentNews.likeCount - 1;
          currentNews.liked = true;
        }
        break;
      }
    }
    this.setState({allNewsMap: allNewsMap});
  };

  sendOnWhatsApp = () => {
    let msg = 'sdfsdf';
    let mobile = 'sdfsdf';
    let url = 'whatsapp://send?text=' + 'here will be sharable message....';
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  componentDidMount() {}

  render() {
    const allNewsMap = this.state.allNewsMap;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Content>
            {allNewsMap.map((newsObject, index) => {
              return (
                <View>
                  <NewsFeedUiOne
                    navigateToNewsPage={this.navigateToNewsPage.bind(
                      this,
                      index,
                    )}
                    newsObject={newsObject}
                    onSaveToCollectionPress={this.onSaveToCollectionPress}
                    onLikePress={this.onLikePress}
                    sendOnWhatsApp={this.sendOnWhatsApp}
                    index={index}
                  />
                </View>
              );
            })}
          </Content>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const NewsFeedUiOne = props => {
  let width = Dimensions.get('window').width;
  let height = Dimensions.get('window').height;
  const imageSrc = 'farmer1';
  // let imgURL2 = require(`${imageSrc}`);
  let imgURL = IMAGES[props.newsObject.imageSrc];
  const onSaveToCollectionPress = props.onSaveToCollectionPress;
  const onLikePress = props.onLikePress;
  const sendOnWhatsApp = props.sendOnWhatsApp;

  return (
    <View style={{flex: 1, margin: 5}}>
      <Card>
        <TouchableOpacity onPress={props.navigateToNewsPage}>
          <View style={{flex: 1, height: height / 2}}>
            <View style={{flex: 3}}>
              <ImageBackground
                source={imgURL}
                style={{width: '100%', height: '100%'}}>
                <Text />
              </ImageBackground>
            </View>
            <View
              style={{flex: 2, margin: 5}}
              ellipsizeMode="tail"
              numberOfLines={1}>
              <Text>{props.newsObject.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            // borderWidth: 1,
            // borderColor: 'gray',
            borderTopWidth: 1,
            borderTopColor: '#00FF0099',
            height: 50,
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: 10,
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={onLikePress.bind(this, props)}>
              {props.newsObject.liked ? (
                <Image
                  source={{
                    uri:
                      'https://img.icons8.com/ios-filled/50/000000/facebook-like.png',
                  }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 0,
                  }}
                />
              ) : (
                <Image
                  source={{
                    uri:
                      'https://img.icons8.com/ios/50/000000/facebook-like.png',
                  }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 0,
                  }}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={sendOnWhatsApp}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/ios/50/000000/whatsapp.png',
                }}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 0,
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 10,
            }}>
            <TouchableOpacity
              onPress={onSaveToCollectionPress.bind(this, props)}>
              {props.newsObject.savedToCollection ? (
                <Image
                  source={{
                    uri:
                      'https://img.icons8.com/ios-filled/50/000000/add-to-collection.png',
                  }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 0,
                  }}
                />
              ) : (
                <Image
                  source={{
                    uri:
                      'https://img.icons8.com/ios/50/000000/add-to-collection.png',
                  }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 0,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};

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

export default NewsFeed;
