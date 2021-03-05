import React from 'react'
import { View, Text,TextInput ,Image,StyleSheet,TouchableOpacity,Linking} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font';

import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();



export default function LoginScreen(props) {

    const [loaded, error] = useFonts
    ({ 
       
        Bebas : require("../assets/fonts/Bebas.ttf") ,
        MS : require("../assets/fonts/ModernSans-Light.otf"),
        Ham : require("../assets/fonts/Hamburge-Free.ttf")
    });

    
    if (!loaded) {
        return null;
      }

    return (
        
        <ScrollView>

           <Image
           style={{height:300*vh,width:1300*vw,marginTop:-20*vh}}
            source={require("../Images/CommunityImages/login.jpg")}
            resizeMethod="auto"
            resizeMode="center"
           
           />

           {/* Text Inputs */}
           
           <TextInput
                style={styles.textInput}
                placeholder="Username"
                />

           <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                />
          
          <TouchableOpacity 
                style = {{marginTop : "10%",backgroundColor :'#694fad', width:180, height:40,alignSelf:"center",borderRadius:15}}
               
                >
                
                    <Text style={{paddingTop:10*vh,  color:"white" ,alignSelf:"center",fontFamily:"Bebas",fontSize:19*vh}}>
                        Sign In 
                    </Text>
                </TouchableOpacity>

            <Text style={{alignSelf:"center",marginTop:"4%",fontFamily:"MS",fontSize:16*vh}}
           
            >
                Dont Have an account ? 
                <Text style={{color:"blue"}}
                      onPress={() =>props.navigation.navigate("Register")}
                >  Register Now !</Text>
            </Text>
           
          

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput :{
        height: 40*vh,
         borderColor: 'gray', 
         borderWidth: 1,
         width:1090*vw,
         alignSelf:"center",
         padding:"2%",
         borderRadius:15,
         marginTop:"10%",
         fontFamily:"MS",
         fontSize:17*vh
         
    }
})