import React, { Component } from 'react';
import { Platform, StyleSheet, Alert, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../constants'
import InputField from './InputField'
export default class Visitor extends Component {
  state = {}
  formObject={}
  saveForm = (fieldName,fieldValue) => {
    // console.warn('This is  form parent', fieldName , fieldValue)
    this.formObject[fieldName] = fieldValue
    console.warn('After seeting in parent', this.formObject)
    this.setState(this.formObject)
    console.warn('After setting state',this.state.formObject)
  }

  alert() {
    console.warn('Please confirm',this.state)
    // Alert.alert(
    //   'Send form data',
    //   // this.state.name,
    //   [
    //     { text: 'Ops Forgot something', onPress: () => console.log('Ask me later pressed') },
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     { text: 'OK', onPress: () => console.log('OK Pressed') },
    //   ],
    //   { cancelable: false },
    // );

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
          

            <TouchableOpacity onPress={this.onPressButton}
            style={styles.button}
            onPress={this.alert}
            >
              
              <Text>This is text 101</Text>
            </TouchableOpacity>


          
        </View>



      </View>
    );
  }
}