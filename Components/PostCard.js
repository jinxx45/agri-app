import React from 'react'
import { View, Text ,StyleSheet,Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { useFonts } from 'expo-font';


import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();


export default function PostCard() {
    
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
        <View style={styles.PostCard} >

            {/* User Details */}
            <View style={{flexDirection:"row", padding:"3%" ,borderBottomWidth:1,backgroundColor:"#ebeced"}}>
                <AntDesign style={{paddingTop:"0.5%"}} name="heart" size={16} color="red" />
                <Text style={{paddingLeft:"2%",fontSize:17*vh,fontFamily:"Ham"}}>Username </Text>
            </View>

            {/* Post Caption */}

            <View style={{padding:"3%"}}>
                <Text style={{fontSize:16*vh,width:1180*vw,fontFamily:"MS"}}>Post Caption text : It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            </View>

            {/* Post Image */}

            <View >

                <Image 
                style={styles.postImage}
                resizeMode="contain"
                source ={{uri:"https://img.freepik.com/free-vector/decorative-plants-flat-image-design_24908-57299.jpg?size=626&ext=jpg"}}
                />

            </View>
            
            
            

        </View>
    )
}
const styles = StyleSheet.create({
    PostCard : {
        
        height : 400*vh,
        width : "98%",
        backgroundColor:"white",
        marginTop: "2%",
        borderColor:"grey",
        borderWidth: 1.3,
      
        
      
    
    },

    postImage:
    {
        borderColor:"black",
        width:"100%",
        height:"80%",
        
       
        
    }
})