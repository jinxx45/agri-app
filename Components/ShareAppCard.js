import React from 'react'
import { View, Text , StyleSheet ,Image} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useFonts } from 'expo-font';


import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();


export default function ShareApp() {
    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf")
    });

    if (!loaded) {
        return null;
      }
    
    return (
        <View style={styles.card}>

            <Image 
            resizeMode ="cover"
            style = {styles.cardImage}
            source = {{uri : "https://freepngimg.com/thumb/web_design/51028-5-share-image-hd-image-free-png.png"}}
            />

            {/* Content */}
            
            <View style={{borderColor:"black", borderLeftWidth:0.8, marginLeft:"2%"}}>
                <Text style={{width:650*vw , fontSize:25*vh,marginStart : "5%",fontFamily:"Bebas"}}>Share this App with your friends  </Text>
                
                <View style={{flexDirection:"row", justifyContent:"space-around" , marginTop:"10%"}}>
                    <Entypo name="facebook-with-circle" size={40} color="#694fad" />
                    <Ionicons name="logo-whatsapp" size={40} color="#694fad" />
                    <Entypo name="instagram-with-circle" size={40}color="#694fad" />
                </View>
                

            </View>
           
        </View>
    )
}
const styles = StyleSheet.create({
    card : {
        height : 225*vh,
        width : "97%",
        backgroundColor:"#B0D8FF",
        marginTop: "6%",
        borderColor:"grey",
        borderWidth: 0.7,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        padding: 10,
        flexDirection: "row"
    },
    
    cardImage : {
        
        height: "94%",
        width : "40%",
        margin:4,
        resizeMode:'contain'
        
        
    }

    
})