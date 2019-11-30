/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
    ImageBackground
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { red } from 'ansi-colors';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


const NewsFeed = () => {

let width =Dimensions.get('window').width;
let height = Dimensions.get('window').height
let arr = [1, 2 ,3 ,4];
let imgUrl1= "../../../images/farmer1.jpg";
let imgUrl2= "../../../images/farmer1.jpg";

  return (
    <SafeAreaView style={{ flex: 1}}>
        <ScrollView style={{flex:1}}>
            <Content>
               {
                   arr.map((i) => {
                       return(
                           <View>
                               <NewsFeedUiOne index= {i}></NewsFeedUiOne>
                                <NewsFeedUiTwo index= {i}></NewsFeedUiTwo>
                           </View>
                            
                        )
                       
                   })
               }
            </Content>
        </ScrollView>
    </SafeAreaView>  
    );
};


const NewsFeedUiOne = (props) => {
    let width =Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
    let imgUrl1= "../../../images/farmer.jpg";
    let imgUrl2= "../../../images/farmer1.jpg";
    let imgURL = "";
    
    props.index / 2 == 0 ? imgURL = imgUrl1 : imgURL = imgUrl2;

    return (
        <View style={{ flex: 1, margin: 5 }}>
            <Card>
                <TouchableOpacity>
                        <View style={{flex: 1, height: height/2 }}>
                            
                            <View style={{flex: 3}}>
                                <ImageBackground source={require(imgUrl2)} style={{width: '100%', height: '100%'}}>
                                    <Text></Text>
                                </ImageBackground>
                            </View>
                            <View style={{ flex: 2, margin: 5}}>
                                <Text numberOfLines={7}>रासायनिक खते, कीटकनाशकांशिवाय शेती ही संकल्पनाच शेतकऱ्यांना सहजरीत्या मान्य होत नाही. सेंद्रीय शेती असो किंवा नैसर्गिक शेती, या पद्धतीच्या वापराविषयी अनेक समज-गैरसमज आधीपासूनच पसरलेले. पारंपरिक शेतीच्या जोखडात अडकलेल्या शेतकऱ्यांना त्यातून बाहेर काढणे कठीण मानले गेले. पण, अलीकडच्या काळात शेतकऱ्यांमध्ये जागरूकता वाढू लागली आहे. शेती सुधारणांकडे शेतकरी लक्ष देऊ लागले आहेत. बायोडायनॅमिक</Text>    
                            </View>
                        </View>
                </TouchableOpacity>
            </Card>
        </View>
    );
    
}

const NewsFeedUiTwo = (props) => {
    let width =Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
    let imgUrl1= "../../../images/farmer.jpg";
    let imgUrl2= "../../../images/farmer1.jpg";
    let imgURL = "";
    
    props.index / 2 == 0 ? imgURL = imgUrl1 : imgURL = imgUrl2;

    return (
        <View style={{ flex: 1, margin: 5 }}>
            <Card>
                <TouchableOpacity>
                        <View style={{flex: 1, height: height/2 }}>
                            
                            <View style={{flex: 3}}>
                                <ImageBackground source={require(imgUrl1)} style={{width: '100%', height: '100%'}}>
                                    <Text></Text>
                                </ImageBackground>
                            </View>
                            <View style={{ flex: 2, margin: 5}}>
                                <Text numberOfLines={7}>रासायनिक खते, कीटकनाशकांशिवाय शेती ही संकल्पनाच शेतकऱ्यांना सहजरीत्या मान्य होत नाही. सेंद्रीय शेती असो किंवा नैसर्गिक शेती, या पद्धतीच्या वापराविषयी अनेक समज-गैरसमज आधीपासूनच पसरलेले. पारंपरिक शेतीच्या जोखडात अडकलेल्या शेतकऱ्यांना त्यातून बाहेर काढणे कठीण मानले गेले. पण, अलीकडच्या काळात शेतकऱ्यांमध्ये जागरूकता वाढू लागली आहे. शेती सुधारणांकडे शेतकरी लक्ष देऊ लागले आहेत. बायोडायनॅमिक</Text>    
                            </View>
                        </View>
                </TouchableOpacity>
            </Card>
        </View>
    );
    
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

export default NewsFeed;
