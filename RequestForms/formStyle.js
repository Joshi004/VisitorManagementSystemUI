import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    formHeading:{
        fontSize:20,
        marginTop:5,
        backgroundColor:'grey',
        textAlign:'center'
    },
    formBody:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        height:'100%',
        width:'100%',
    },
    formGroup:{
        flexDirection:'row',
        width:'100%',
        borderColor: 'gray', 
        borderWidth: 1,
    },
    inputField:{
        height: 40,
        width:'60%'
    },
    inputLabel:{
        backgroundColor:'rgb(200,200,200)', 
        color:'white',
        width:'40%'
    }
});