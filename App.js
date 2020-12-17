import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Image} from "react-native"

import HomeScreen from './Screens/HomeScreen';
import CommunityScreen from './Screens/CommunityScreen';
import UserProfileScreen from './Screens/UserProfileScreen';
import Onboarding from 'react-native-onboarding-swiper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';




const Tab = createMaterialBottomTabNavigator();

export default function App({navigation}) {
  const [isFirslaunch, setisFirstlaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if(value==null){
        AsyncStorage.setItem("alreadyLaunched","true");
        setisFirstlaunch(true);
      }
      else {setisFirstlaunch(false);} 

    })
   
  }, []);

  if(isFirslaunch==null)
  {
    return null;
  }
  else if (isFirslaunch==true)
  {
    return(
      <Onboarding
      onSkip ={()=>navigation.navigate("Home") }
      onDone ={()=>navigation.navigate("Home") }
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require("./Images/favicon.png")} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('./Images/favicon.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('./Images/favicon.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      
      ]}
    />

    )
  }
  else {
    return (
<NavigationContainer>
    <Tab.Navigator shifting="true" activeColor="#fff130" labeled ="false" barStyle={{ backgroundColor: '#694fad' , height:55 }}>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Community" component={CommunityScreen}
       options={{
        tabBarLabel: 'Community',
        tabBarIcon: ({ color }) => (
          <AntDesign name="exclamationcircleo" size={24} color={color} />
        ),
      }} />
      <Tab.Screen name="User Profile" component={UserProfileScreen}
       options={{
        tabBarLabel: 'User Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  </NavigationContainer>
    )
  }
}
