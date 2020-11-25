import React from 'react'
import { View, Text ,StyleSheet,Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function PostCard() {
    return (
        <View style={styles.PostCard} >

            {/* User Details */}
            <View style={{flexDirection:"row", padding:10 ,borderBottomWidth:1,backgroundColor:"#ebeced"}}>
                <AntDesign style={{paddingTop:2.7}} name="heart" size={16} color="red" />
                <Text style={{paddingLeft:6,fontSize:15}}>Username </Text>
            </View>

            {/* Post Caption */}

            <View style={{padding:10}}>
                <Text>Post Caption text : It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Text>
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
        
        height : 350,
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