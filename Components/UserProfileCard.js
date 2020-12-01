import React from 'react'
import { View,  StyleSheet ,Image ,Text , TouchableOpacity} from 'react-native'
import LoginScreen from '../Screens/LoginScreen'





// Login Page



export default function UserProfileCard(props ) {
    return (

        // ## When the user is not Signed in 
        
        <View style={styles.userCard}>
            <Image
        style={styles.usercardImage}
        source={{
          uri: 'https://lh4.googleusercontent.com/wXgo1bCfm9IdpgjY79ZxQuwcejJM7tQyDca80cFre8_29q8Faiy8s04-4NWF31Lm_0VtemoQGYG5d3enRY_2=w1919-h903',
        }}
        resizeMode ="center"
      />    
            <View style={{flexDirection:"column"}}>
                <Text style={{marginTop:"5%" , marginLeft:"5%",fontSize:20}}>User Dashboard</Text>
                <Text style={{marginTop:"5%" , marginLeft:"5%" , width: 200}}>Get track of your content , messages and forum and stay tuned </Text>
                
                <TouchableOpacity 
                style = {{marginLeft:10, marginTop : 15,backgroundColor :'#694fad', width:180, height:30}}
                onPress={() =>props.navigation.navigate("Login")}  
                >
                
                    <Text style={{paddingTop : 6, paddingLeft : 30 , color:"white" }}>
                        Sign In 
                    </Text>
                </TouchableOpacity>
            </View>           
        
        
        </View>
    )
}

const styles = StyleSheet.create({
    userCard : {
        
            height : 180,
            width : "97%",
            backgroundColor:"#B0D8FF",
            marginTop: "10%",
            borderColor:"grey",
            borderWidth: 0.8,
            elevation:10,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            flexDirection: "row",
        
        },
    
        usercardImage : {
        
            height: "85%",
            width : "35%",
            margin:10,
            borderRadius : 10,
            borderColor:"black",
            borderWidth:4
        }
    
})