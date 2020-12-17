import React from 'react'

import { View, Text ,StyleSheet ,Image , TouchableOpacity} from 'react-native'

import {createViewPortConfig} from 'react-native-responsive-view-port';
const { vw, vh } = createViewPortConfig();



export default function comm_card(props) {
    return (
        
        <View style= {styles.card} >
            
            {/* Image View */}
            
           
            <Image
                style={styles.cardImage}
                source={{uri : props.imageUri}}
                resizeMode = "center"
            />
            

            {/* Content and Button View */}
            
            <View style={{borderColor:"black", borderLeftWidth:0.8,}}>
                {/* Heading Text */}
                <Text style ={{marginStart:"5%",marginTop:"2%",fontSize:20*vh , color:props.headingColor}}>{props.Heading}</Text>
                {/* Content  */}
                <Text style= {{marginStart:"5%",marginTop:"5%" , maxWidth:700*vw,fontSize:40*vw }}>{props.Content}</Text>
                {/* Button */}
                <TouchableOpacity 
                style = {{marginTop:"5%" , marginStart:"10%" ,marginRight:"30%" }}
                onPress={() =>props.navigation.navigate(props.onPressuri)} 
                >
                    <Text style={{backgroundColor:props.headingColor,height:40*vh,paddingLeft:"30%",paddingTop:"5%",borderRadius:20}}>
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
    cardImage : {
        
        height: "100%",
        width : "35%"
        
    }
})

