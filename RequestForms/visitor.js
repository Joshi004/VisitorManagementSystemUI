import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import {styles} from './formStyle';


export default class Visitor extends Component {
    render() {
        this.state={}
        return (
          <View>
            <Text style={styles.formHeading}> Enter Perticulers Below </Text>
            <View style={styles.formBody}>
            <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Name of visitors</Text>
            <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text} 
            />
            </View>


            <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Name of visitors</Text>
            <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text} 
            />
            </View>


            <View style={styles.formGroup}>
            <Text style={styles.inputLabel}>Name of visitors</Text>
            <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text} 
            />
            </View>
            </View>
          </View>
        );
    }   
}