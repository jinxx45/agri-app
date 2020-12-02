import React from 'react'
import { View, Text } from 'react-native'
import UserCard from "../Components/UserProfileCard"
import ShareCard from '../Components/ShareAppCard'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

 function UserProfileScreen({navigation}) {
    return (
        <View style={{ alignItems: "center"}}>
            <UserCard navigation={navigation}/>
            <ShareCard />
        </View>
    )
}



export default function App() {
    return (
      
      <Stack.Navigator initialRouteName="UserProfileScreen">
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

      </Stack.Navigator>

    )
}

