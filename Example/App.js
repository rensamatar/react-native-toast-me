import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Button } from 'react-native'
// Import react-native-toast-me
import ToastMe from 'react-native-toast-me'

const MyButton = ({ onPress, type }) => (
  <TouchableHighlight
    onPress={onPress}
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

export default class App extends Component {

  constructor(props) {
    super(props)
    // Set state for the message.
    this.state = {
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
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ margin: 10, justifyContent: 'center' }}>
          <MyButton type="success" onPress={() => this.toggleMessageBox('Success toast called!', 'success')} />
          <MyButton type="error" onPress={() => this.toggleMessageBox('Error toast called!', 'error')} />
          <MyButton type="warning" onPress={() => this.toggleMessageBox('Warning toast called!', 'warning')} />
          <MyButton type="info" onPress={() => this.toggleMessageBox('Info toast called!', 'info')} />
        </View>
        <ToastMe
          message={this.state.message}
          type={this.state.type}
          visible={this.state.isToggle} />
      </View>
    )
  }
}

