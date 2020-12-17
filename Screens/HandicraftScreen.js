import React from 'react'
import { View, Text , Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({navigation}) {
    return (
        <Onboarding
        onSkip ={()=>navigation.navigate("Home") }
        onDone ={()=>navigation.navigate("Home") }
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require("../Images/favicon.png")} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../Images/favicon.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../Images/favicon.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        
        ]}
      />
    )
}
