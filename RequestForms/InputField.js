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
    console.log('This is event',this.state.value)
    this.setState({
      isFocused: false
    });
    console.log('Going to set key as ',this.props.fieldName)
    this.props.saveForm(this.props.fieldName,this.state.value);
  }

  handleChangeText = text => {
    this.setState({
      value: text
    });
  }
  render() {
      return (
        <View style={styles.inputField}>
        <Text style={this.state.isFocused ? styles.label: ''}>
        {this.state.isFocused ? this.props.placeholder : ''}
        </Text>
            <TextInput 
                placeholder={!this.state.isFocused & !this.state.value ? this.props.placeholder : null}
                selectionColor={this.props.selectionColor}
                keyboardType={this.props.keyboardType}
                value={this.state[this.props.fieldName]}
                underlineColorAndroid={this.state.isFocused ? this.props.focusedUnderlineColor:this.props.blurUnderlineColor}
                style={styles.inputField}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur }
                onChangeText={this.handleChangeText}
              />
        </View>
      );
  }
}

