import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import { styles } from './FormStyle';

export default class InputField extends Component {
    state = {
        isFocused: false
      }
    
  handleFocus = event => {
    console.warn('In focus method')
    this.setState({
      isFocused: true
    });
  }

  handleBlur = event => {
    console.warn('In Blur method')
    this.setState(() => {
      isFocused: false
    });
  }
  render() {
      return (
        <View style={styles.inputField}>
            <TextInput key={this.props.fieldName}
                placeholder={this.props.placeholder}
                selectionColor={this.props.selectionColor}
                keyboardType={this.props.keyboardType}
                underlineColorAndroid={this.state.isFocused ? 'red' : 'black'}
                
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

