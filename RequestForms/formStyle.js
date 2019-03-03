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
        // justifyContent:'right',
        flexDirection:'row',
        // borderWidth:
        width:'100%',
        borderColor: 'gray', 
        borderWidth: 1,
        // backgroundColor:'yellow',
    },
    inputField:{
        height: 40,
        // borderColor: 'gray', 
        // borderWidth: 1,
        width:'60%'
        // justifyContent:"right",
        // flex:1,
        // flexDirection:'row'
    },
    inputLabel:{
        // height: 40,
        backgroundColor:'rgb(200,200,200)', 
        // flex:1,
        color:'white',
        width:'40%'
        // flexDirection:'row'
    }
});