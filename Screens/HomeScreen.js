import React from 'react'
import { View, Text , ScrollView} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Post from "../Components/PostCard"

export default function HomeScreen() {
    return (
        <View >
            {/* Header with App Name*/}
            <View style={{backgroundColor:"#694fad",flexDirection:"row" ,justifyContent:"center",height:80,alignItems:"flex-end",paddingBottom:16}}>
                <Entypo style={{paddingBottom:1}} name="paper-plane" size={24} color="yellow" />
                <Text style={{marginLeft:10, color:"white",fontSize:25}}>App Name</Text>
            </View>

            {/* Posts in the Database */}
            <ScrollView contentContainerStyle={{ paddingBottom: 85 ,alignItems:"center" }}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
            

        </View>
    )
}
