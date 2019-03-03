import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Visitor from './RequestForms/visitor';
export default class App extends Component {
  render() {
      return (
        <View>
          <Visitor />
        </View>
      );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   text: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
