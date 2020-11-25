import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import CommunityScreen from './Screens/CommunityScreen';
import UserProfileScreen from './Screens/UserProfileScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
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
