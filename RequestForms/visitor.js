import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../constants'
import InputField from './InputField'
export default class Visitor extends Component {
  state ={}
  saveForm = (keyValue) => {
    console.log('This is  form parent',keyValue)
    this.setState(
      keyValue
    )
    console.log('After seeting in parent',this.state)
  }
  render() {
    return (
      <View>
        <Text style={styles.formHeading}> Enter Particulers Below </Text>
        <View style={styles.formBody}>
          {requestParameters.map((field) => {
            return (
              <InputField
                key={field.fieldName}
                fieldName={field.fieldName}
                placeholder={field.placeholder}
                selectionColor={field.selectionColor}
                keyboardType={field.keyboardType}
                focusedUnderlineColor={field.focusedUnderlineColor}
                blurUnderlineColor={field.blurUnderlineColor}
                saveForm = {this.saveForm}>
              </InputField>
            )
          })}

        </View>
      </View>
    );
  }
}