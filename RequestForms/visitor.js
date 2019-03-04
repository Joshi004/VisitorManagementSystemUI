import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../constants'
export default class Visitor extends Component {
  state = {
    isFocused: false
  }
  inputParameters = []
  componentWillMount() {
    console.log('these are input parameters', this.requestParameters)
  }


  handleFocus = event => {
    console.warn('In focus method')
    this.setState({
      isFocused: true
    });
  }

  handleBlur = event => {
    this.setState(() => {
      isFocused: false
    });
  }
  render() {
    const { isFocused } = this.state;
    return (
      <View>
        <Text style={styles.formHeading}> Enter Particulers Below </Text>
        <View style={styles.formBody}>
          {requestParameters.map((field) => {
            return (
              <TextInput key={field.fieldName}
                placeholder={field.placeholder}
                selectionColor={field.selectionColor}
                underlineColorAndroid={this.state.isFocused ? 'red' : 'black'}
                keyboardType={field.keyboardType}
                style={styles.inputField}
                onChangeText={(text) => this.setState({ text })}
                value={this.state[field.fieldName]}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
            )
          })}

        </View>
      </View>
    );
  }
}