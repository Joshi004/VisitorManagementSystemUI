import React, { Component } from 'react';
import { Platform,BackHandler, StyleSheet, KeyboardAvoidingView, Alert, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';
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

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    // console.warn('Component will mount now')
    this.setState({
      fieldFocused:false
    })
  }

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}
  showAlert = () => {
    // console.warn('Please confirm')
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

  fieldFocused = (bol)=>{
    // console.warn('Field focused called as',bol)
    this.setState({
      fieldFocused:bol
    })
  }
  handleBackButtonClick() {
    this.setState({
      fieldFocused:false
    })
}

  render() {
   
    return (
      <View style={styles.formContainer}>
        <View style={this.state.fieldFocused ? styles.formBodyShrink : styles.formBodyExpand}>
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
                saveForm={this.saveForm}
                fieldFocused = {this.fieldFocused}
                >
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



     </View>
    );
  }
}