import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    formContainer:{
        height:'100%',
        justifyContent:'space-around',
        flexDirection:'column',
    },
    inputFieldComp:{
        height:'90%'
    },
    
    formHeading:{
        // flex:1,
        height:'10%',
        // fontSize:20,
        width:'100%',
        flexDirection:'column',
        backgroundColor:'powderblue',
        alignItems:'center',
        justifyContent:'center'
    },
    formBody:{
        // flex:1,
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-around',
    },
   
    inputFieldContainer:{

        // height: '100%',
        // width:'100%',
        flex:2,
        // marginBottom:40,
        paddingLeft:5,
    },
    label:{
        marginBottom: -5, 
        color:'black',
        width:'100%',
        paddingLeft:5,
        // flex:1
    },
    buttonText:{
        // width:'100%',
        // height:50,
        
        backgroundColor:"#00BCD4",
        alignItems:'center',
        // justifyContent:'center'
    },
    touch:{
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        padding: 10,
        justifyContent:'center',
        flex:1,
    },

});