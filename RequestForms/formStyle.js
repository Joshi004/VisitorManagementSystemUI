import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    formHeading:{
        fontSize:20,
        padding:5,
        backgroundColor:'grey',
        textAlign:'center'
    },
    formBody:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        height:'100%',
        width:'100%',
    },
   
    inputField:{
        height: 60,
        width:'100%',
        marginBottom:40,
        padding:5
    },
    label:{
        // marginTop:20,
        backgroundColor:'rgb(245,245,245)', 
        color:'black',
        width:'100%',
        padding:10,
    }
});