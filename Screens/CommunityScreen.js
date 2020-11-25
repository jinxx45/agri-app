import React from 'react'
import { View, Text } from 'react-native'
import Card from '../Components/comm_card'

export default function CommunityScreen() {
    return (
        <View style = {{backgroundColor:"yellow" , flex : 1 , justifyContent:"center", alignItems:"center"}} >
            
            <Card 
            Heading = "Agricultural Helpline" 
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            imageUri = 'https://lh4.googleusercontent.com/Avb2JWphhQkO6qtmgwDmzAxP8bzCIkmCPOXCZ25m2p7ISX82ij-ADdkEvHrDLfv8qHXFrXZdwwE7g2i5_kTn=w1919-h903'
            headingColor ="#17d1a6"
            />
            <Card
            Heading = "Youth Helpline"
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            imageUri ="https://lh5.googleusercontent.com/JjTpKNG30dBXkZLLmYGoKYp3yMAFokctzai0zRF2_G5q9RIuaOLXtaNTKzgbo39nybJJCCPGCGUCR-H0cvyL=w1919-h903-rw"
            headingColor="#f2461f"/>
            <Card
            Heading = "HandiCrafts Helpline"
            Content = "Get a Helpline to sell the products ,get the idea about prices of crops,sell your by products at a good rate and so on"
            imageUri = "https://lh4.googleusercontent.com/XdNzf7SYQD7_IysGm1EkrIbzcbiyBCu5ynj3rNdIdtKfMVwNAoJMm4f5DQKguGfgYCbruyc2KtLA6AX6IR0S=w1919-h903"
            headingColor = "#2ea1ff"
            />
        </View>
    )
}
