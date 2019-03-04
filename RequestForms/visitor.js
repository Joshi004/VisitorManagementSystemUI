import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../constants'
import InputField from './InputField'
export default class Visitor extends Component {
  
  
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
                underlineColorAndroid={field.underlineColorAndroid}>
              </InputField>
            )
          })}

        </View>
      </View>
    );
  }
}