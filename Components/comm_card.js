import React from 'react'

import { View, Text ,StyleSheet ,Image , TouchableOpacity} from 'react-native'

import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();

import { useFonts } from 'expo-font';



export default function comm_card(props) {

    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf")
    });

    if (!loaded) {
        return null;
      }
    



    return (
        
        <View style= {styles.card} >
            
            {/* Image View */}
            
           
            <Image
              
                source ={props.path}
                style={{width: 480*vw, height: 160*vh,marginLeft:-2}} 
                resizeMethod="scale"
                resizeMode="stretch"
            />
            

            {/* Content and Button View */}
            
            <View style={{borderColor:"black", borderLeftWidth:0.8,}}>
                {/* Heading Text */}
                <Text style ={{marginStart:"5%",marginTop:"2%",fontSize:22*vh , color:props.headingColor,fontFamily:"Bebas"}}>{props.Heading}</Text>
                {/* Content  */}
                <Text style= {{marginStart:"5%",marginTop:"5%" , maxWidth:700*vw,fontSize:17*vh,fontFamily:"MS" }}>{props.Content}</Text>
                {/* Button */}
                <TouchableOpacity 
                style = {{marginTop:3*vh,padding:10*vh }}
                onPress={() =>props.navigation.navigate(props.onPressuri)} 
                >
                    <Text style={{backgroundColor:props.headingColor,fontFamily:"Bebas",height:35*vh,width:600*vw,textAlign:"center",paddingTop:5*vh,fontSize:20*vh}}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
             
            
        </View>
    )
}



const styles = StyleSheet.create({
   
    card : {
        height : "31%",
        width : "97%",
        backgroundColor:"#FFFFFF",
        marginTop: "2%",
        borderColor:"grey",
        borderWidth: 0.7,
        
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        padding: 10,
        flexDirection: "row"
    },
   
})

