import React from 'react'
import { View, Text , StyleSheet ,Image} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();


export default function ShareApp() {
    return (
        <View style={styles.card}>

            <Image 
            resizeMode ="cover"
            style = {styles.cardImage}
            source = {{uri : "https://lh3.googleusercontent.com/VErToK3T5_sVC9W30hJU-7D4_xZHDHDnSM9Xs4Cm9VeidKoyhoZ73Vrx3eI7EvMhGFtW3Ec5oC0O2aw-TpvR=w874-h903-rw"}}
            />

            {/* Content */}
            
            <View style={{borderColor:"black", borderLeftWidth:0.8, marginLeft:"2%"}}>
                <Text style={{width:650*vw , fontSize:25*vh,marginStart : "5%"}}>Share this App with your friends !  </Text>
                
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
        
        height: "85%",
        width : "35%",
        margin:4,
        
        
    }

    
})