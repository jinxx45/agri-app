import React from 'react'
import { View } from 'react-native'
import Card from '../Components/comm_card'
import { createStackNavigator } from '@react-navigation/stack';
import AgriScreen from './AgriScreen';
import HandicraftScreen from './HandicraftScreen';
import StudentScreen from './StudentScreen';
import AgriFormScreen from './AgriFormScreen';

// Nested Agricultural Screens
import fertilzerScreen from '../Screens/FertilizerScreen';
import trendingMethodScreen from '../Screens/trendingMethods';


import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();

const Stack = createStackNavigator();

 function CommunityScreen({navigation}) {
  
    return (
        <View style = {{backgroundColor:"yellow" , flex : 1 , justifyContent:"center", alignItems:"center"}} >
            
            <Card 
            navigation={navigation}
            Heading = "Agricultural Helpline" 
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            path = {require("../Images/OnboardingImages/farmers.jpg")}
            headingColor ="#17d1a6"
            onPressuri="Agriculture"
            />
            <Card
            navigation={navigation}
            Heading = "Youth Helpline"
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            path = {require("../Images/CommunityImages/student.png")}
            headingColor="#f2461f"
            onPressuri ="Students"
            />
            <Card
            navigation={navigation}
            Heading = "HandiCrafts Helpline"
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            path = {require("../Images/OnboardingImages/handicrafts.jpg")}
            headingColor = "#2ea1ff"
            onPressuri = "Handicrafts"
            />
        </View>
    )
}

export default function App() {
    return (
      
      <Stack.Navigator initialRouteName="CommunityScreen">
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Agriculture" component={AgriScreen} />
        <Stack.Screen name="Handicrafts" component={HandicraftScreen} />
        <Stack.Screen name="Students" component={StudentScreen} />
        <Stack.Screen name="SellBy" component={AgriFormScreen} />
        <Stack.Screen name="Fertilizer Calculator" component={fertilzerScreen} />
        <Stack.Screen name="New Trending Methods" component={trendingMethodScreen} />
        

      </Stack.Navigator>

    )
}

