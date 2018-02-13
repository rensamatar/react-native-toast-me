# react-native-toast-me [![Build Status](https://travis-ci.org/rensamatar/react-native-toat-me.svg?branch=master)](https://travis-ci.org/newtonry/react-native-toast-me)

This component make you easy to handle the exception message.


## Installation
```npm install react-native-toast-me``` or ```yarn add react-native-toast-me```


## How to use
```js
import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

...

// Import ToastMe from react-native-toast-me
import ToastMe from 'react-native-toast-me'

// Sample custom button components.
const MyButton = ({ callToast, type }) => (
  <TouchableHighlight
    onPress={callToast}
    underlayColor="#dddddd"
    style={{
      marginTop: 20,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ededed',
      borderWidth: 1,
      borderColor: '#dddddd'
    }}>
    <Text>Call {type}</Text>
  </TouchableHighlight>
)

export default class Sample extends Component {

  constructor(props) {
    super(props)
    this.state = {

      // Set default state to handle the message
      // message : The message you want to show.
      // type: The type of message with string (success, error, warning, info)
      // isToggle: To toggle the message box in bool
      message: '',
      type: 'success',
      isToggle: false,
    }
  }

  toggleMessageBox = (message, type) => {
    this.setState({
      isToggle: !this.state.isToggle,
      message: message,
      type: type
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ margin: 10, justifyContent: 'center' }}>
          <MyButton
            type="success"
            callToast={() => this.toggleMessageBox('Success toast called!', 'success')}
          />
          <MyButton
            type="error"
            callToast={() => this.toggleMessageBox('Error toast called!', 'error')}
          />
          <MyButton
            type="warning"
            callToast={() => this.toggleMessageBox('Warning toast called!', 'warning')}
          />
          <MyButton
            type="info"
            callToast={() => this.toggleMessageBox('Info toast called!', 'info')}
          />
        </View>
        <ToastMe
          type={this.state.type}
          message={this.state.message}
          visible={this.state.isToggle} />
      </View>
    )
  }
}

```

### Props

```type``` - The type of message to handle (success, warning, error, info).

```message``` - The message you want to show inthe box.

```visible``` - the state to toggle message box (default is `false`).

## Contributing
This is pretty basic at the moment, but if you have new features, requests, or would like to contribute feel free to open a PR and ping me!