import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';
// import {moment} from 'moment';

const screenWidth = Dimensions.get('window').width;
const screebHeight = Dimensions.get('window').height;

/*LocaleConfig.locales['mar'] = {
  monthNames: ['जानेवारी','फेब्रुवारी','मार्च','एप्रिल','मे','जुन','जुलै','ऑगस्ट','सप्टेंबर','ऑक्टोबर','नोव्हेंबर','डिसेंबर'],
  monthNamesShort: ['जान.','फेब्रु.','फेब्रु.','मार्च','एप्रि.','मे','जुन','जुलै','ऑग.','सप्टें.','ऑक्टो.','नोव्हें.','डिसें.'],
  dayNames: ['सोमवार','मंगळवार','बुधवार','गुरुवार','शुक्रवार','शनिवार','रविवार'],
  dayNamesShort: ['सोम.','मंगळ.','बुध.','गुरु.','शुक्र.','शनि.','रवि.'],
  // dayNamesShort: ['सोमवार','मंगळवार','बुधवार','गुरुवार','शुक्रवार','शनिवार','रविवार'],
  today: 'आज'
};
LocaleConfig.defaultLocale = 'mar';*/

export default class CalendarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markedDates: {
        '2019-12-01': {marked: true, dotColor: '#0000FF', selected: false},
        '2019-12-02': {marked: true, dotColor: '#0000FF', selected: false},
        '2019-12-03': {marked: true, dotColor: '#0000FF', selected: false},
        // '2019-12-21': {selected: false},
        // '2019-12-10': {marked: true, dotColor: '#0000FF'},
        // '2019-12-11': {marked: true, dotColor: '#0000FF'},
        // '2019-12-12': {marked: true, dotColor: '#0000FF'},
        // '2019-12-13': {marked: true, dotColor: '#0000FF'},
      },
      previouslySelectedDate: null,
    };
  }

  selectDate = currentSelectedDate => {
    debugger;
    if (currentSelectedDate !== this.state.previouslySelectedDate) {
      let markedDates = {...this.state.markedDates};
      if (markedDates[currentSelectedDate]) {
        debugger;
        if (markedDates[currentSelectedDate].hasOwnProperty('selected')) {
          let newDate = {...markedDates[currentSelectedDate]};
          newDate.selected = true;
          markedDates[currentSelectedDate] = {...newDate};
        }
      } else {
        debugger;
        markedDates[currentSelectedDate] = {};
        markedDates[currentSelectedDate].selected = true;
      }
      if (markedDates[this.state.previouslySelectedDate]) {
        debugger;
        let newDate = {...markedDates[this.state.previouslySelectedDate]};
        newDate.selected = false;
        markedDates[this.state.previouslySelectedDate] = {...newDate};
        // delete markedDates[this.state.previouslySelectedDate];
      }
      this.setState({
        previouslySelectedDate: currentSelectedDate,
        markedDates,
      });
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Calendar
          style={{
            width: screenWidth,
          }}
          // Initially visible month. Default = Date()
          // current={'2019-12-21'}
          // Minimum date that can  be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2019-01-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2019-12-31'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            // console.log('selected day', day);
            this.selectDate(day.dateString);
            return true;
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MMM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          markedDates={this.state.markedDates}
          // Hide month navigation arrows. Default = false
          // hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction) => (<Arrow />)} //todo
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          // disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          // hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          // onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          // onPressArrowRight={addMonth => addMonth()}
          theme={{
            backgroundColor: '#00adf5',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#ffffff',
            todayBackgroundColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: '#2d4150',
            indicatorColor: '#2d4150',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>{this.state.previouslySelectedDate}</Text>
        </View>
        {/*<Text>sdfsdfsfd</Text>*/}
        {/*<Text>{JSON.stringify(this.state.markedDates)}</Text>*/}
      </View>
    );
  }
}
