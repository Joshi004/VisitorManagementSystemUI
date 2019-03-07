import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    formContainer:{
        height:'100%',
        justifyContent:'space-between',
        flexDirection:'column',
    },
    inputFieldComp:{
        height:'90%'
    },
    
    formHeading:{
        flex:1,
        height:'10%',
        // fontSize:20,
        width:'100%',
        flexDirection:'column',
        backgroundColor:'powderblue',
        alignItems:'center',
        justifyContent:'center'
    },
    formBodyExpand:{
        // flex:1,
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    formBodyShrink:{
        // flex:1,
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    inputFieldContainer:{

        height: '16%',
        paddingLeft:5,
    },
    chipInput:{
        fontSize:10,
        backgroundColor:'pink'
    },
    label:{
        marginBottom: -5, 
        color:'black',
        width:'100%',
        paddingLeft:5,
        height:'50%'
    },
    buttonText:{

        backgroundColor:"#00BCD4",
        alignItems:'center',
    },
    touch:{
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        padding: 10,
        justifyContent:'center',
        flex:1,
        height:'10%'
    },

});