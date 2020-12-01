import React from 'react'
import { View, Text } from 'react-native'
import Card from '../Components/comm_card'
import { createStackNavigator } from '@react-navigation/stack';
import AgriScreen from './AgriScreen';
import HandicraftScreen from './HandicraftScreen';
import StudentScreen from './StudentScreen';

const Stack = createStackNavigator();

 function CommunityScreen({navigation}) {
    return (
        <View style = {{backgroundColor:"yellow" , flex : 1 , justifyContent:"center", alignItems:"center"}} >
            
            <Card 
            navigation={navigation}
            Heading = "Agricultural Helpline" 
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            imageUri = 'https://lh4.googleusercontent.com/Avb2JWphhQkO6qtmgwDmzAxP8bzCIkmCPOXCZ25m2p7ISX82ij-ADdkEvHrDLfv8qHXFrXZdwwE7g2i5_kTn=w1919-h903'
            headingColor ="#17d1a6"
            onPressuri="AgriScreen"
            />
            <Card
            navigation={navigation}
            Heading = "Youth Helpline"
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            imageUri ="https://lh5.googleusercontent.com/JjTpKNG30dBXkZLLmYGoKYp3yMAFokctzai0zRF2_G5q9RIuaOLXtaNTKzgbo39nybJJCCPGCGUCR-H0cvyL=w1919-h903-rw"
            headingColor="#f2461f"
            onPressuri ="StudentScreen"
            />
            <Card
            navigation={navigation}
            Heading = "HandiCrafts Helpline"
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            imageUri = "https://lh4.googleusercontent.com/XdNzf7SYQD7_IysGm1EkrIbzcbiyBCu5ynj3rNdIdtKfMVwNAoJMm4f5DQKguGfgYCbruyc2KtLA6AX6IR0S=w1919-h903"
            headingColor = "#2ea1ff"
            onPressuri = "HandicraftScreen"
            />
        </View>
    )
}

export default function App() {
    return (
      
      <Stack.Navigator initialRouteName="CommunityScreen">
        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
        <Stack.Screen name="AgriScreen" component={AgriScreen} />
        <Stack.Screen name="HandicraftScreen" component={HandicraftScreen} />
        <Stack.Screen name="StudentScreen" component={StudentScreen} />

      </Stack.Navigator>

    )
}

