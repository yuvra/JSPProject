import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
} from 'native-base';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      email: {
        value: '',
        err: '',
      },
      name: {
        value: '',
        err: '',
      },
      surname: {
        value: '',
        err: '',
      },
      password: {
        value: '',
        err: '',
      },
      contactNumber: {
        value: '',
        err: '',
      },
      location: {
        value: '',
        err: '',
      },
    };
    // this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange = event => {
    debugger;
    console.log('event.target.id - ', event.target.id);
    console.log('event.target.value - ', event.target.value);
  };

  onTextChange = (id, text) => {
    debugger;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(String(text).toLowerCase());
    const errMessage = isEmailValid ? 'Email id' : '';
    const oldState = {...this.state};
    oldState[id].value = text;
    oldState[id].err = errMessage;
    this.setState(oldState);
  };

  render() {
    const EMAIL = 'email';
    return (
      <View style={{padding: 50}}>
        <Form>
          <Text>{JSON.stringify(this.state)}</Text>
          <Item success>
            <Input placeholder='Textbox with Success Input'/>
            <Icon name='checkmark-circle' />
          </Item>
          <Item floatingLabel error={false}>
            <Label>Email Id</Label>
            <Input
              id="email"
              // onChange={(event) => this.onValueChange(event)}
              value={this.state[EMAIL].value}
              onChangeText={text => this.onTextChange(EMAIL, text)}
            />
          </Item>
          {(this.state[EMAIL].err!=="") && (
            <Text style={{color: 'red', marginLeft: 16}}>Invalid Email</Text>
          )}
          <Item floatingLabel>
            <Label>Name</Label>
            <Input maxLength={20} />
          </Item>
          <Item floatingLabel>
            <Label>Surname</Label>
            <Input maxLength={20} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} maxLength={8} />
          </Item>
          <Item floatingLabel last>
            <Label>Contact number</Label>
            <Input maxLength={20} />
          </Item>
          <Item floatingLabel last>
            <Label>Location</Label>
            <Input maxLength={150} />
          </Item>
        </Form>
      </View>
    );
  }
}
