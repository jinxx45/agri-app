import React from 'react'
import { View, Text ,Image } from 'react-native'

import Card from '../Components/agroCard'




import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();

import { useFonts } from 'expo-font';


export default function StudentScreen() {
    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf")
    });

    if (!loaded) {
        return null;
      }
    

    return (
        <View style={{flex:1}}>
            <View style ={{backgroundColor:"#FEEECE" , flex : 0.6 ,justifyContent:"space-evenly", alignItems:"center",flexDirection:"column",margin:4, elevation:10,marginTop:6*vh,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 10,
        padding: 10,
        }}> 
                <Image 
                source = {require("../Images/YouthScreen/seedling.png")}
                style={{height:200*vh,width:600*vw,resizeMode:"center",marginTop:-50*vh}}
                />
               
                <Text style={{fontFamily:"Bebas",color:"green",fontSize:40*vh,marginTop:-20*vh}}>Plant-O-Mania</Text>
                <Text style={{fontFamily:"Bebas",color:"red",fontSize:24*vh,textAlign:"center"}}>Participate in this Seedling Mania and get a chance to win Exciting Prizes </Text>

   
               
                
            </View >

            <View style ={{backgroundColor:"#B2D8E4" , flex : 0.4 ,justifyContent:"space-evenly", alignItems:"center",flexDirection:"row",}}>
            <Card
                path = {require("../Images/YouthScreen/plant-activity.png")}
                title = "Your Plant Activity"
                />
            <Card
                path = {require("../Images/YouthScreen/leaderboard.jpg")}
                title = "LeaderBoard"
                />
            
            </View>
        </View>
    )
}
