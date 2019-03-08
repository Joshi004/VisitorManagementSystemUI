import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Visitor from './RequestForms/Visitor';
import { styles } from './RequestForms/FormStyle';
export default class App extends Component {
  state = {visitorType:'forgotId'}

  // changeVisitorType = (type) => {
  //   // console.warn('Current Type is',type)
  //   // console.warn('Initial state is ',this.state)
  //   this.setState({
  //     visitorType: type
  //   })
  //   // console.warn('Chnanged state is ',this.state)
  // }

  render() {
    return (
      <View>
        {/* <View>
        <Button
          onPress={() => this.changeVisitorType('visitor')}
          title="Visitor Form"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={() => {this.changeVisitorType('vendor')}}
          title="Vendor Form"
          color="#841543"
          accessibilityLabel="Learn more about this purple button"
        />

        </View> */}
        <Visitor visitorType={'forgotId'}>
        </Visitor>
        
      </View>
    );
  }
}
