import React from 'react'
import { View, Text } from 'react-native'
import UserCard from "../Components/UserProfileCard"
import ShareCard from '../Components/ShareAppCard'

export default function UserProfileScreen() {
    return (
        <View style={{ alignItems: "center"}}>
            <UserCard/>
            <ShareCard/>
        </View>
    )
}
