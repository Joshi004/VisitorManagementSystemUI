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
        <Text style={this.state.isFocused ? styles.label: ''}>{this.state.isFocused ? this.props.placeholder : ''}</Text>
            <TextInput 
                placeholder={this.props.placeholder}
                selectionColor={this.props.selectionColor}
                keyboardType={this.props.keyboardType}
                value={this.state[this.props.fieldName]}
                underlineColorAndroid={this.state.isFocused ? 'rgb(137, 182, 246)' : 'rgb(155, 155, 155)'}
                style={styles.inputField}
                onChangeText={(text) => this.setState({ text })}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
        </View>
      );
  }
}

