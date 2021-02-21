import React from 'react'
import { View, Text , ScrollView} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Post from "../Components/PostCard"
import { useFonts } from 'expo-font';

import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();

export default function HomeScreen() {
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
        <View >
            {/* Header with App Name*/}
            <View style={{backgroundColor:"#694fad",flexDirection:"row" ,justifyContent:"center",height:80,alignItems:"flex-end",paddingBottom:16}}>
                <Entypo style={{paddingBottom:1}} name="paper-plane" size={24*vh} color="yellow" />
                <Text style={{marginLeft:10, color:"white",fontSize:20*vh,fontFamily:"Bebas",letterSpacing:2}}>Atmanirbhar Kisaan</Text>
            </View>

            {/* Posts in the Database */}
            <ScrollView contentContainerStyle={{ paddingBottom: 85 ,alignItems:"center" }}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
            

        </View>
    )
}
