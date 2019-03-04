import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import { styles } from './FormStyle';

export default class InputField extends Component {
    state = {
        isFocused: false
      }
    
  handleFocus = event => {
    this.setState({
      isFocused: true
    });
  }

  handleBlur = event => {
    this.setState({
      isFocused: false
    });
  }
  render() {
      return (
        <View style={styles.inputField}>
        <Text style={styles.label}>{this.props.placeholder}</Text>
            <TextInput 
                placeholder={this.props.placeholder}
                selectionColor={this.props.selectionColor}
                keyboardType={this.props.keyboardType}
                underlineColorAndroid={this.state.isFocused ? 'blue' : 'black'}
                style={styles.inputField}
                onChangeText={(text) => this.setState({ text })}
                value={this.state[this.props.fieldName]}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
        </View>
      );
  }
}

