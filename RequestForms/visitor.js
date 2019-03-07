import React, { Component } from 'react';
import { Platform, StyleSheet, KeyboardAvoidingView, Alert, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
import { styles } from './FormStyle';
import { requestParameters } from '../constants'
import InputField from './InputField'
export default class Visitor extends Component {
  state = {}
  formObject={}
  saveForm = (fieldName,fieldValue) => {
    // console.warn('This is  form parent', fieldName , fieldValue)
    this.formObject[fieldName] = fieldValue
    // console.warn('After seeting in parent', this.formObject)
    this.setState({
      formObject: this.formObject
    })
  }

  showAlert = () => {
    console.warn('Please confirm')
    Alert.alert(
      'Send form data',
      JSON.stringify(this.state.formObject),
      // this.state.name,
      [
        { text: 'Ops Forgot something', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.formContainer} behavior="height" enabled>
        <View style={styles.formBody}>
        <View style={styles.formHeading}>
        <Text > Enter Particulers Below </Text>
        </View>
          {requestParameters[this.props.visitorType].map((field) => {
            
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
                style={styles.inputFieldComp}
              </InputField>

            )
          })}
          

            <TouchableOpacity onPress={this.onPressButton}
            style={styles.touch}
            onPress={this.showAlert}
            >
              
              <Text  style={styles.buttonText}>Subbmit</Text>
            </TouchableOpacity>


          
        </View>



     </KeyboardAvoidingView>
    );
  }
}