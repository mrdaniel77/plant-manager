import React from 'react';
import {StyleSheet,  Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

    import colors from '../Styles/colors';         
    import fonts from '../Styles/fonts';


const styles = StyleSheet.create({

    //Style Welcome
    
        containerWel:{
            flex:1
        },
        wrapper:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 20
        },
        title:{
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center',
            color: colors.heading,
            marginTop: 38,
            fontFamily: fonts.heading,
            lineHeight: 34
        },
        subtitle:{
            textAlign:'center',
            fontSize:18,
            paddingHorizontal:20,
            color:colors.heading,
            fontFamily: fonts.text
        },
        button:{
            backgroundColor:colors.green,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            marginBottom: 10,
            height: 56,
            width:56
        },
        buttonIcons:{
            fontSize:24,
            color:colors.white
        },
        img:{
            height:284,
            width:292
        },

        //Style Useridentification
        containerUser:{
            flex:1,
            width: '100%' ,
            alignItems:'center',
            justifyContent: 'space-around'
        },
        content:{
            flex:1,
            width: '100%' ,

        },
        form:{
            flex:1,
            justifyContent:'center',
            paddingHorizontal: 54, 
            alignItems:'center',
            
        },
        headerUser:{
            alignItems:'center'
        },

        emoji:{
            fontSize:54
        },
        inputUser:{
            borderBottomWidth: 1,
            borderColor:colors.green,
            color: colors.green,
            width:'100%',
            fontSize: 18,
            marginTop: 50,
            padding: 10,
            textAlign: 'center'

        },
        textUser:{
            borderColor:colors.green
        },

        titleUser:{
            fontSize:24,
            lineHeight:32,
            textAlign:'center',
            color: colors.heading,
            fontFamily:fonts.heading,
            marginTop:20
        },

        //}Style Button

        containerBut:{
            backgroundColor:colors.green,
            height: 56,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center'

        },
        textBut:{
            fontSize:16,
            color:colors.white,
            fontFamily:fonts.heading
        },
        footerBut:{
            width: '100%',
            marginTop: 40,
            paddingHorizontal:50

        },

    //Style confirmation

        containerConf:{
            flex:1,
            alignItems:'center',
            justifyContent:'space-around' 
        },
        contentConf:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            padding:30
        },
        titleConf:{
            fontSize:22,
            fontFamily:fonts.heading,
            textAlign:'center',
            color:colors.heading,
            lineHeight:38,
            marginTop:15
        },
        subtitleConf:{
            fontFamily:fonts.text,
            textAlign:'center',
            fontSize:17,
            paddingVertical:10 ,
            color:colors.heading
        },
        emojiConf:{
            fontSize:78
        },
        footerConf:{
            width:'100%',
            paddingHorizontal:50,
            marginTop: 20
        },

        //style PlantSelect

        containerPlant:{
            flex:1,            
            backgroundColor:colors.background,

        },
        headerPlant:{
            paddingHorizontal:25    
        },
        titlePlant:{
            fontSize:17,
            color:colors.heading,
            fontFamily:fonts.heading,
            lineHeight:20,
            marginTop:15,
            marginLeft:20,
        },
        subtitlePlant:{
            fontSize:17,
            fontFamily:fonts.text,
            color:colors.heading,
            lineHeight:20,
            marginLeft:20,

        },
        listPlant:{
            marginLeft:10,
            paddingHorizontal:10  


        },
        plants:{
            flex:1,
            paddingHorizontal:32,
            justifyContent:'center',
        },
         


        //Style Header

        containerHead:{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            padding:20,
            marginTop:40,
            
                         
        },
        greetingHead:{
            fontSize:32,
            color:colors.heading,
            fontFamily:fonts.text
        },
        userNameHead:{
            fontSize:32,
            fontFamily:fonts.heading,
            color:colors.heading,
            lineHeight:40
        },
        imgHead:{
            width:70,
            height:70,
            borderRadius:40
        },
        //style Envirament
        containerEnv:{
            
            backgroundColor:colors.shape,
            width:76,
            height:40,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:12,
            marginHorizontal:5

            
        },
            containerActive:{
               
                backgroundColor:colors.green_light,

            },
            textEnv:{
                color:colors.heading,
                fontFamily:fonts.text
            },
            textActive:{
                fontFamily:fonts.heading,
                color:colors.green_dark
            },
            environmentList:{
                height:40,
                justifyContent:'center',
                paddingBottom:5,
                marginVertical:32
            },
            // style Card

            containerCard:{
                flex:1,
                maxWidth:'45%',
                backgroundColor:colors.shape,
                borderRadius:20,
                paddingVertical:10,
                alignItems:'center',
                margin:10
            },
            textCard:{
                color:colors.green_dark,
                fontFamily:fonts.heading,
                marginVertical:16

            },

            // style Load

            containerLoad:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            },
            animationLoad:{
                backgroundColor:'transparent',
                width:200,
                height:200

            },
})
export default styles;


    