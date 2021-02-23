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

import { useFonts } from 'expo-font';

import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();




const Tab = createMaterialBottomTabNavigator();

export default function App({navigation}) {

//Loading Font 




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

  const [loaded, error] = useFonts
({ 
   
    Bebas : require("./assets/fonts/Bebas.ttf") ,
    MS : require("./assets/fonts/ModernSans-Light.otf")
});

if (!loaded) {
    return null;
  }


  if(isFirslaunch==null)
  {
    return null;
  }
  else if (isFirslaunch==true)
  {
    return(
      <Onboarding
      onSkip ={()=>props.navigation.navigate("Home") }
      onDone ={()=>props.navigation.navigate("Home") }
      bottomBarColor ={"#0ff7d0"}
      transitionAnimationDuration={20}
      titleStyles ={{fontSize:40*vh,marginTop:-40*vh,color:"#d40000",fontFamily:"Bebas"}}
      subTitleStyles ={{fontFamily:"MS",fontSize:20*vh}}
      pages={[
        {
          backgroundColor: '#ffffff',
          image: <Image style={{height:380*vh,width:1280*vw,marginTop:-240*vh}} source={require("./Images/OnboardingImages/farmers.jpg")} />,
          title: 'Atmanirbhar Kisaan',
          subtitle: 'A Initiative for the upliftment of the Economy of Farmers ',
        },
        {
          backgroundColor: '#ffffff',
          image: <Image style={{height:420*vh,width:1280*vw,marginTop:-300*vh}} source={require('./Images/OnboardingImages/student.jpg')} />,
          title: 'Awarness For Students',
          subtitle: 'Done with React Native Onboarding Swiper',
          titleStyles: {fontSize:35*vh}
        },
        {
          backgroundColor: '#ffffff',
          image: <Image style={{height:390*vh,width:1270*vw,marginTop:-270*vh}} source={require("./Images/OnboardingImages/handicrafts.jpg")} />,
          title: 'Rebirth of Handicrafts',
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
