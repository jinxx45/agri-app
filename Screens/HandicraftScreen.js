import React from 'react'
import { Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { color } from 'react-native-reanimated';

// Importing Fonts
import { useFonts } from 'expo-font';





import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();



export default function HandicraftScreen({navigation}) {
    // Loading the Font
    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf")
    });

    if (!loaded) {
        return null;
      }
    
    return (
        
        <Onboarding
      onSkip ={()=>navigation.navigate("Home") }
      onDone ={()=>navigation.navigate("Home") }
      bottomBarColor ={"#0ff7d0"}
      transitionAnimationDuration={20}
      titleStyles ={{fontSize:40*vh,marginTop:-40*vh,color:"#d40000",fontFamily:"Bebas"}}
      subTitleStyles ={{fontFamily:"MS",fontSize:20*vh}}
      pages={[
        {
          backgroundColor: '#ffffff',
          image: <Image style={{height:380*vh,width:1280*vw,marginTop:-240*vh}} source={require("../Images/OnboardingImages/farmers.jpg")} />,
          title: 'Atmanirbhar Kisaan',
          subtitle: 'A Initiative for the upliftment of the Economy of Farmers ',
        },
        {
          backgroundColor: '#ffffff',
          image: <Image style={{height:420*vh,width:1280*vw,marginTop:-300*vh}} source={require('../Images/OnboardingImages/student.jpg')} />,
          title: 'Awarness For Students',
          subtitle: 'Done with React Native Onboarding Swiper',
          titleStyles: {fontSize:35*vh}
        },
        {
          backgroundColor: '#ffffff',
          image: <Image style={{height:390*vh,width:1270*vw,marginTop:-270*vh}} source={require("../Images/OnboardingImages/handicrafts.jpg")} />,
          title: 'Rebirth of Handicrafts',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      
      ]}
    />
    )
}
