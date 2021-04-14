import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import { useFonts } from 'expo-font';

import {createViewPortConfig} from 'react-native-responsive-view-port';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { vw, vh } = createViewPortConfig();

export default function TrendingMethodCard(props) {


        
    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf"),
        Ham : require("../assets/fonts/Hamburge-Free.ttf")
    });

    
    if (!loaded) {
        return null;
      }
    return (
        <TouchableOpacity style={styles.trendingCard}>
            {/* Method Title  */}
            <Text style={{fontFamily:"Bebas",fontSize:20*vh,padding:8*vh,backgroundColor:props.headerColor,color:"white"}}>{props.title}</Text>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
                />


                <View style={{flexDirection:"row"}}>

                      
             <Image
              
              source ={props.path}
              style={{
                width: 450*vw, height: 150*vh
              
              }} 
              resizeMode="stretch"
          />


                <Text style={{fontFamily:"MS",width:225*vh,padding:5*vh,paddingLeft:10*vh}}>{props.caption}</Text>
                </View>
           

          
          
                 
              
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    trendingCard:{
        flexDirection:"column",
        height : 200*vh,
        width : "95%",
        backgroundColor:"white",
        marginTop: "4%",
        borderColor:"grey",
        borderWidth: 1.3,
    }
})
