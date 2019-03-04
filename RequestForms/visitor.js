import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {styles} from './formStyle';
import {requestParameters} from '../constants'

export default class Visitor extends Component {
  state={}
  inputParameters=[]
  componentWillMount(){
    // this.setState({data : inputObject});
    console.log('these are input parameters',this.requestParameters)
}
    render() {
        this.state={}
        this.inputFields=[]
        return (
          <View>
            <Text style={styles.formHeading}> Enter Perticulers Below </Text>
            <View style={styles.formBody}>
            {requestParameters.map((field)=>{
              return(
                <TextInput 
                placeholder={field.placeholder}
                selectionColor={field.selectionColor}
                underlineColorAndroid={field.underlineColorAndroid}
                keyboardType={field.keyboardType}
                style={styles.inputField} 
                onChangeText={(text) => this.setState({text})}
                value={this.state[field.fieldName]}
                // keyboardType='numeric'
              />
              )

            })}
            
            </View>
          </View>
        );
    }   
}