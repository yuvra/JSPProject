import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScrollView} from 'react-navigation';
import LeftActionBarImage from "./LeftActionBarImage";
import ActionBarImage from "./ActionBarImage";
const IMAGES = {
  farmer1: require('../../images/farmer.jpg'), // statically analyzed
  farmer2: require('../../images/farmer1.jpg'), // statically analyzed
};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class FullNewsFeed extends Component {


  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
      title: 'संपूर्ण न्युज ',
      headerStyle: {backgroundColor: '#FFF'},
      headerTitleStyle: {
        textAlign: 'left',
        flex: 1,
        color: 'green',
      },
    };
  };

  constructor(props) {
    super();
    this.state = {
      index: props.navigation.state.params.index,
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Image
          source={this.state.index % 2 === 0 ? IMAGES.farmer1 : IMAGES.farmer2}
          style={{
            width: width,
            height: 250,
            borderRadius: 0,
            // marginLeft: 10,
          }}
        />
        <View style={{padding: 10}}>
          <Text>
            केंद्र सरकार आणि राज्य शासनाच्या कृषी विभागाशी संबंधित योजना
            शेतकऱ्यांना आणि पर्यायाने ग्रामीण अर्थव्यवस्थेला सुदृढ करणाऱ्या असतात.
            त्या लोकांपर्यंत पोहचविण्याचे यंत्रणा म्हणून आपले कर्तव्य आहे. अनेकदा
            योजनांची अमलबजावणी होत असल्याचे कागदावर दिसत असते. परंतु योजनांच्या
            माध्यमातून झालेल्या कामांचे मुल्यमापन होणेही तेवढेच गरजेचे आहे. असे
            झाल्यास खऱ्या अर्थाने लाभ दिल्याचे समाधान आपल्याला मिळू शकेल, असे
            प्रतिपादन खासदार सुनील मेंढे यांनी केले. \nभंडारा-गोंदिया जिल्ह्यातील
            कृषी विभागाच्या गत दोन वर्षांतील कामांचा आढावा घेण्याच्या दृष्टीने एका
            बैठकीचे आयोजन भंडारा येथे करण्यात आले होते. त्याप्रसंगी ते बोलत होते.
            यावेळी नागपूर विभागीय कृषी सहसंचालक रवींद्र भोसले, जिल्हा कृषी अधिक्षक
            हिंदूराव चव्हाण, उपविभागीय कृषी अधिकारी मिलिंद लाड, सेवानिवृत्त कृषी
            अधिकारी तायडे, तंत्र अधिकारी शांतीलाल गायधने, शेतकरी संजय एकापूरे,
            सुधीर धकाते, राजेश गायधने आदी उपस्थित होते. \nमहात्मा गांधी रोजगार हमी
            योजनेंतर्गत केल्या जाणाऱ्या कृषी विषयक कामांची माहिती जाणून घेण्यात
            आली. पावसाने झालेले नुकसान, शेतकऱ्याची संख्या आणि प्रत्यक्ष मदत
            मिळालेल्या शेतकऱ्यांची आकडेवारी जाणून घेताना ज्यांना मदत पोहचली नाही,
            त्याच्या कारणामीमांसा करुन तत्काळ मदत मिळण्याच्या दृष्टीने प्रयत्न
            व्हावेत, असे निर्देशही खासदारांनी यावेळी दिले. \nधानपिक प्रमुख असले
            तरी नगदी पिकाकडे शेतकरी कसा वळेल, या दृष्टीने प्रयत्न होण्याची गरज
            आहे. यासाठी यंत्रणा म्हणून प्रत्येक अधिकाºयाने पुढाकार घेण्याची गरज
            आहे. शेतकऱ्यांना नवीन आणि त्याच्या फायद्याचे जे जे देता येईल, ते
            देण्यासाठी प्रयत्न करावेत, असे निर्देश अधिकाऱ्यांना दिले. \n \n दोन
            वर्षांतील कामांचा घेतला आढावा \nकेंद्र व राज्य शासनाच्या माध्यमातून
            राबविण्यात येत असलेल्या सर्व कृषीशी संबंधित योजनांचा आढावा यावेळी
            खासदारांनी घेतला. दोन्ही आर्थिक वर्षात आलेल्या योजना आणि त्याची झालेली
            अमलबजावणी या संदर्भात सविस्तर माहिती जाणून घेण्यात आली. फळबाग, पीक
            प्रात्याक्षिक, अन्न सुरक्षा, कृषी निविष्ठा वितरण अशा योजनांची माहिती
            घेतानाच रासायनिक खतांच्या पुरवठाचा आढावा खासदारांनी घेतला.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // margin: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
