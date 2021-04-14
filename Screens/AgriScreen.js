import React from 'react'
import {  View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import AgriCard from "../Components/agroCard"



const Stack = createStackNavigator();


 export default function AgriScreen({navigation}) {
    return (

        <View style={{flex:1}}>
            <View style = {{backgroundColor:"#FEFEE0" , flex : 0.4 ,justifyContent:"space-evenly", alignItems:"center",flexDirection:"row",}}>
                <AgriCard 
                path = {require("../Images/AgriCard/techinques.png")}
                title = "New Trending Methods"
                onPressuri = "New Trending Methods"
                navigation={navigation}
                
                />
                <AgriCard
                path = {require("../Images/AgriCard/managecrops.png")}
                title = "Manage Your Crops"
                />
            </View>

            <View style = {{backgroundColor:"#FEFEE0" , flex : 0.4 ,justifyContent:"space-evenly", alignItems:"center",flexDirection:"row",}}>
                <AgriCard
                path = {require("../Images/AgriCard/calculator.jpg")}
                title ="Fertilizer Calculator"
                navigation={navigation}
                onPressuri="Fertilizer Calculator"
                />
                <AgriCard
                path = {require("../Images/AgriCard/exchangebyproducts.png")}
                title = "By-Products Exchange"
                />
            </View>

            <View style = {{backgroundColor:"#FEFEE0" , flex : 0.4 ,justifyContent:"space-evenly", alignItems:"center",flexDirection:"row",}}>
                <AgriCard 
                path = {require("../Images/AgriCard/market.png")}
                title = "Your Market"
                />
                <AgriCard
                path = {require("../Images/AgriCard/experthelp.jpg")}
                title = "Expert Help"
                />
            </View>
        </View>
        
        

        

        
       
            )
}



