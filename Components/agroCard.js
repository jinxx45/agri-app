import React from 'react'
import { Text, View ,StyleSheet,Image} from "react-native";
import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();

import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function agroCard(props) {

    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf")
    });

    if (!loaded) {
        return null;
      }
    
    return (
        <TouchableOpacity style={styles.agroCard}>
           <Image 
                source = {props.path}
                style={{height:114*vh,width:530*vw,marginTop:2*vh}}
                resizeMode="center"
                
           />

           <Text style={{textAlign:"center",fontSize:18*vh,fontFamily:"MS",marginTop:5*vh}}>{props.title}</Text>
            
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    agroCard:{
        height:170*vh,
        width:570*vw,
        backgroundColor:"#FEFEFE",
        borderRadius:15,

        //Shadow
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        padding: 7*vh,
    }
})