import React, { Component } from 'react';
import { Platform, StyleSheet, Alert, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../constants'
import InputField from './InputField'
export default class Visitor extends Component {
  state = {}

  saveForm = (keyValue) => {
    console.log('This is  form parent', keyValue)
    this.setState(
      keyValue
    )
    console.log('After seeting in parent', this.state)
  }

  alert() {
    console.warn('Form is subbmitted')
    Alert.alert(
      'Sending the data for name',
      this.state.name,
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true },
    );
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
                saveForm={this.saveForm}>
              </InputField>
            )
          })}
          <View style={styles.subbmitButton}>

            <Button
              title="Subbmit Form"
              color="#00BCD4"
              // onPress={this.alert()}
              style={styles.subbmitButton}
            />


          </View>
        </View>



      </View>
    );
  }
}